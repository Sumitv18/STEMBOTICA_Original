import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAuth } from "@/hooks/use-auth";
import { ArrowRight, Loader2, Mail } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface AuthProps {
  redirectAfterAuth?: string;
}

function Auth({ redirectAfterAuth }: AuthProps = {}) {
  const { isLoading: authLoading, isAuthenticated, signIn } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<"signIn" | { email: string }>("signIn");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      const redirect = redirectAfterAuth || "/";
      navigate(redirect);
    }
  }, [authLoading, isAuthenticated, navigate, redirectAfterAuth]);

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      await signIn("email-otp", formData);
      setStep({ email: formData.get("email") as string });
      setIsLoading(false);
    } catch (error) {
      console.error("Email sign-in error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to send verification code. Please try again."
      );
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      await signIn("email-otp", formData);
      const redirect = redirectAfterAuth || "/";
      navigate(redirect);
    } catch (error) {
      console.error("OTP verification error:", error);
      setError("The verification code you entered is incorrect.");
      setIsLoading(false);
      setOtp("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#3b82f6_0%,_transparent_40%),_radial-gradient(circle_at_bottom_right,_#9333ea_0%,_transparent_40%)] animate-[pulse_6s_ease-in-out_infinite] opacity-50"></div>

      <div className="relative z-10 w-full max-w-md p-4">
        <Card className="backdrop-blur-xl bg-white/80 shadow-2xl rounded-3xl border-none hover:scale-[1.02] transition-transform duration-300">
          {step === "signIn" ? (
            <>
              <CardHeader className="text-center pt-8">
                <div className="flex justify-center">
                  <img
                    src="./logo.png"
                    alt="STEMBotica Logo"
                    width={90}
                    height={90}
                    className="rounded-xl mb-4 cursor-pointer shadow-lg ring-2 ring-white/60 hover:scale-105 transition-transform duration-300"
                    onClick={() => navigate("/")}
                  />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Welcome to STEMBotica
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-muted-foreground">
                  Enter your email to sign in or create an account. We’ll send a one-time code.
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleEmailSubmit}>
                <CardContent className="pt-4">
                  <div className="relative flex items-center gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="email"
                        placeholder="name@example.com"
                        type="email"
                        className="pl-9 h-11 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 transition-all"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md transition-all"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {error && (
                    <p className="mt-3 text-sm text-red-600 text-center">{error}</p>
                  )}
                </CardContent>
              </form>
            </>
          ) : (
            <>
              <CardHeader className="text-center mt-4">
                <CardTitle className="text-xl font-semibold text-blue-700">
                  Verify Your Email
                </CardTitle>
                <CardDescription>
                  We've sent a 6-digit code to <span className="font-medium">{step.email}</span>
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleOtpSubmit}>
                <CardContent className="pb-4">
                  <input type="hidden" name="email" value={step.email} />
                  <input type="hidden" name="code" value={otp} />

                  <div className="flex justify-center mt-3">
                    <InputOTP
                      value={otp}
                      onChange={setOtp}
                      maxLength={6}
                      disabled={isLoading}
                    >
                      <InputOTPGroup>
                        {Array.from({ length: 6 }).map((_, index) => (
                          <InputOTPSlot key={index} index={index} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  {error && (
                    <p className="mt-3 text-sm text-red-500 text-center">{error}</p>
                  )}

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Didn’t get a code?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600"
                      onClick={() => setStep("signIn")}
                    >
                      Try again
                    </Button>
                  </p>
                </CardContent>

                <CardFooter className="flex-col gap-2 pb-6">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl py-2 shadow-md transition-all"
                    disabled={isLoading || otp.length !== 6}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        Verify Code
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep("signIn")}
                    disabled={isLoading}
                    className="w-full text-gray-600 hover:text-blue-600"
                  >
                    Use a different email
                  </Button>
                </CardFooter>
              </form>
            </>
          )}
        </Card>

        <div className="text-xs text-center mt-4 text-gray-500">
          Secured by{" "}
          <a
            href="https://stembotica.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium text-blue-600 hover:text-purple-600"
          >
            STEMBotica.co.in
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage(props: AuthProps) {
  return (
    <Suspense>
      <Auth {...props} />
    </Suspense>
  );
}
