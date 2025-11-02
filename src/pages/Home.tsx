import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";
import { HeroSection } from "@/components/home/HeroSection";
import { OneDayWorkshopSection } from "@/components/home/OneDayWorkshopSection";
import { OfferingsFlowSection } from "@/components/home/OfferingsFlowSection";
import { WorkshopsSection } from "@/components/home/WorkshopsSection";
import { CurriculumSection } from "@/components/home/CurriculumSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/home/Footer";
import { Navigation } from "@/components/home/Navigation";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function Home() {
  const { isAuthenticated, user, signOut } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getInitials = useMemo(() => {
    return (name?: string) => {
      if (!name) return "U";
      return name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
    } catch (error) {
      toast.error("Failed to sign out");
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        isAuthenticated={isAuthenticated}
        user={user}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleSignOut={handleSignOut}
        getInitials={getInitials}
      />

      <HeroSection />

      <OfferingsFlowSection />

      <OneDayWorkshopSection />

      <WorkshopsSection />

      <CurriculumSection />

      <ContactSection />

      <Footer />

      <WhatsAppWidget />
    </div>
  );
}