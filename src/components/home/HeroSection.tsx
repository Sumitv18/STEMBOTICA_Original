import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Lightbulb, Award, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with floating letters */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077ff]/5 via-background to-[#00b894]/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#ffcc00]/3 to-transparent" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#0077ff] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#00b894] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#0077ff]/10 to-[#00b894]/10 rounded-full border border-[#0077ff]/30"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
                From Roots to Rockets 🚀
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight"
            >
              <motion.span
                className="block bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#0077ff] bg-clip-text text-transparent whitespace-nowrap"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Planting the Seeds
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#ffcc00] via-[#ff6b6b] to-[#a855f7] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                style={{ backgroundSize: "200% 200%" }}
              >
                of Innovation
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2"
            >
              STEMbotica Academy brings hands-on STEM learning to schools across India. We make robotics, coding, AI, IoT, and 3D printing accessible to every student.
            </motion.p>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 py-4"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-orange-600">100+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Schools</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600">5000+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Students</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" />
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-amber-600">4</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Levels</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2 px-2"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-teal-500 to-orange-500 text-white shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-orange-600 transition-all duration-300 font-semibold px-6 sm:px-8 group w-full sm:w-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Free Workshop
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#0077ff] hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#00b894] hover:text-white hover:border-transparent font-semibold px-6 sm:px-8 group transition-all duration-300 shadow-lg hover:shadow-2xl w-full sm:w-auto"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/1hBe1To9PPmc60A5TOjb1Fyzctn7dWmXV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Download className="mr-2 w-5 h-5" />
                    </motion.div>
                    Download Brochure
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Robot Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex items-center justify-center lg:justify-end z-10"
          >
            <motion.img
              src="https://harmless-tapir-303.convex.cloud/api/storage/5c06eee6-fad1-46fa-8452-2dfd2ab85cb8"
              alt="STEMBotica - Children learning with robotics"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto object-contain rounded-2xl shadow-2xl lg:ml-auto"
              loading="eager"
              decoding="async"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}