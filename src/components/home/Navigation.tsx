import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router";
import { toast } from "sonner";

interface NavigationProps {
  isAuthenticated: boolean;
  user: any;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleSignOut: () => Promise<void>;
  getInitials: (name?: string) => string;
}

export function Navigation({
  isAuthenticated,
  user,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleSignOut,
  getInitials,
}: NavigationProps) {
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg"
    >
      <div className="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
        <motion.div 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.img 
            src="https://harmless-tapir-303.convex.cloud/api/storage/75ea5806-3221-4733-ab4f-ef6141abefa7" 
            alt="STEMBotica Logo" 
            className="h-9 sm:h-10 md:h-12 w-auto"
            loading="eager"
            decoding="async"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.span 
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#0077ff] bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            STEMBotica
          </motion.span>
        </motion.div>
        
        <div className="hidden md:flex items-center flex-1 justify-end gap-3 lg:gap-4">
          <nav className="flex items-center gap-4 lg:gap-6 xl:gap-8">
            <motion.a 
              href="#offerings" 
              className="text-sm lg:text-base text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium relative group whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -2 }}
            >
              Programs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a 
              href="#workshops" 
              className="text-sm lg:text-base text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium relative group whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -2 }}
            >
              Workshops
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-sm lg:text-base text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium relative group whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -2 }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
            </motion.a>
          </nav>
          
          <motion.div 
            className="flex items-center gap-2 lg:gap-3 ml-2 lg:ml-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-[#0077ff] to-[#00b894] hover:from-[#0088ff] hover:to-[#00c9a5] hover:shadow-xl transition-all duration-300 font-semibold whitespace-nowrap text-xs lg:text-sm px-3 lg:px-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Workshop
              </Button>
            </motion.div>
          
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    className="flex items-center gap-2 focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Avatar className="w-8 h-8 lg:w-9 lg:h-9 border-2 border-[#0077ff]/30">
                      <AvatarImage src={user.image} alt={user.name || "User"} />
                      <AvatarFallback className="bg-gradient-to-br from-[#0077ff] to-[#00b894] text-white text-xs lg:text-sm font-semibold">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.name || "User"}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => navigate("/auth")}
                  className="whitespace-nowrap hover:bg-gradient-to-r hover:from-[#0077ff]/10 hover:to-[#00b894]/10 transition-all duration-300 text-xs lg:text-sm px-3 lg:px-4"
                >
                  Sign In
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl shadow-lg"
        >
          <div className="w-full px-3 sm:px-4 py-4 sm:py-6 flex flex-col gap-2 sm:gap-3">
            <motion.a 
              href="#offerings" 
              className="text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-muted/50"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              Programs
            </motion.a>
            <motion.a 
              href="#workshops" 
              className="text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-muted/50"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              Workshops
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-muted/50"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.a>
            
            {isAuthenticated && user ? (
              <>
                <motion.button
                  className="text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-muted/50 text-left"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/profile");
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Profile
                </motion.button>
                <motion.button
                  className="text-red-600 hover:text-red-700 transition-all duration-300 font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-muted/50 text-left"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleSignOut();
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Out
                </motion.button>
              </>
            ) : (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/auth");
                  }}
                >
                  Sign In
                </Button>
              </motion.div>
            )}
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-gradient-to-r from-[#0077ff] to-[#00b894] hover:shadow-xl transition-all duration-300 font-semibold w-full mt-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Workshop
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}