import { motion } from "framer-motion";
import { GraduationCap, Wrench, Smartphone, Cog, Microscope, Users, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router";

export function OfferingsFlowSection() {
  const navigate = useNavigate();
  
  const allOfferings = [
    {
      title: "STEM Workshops",
      description: "Hands-on workshops covering robotics, AI, drones, and coding.",
      icon: Cog,
      color: "#ffcc00"
    },
    {
      title: "DIY STEM Kits",
      description: "Kits for hands-on STEM learning at home.",
      icon: Wrench,
      color: "#ff6b6b"
    },
    {
      title: "Online Courses/App",
      description: "Online courses and a mobile app for STEM education.",
      icon: Smartphone,
      color: "#a855f7"
    },
    {
      title: "Year-long Curriculum",
      description: "Curriculum aligned with the National Education Policy (NEP).",
      icon: GraduationCap,
      color: "#ff9f43"
    },
    {
      title: "Tinkering Lab Services",
      description: "Setup services for schools to create tinkering labs.",
      icon: Microscope,
      color: "#e84393"
    },
    {
      title: "Teacher Training",
      description: "Programs to train teachers in STEM education.",
      icon: Users,
      color: "#0077ff"
    }
  ];

  const leftOfferings = [
    {
      title: "STEM Workshops",
      description: "Hands-on workshops covering robotics, AI, drones, and coding.",
      icon: Cog,
      color: "#ffcc00"
    },
    {
      title: "DIY STEM Kits",
      description: "Kits for hands-on STEM learning at home.",
      icon: Wrench,
      color: "#ff6b6b"
    },
    {
      title: "Online Courses/App",
      description: "Online courses and a mobile app for STEM education.",
      icon: Smartphone,
      color: "#a855f7"
    }
  ];

  const rightOfferings = [
    {
      title: "Year-long Curriculum",
      description: "Curriculum aligned with the National Education Policy (NEP).",
      icon: GraduationCap,
      color: "#ff9f43"
    },
    {
      title: "Tinkering Lab Services",
      description: "Setup services for schools to create tinkering labs.",
      icon: Microscope,
      color: "#e84393"
    },
    {
      title: "Teacher Training",
      description: "Programs to train teachers in STEM education.",
      icon: Users,
      color: "#0077ff"
    }
  ];

  const handleLearnMoreClick = (offeringTitle: string) => {
    if (offeringTitle === "STEM Workshops") {
      navigate('/workshops');
    } else if (offeringTitle === "Online Courses/App") {
      navigate('/online-courses');
    } else if (offeringTitle === "DIY STEM Kits") {
      navigate('/diy-stem-kits');
    } else if (offeringTitle === "Year-long Curriculum") {
      navigate('/year-long-curriculum');
    } else if (offeringTitle === "Teacher Training") {
      navigate('/teacher-training');
    } else if (offeringTitle === "Tinkering Lab Services") {
      navigate('/atl-lab-setup');
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offerings" className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#0077ff]/30 to-[#00b894]/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#ffcc00]/30 to-[#ff6b6b]/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#ffcc00] bg-clip-text text-transparent">
            Our Offerings
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive STEM education solutions connecting students to the future
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Mobile Carousel */}
          <div className="block lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full px-4"
            >
              <CarouselContent>
                {allOfferings.map((offering, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="p-2 sm:p-4"
                    >
                      <motion.div 
                        className="flex flex-col items-center gap-4 p-4 sm:p-6 rounded-xl transition-all duration-300 min-h-[320px] shadow-lg border-2 w-full"
                        style={{
                          background: `linear-gradient(135deg, ${offering.color}10 0%, ${offering.color}25 100%)`,
                          borderColor: `${offering.color}40`
                        }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                          }}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden"
                          style={{ 
                            background: `linear-gradient(135deg, ${offering.color}, ${offering.color}dd)`
                          }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-white/20"
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <offering.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                        </motion.div>
                        <div className="text-center w-full">
                          <h3 
                            className="text-lg sm:text-xl font-bold mb-2" 
                            style={{ color: offering.color }}
                          >
                            {offering.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 px-2">
                            {offering.description}
                          </p>
                          <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            className="w-full"
                          >
                            <Button
                              size="sm"
                              className="w-full max-w-xs group relative overflow-hidden font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0"
                              onClick={() => handleLearnMoreClick(offering.title)}
                              style={{ 
                                background: `linear-gradient(135deg, ${offering.color}, ${offering.color}dd)`,
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              />
                              <span className="relative z-10 flex items-center justify-center gap-2">
                                Explore Now
                                <motion.div
                                  animate={{ x: [0, 3, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </motion.div>
                              </span>
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 sm:left-2" />
              <CarouselNext className="right-0 sm:right-2" />
            </Carousel>
          </div>

          {/* Desktop Flowchart Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-center">
            {/* Left Side Offerings */}
            <div className="space-y-6">
              {leftOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
          transition={{ 
            delay: index * 0.08,
            duration: 0.4,
            type: "spring",
            stiffness: 120
          }}
                  className="relative group"
                >
                  <motion.div 
                    className="flex items-center gap-3 justify-end p-4 rounded-xl transition-all duration-300 shadow-lg border-2"
                    whileHover={{ x: -8, scale: 1.05, y: -5 }}
                    animate={{
                      boxShadow: [
                        `0 4px 20px ${offering.color}20`,
                        `0 8px 30px ${offering.color}40`,
                        `0 4px 20px ${offering.color}20`
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      hover: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{
                      background: `linear-gradient(135deg, ${offering.color}10 0%, ${offering.color}25 100%)`,
                      borderColor: `${offering.color}40`
                    }}
                  >
                    <div className="text-right flex-1 space-y-2">
                      <motion.h3 
                        className="text-lg md:text-xl font-bold mb-1.5" 
                        style={{ color: offering.color }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        {offering.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm md:text-base text-muted-foreground mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                      >
                        {offering.description}
                      </motion.p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          className="group relative overflow-hidden font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0"
                          onClick={() => handleLearnMoreClick(offering.title)}
                          style={{ 
                            background: `linear-gradient(135deg, ${offering.color}, ${offering.color}dd)`,
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Explore Now
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <ChevronRight className="w-4 h-4" />
                            </motion.div>
                          </span>
                        </Button>
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                      }}
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl relative overflow-hidden"
                      style={{ 
                        background: `linear-gradient(135deg, ${offering.color}, ${offering.color}dd)`
                      }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/20 group-hover:bg-white/30"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      />
                      <offering.icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                  </motion.div>
                  {/* Enhanced Connection Line */}
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-10 w-10 h-1 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${offering.color}80, transparent)`,
                      transformOrigin: "left"
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Enhanced Center Hub */}
            <div className="flex justify-center items-center py-6 lg:py-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                {/* Outer glow ring */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -inset-6 bg-gradient-to-br from-[#0077ff]/30 via-[#00b894]/30 to-[#ffcc00]/30 rounded-full blur-3xl"
                />
                
                {/* Main hub with image */}
                <motion.div 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #0077ff 0%, #00b894 50%, #0077ff 100%)",
                    backgroundSize: "200% 200%"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  {/* Inner circle with image */}
                  <div className="w-56 h-56 md:w-72 md:h-72 bg-background rounded-full flex items-center justify-center shadow-inner p-2">
                    <motion.img
                      src="https://harmless-tapir-303.convex.cloud/api/storage/c5baf26b-2631-488b-91b2-803f5f504a93"
                      alt="STEMBotica - From Roots to Rockets"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side Offerings */}
            <div className="space-y-8">
              {rightOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: index * 0.08,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 120
                  }}
                  className="relative group"
                >
                  <motion.div 
                    className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 shadow-lg border-2"
                    whileHover={{ x: 8, scale: 1.05, y: -5 }}
                    animate={{
                      boxShadow: [
                        `0 4px 20px ${offering.color}20`,
                        `0 8px 30px ${offering.color}40`,
                        `0 4px 20px ${offering.color}20`
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      hover: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{
                      background: `linear-gradient(135deg, ${offering.color}10 0%, ${offering.color}25 100%)`,
                      borderColor: `${offering.color}40`
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                      }}
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl relative overflow-hidden"
                      style={{ 
                        background: `linear-gradient(135deg, ${offering.color}, ${offering.color}dd)`
                      }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/20 group-hover:bg-white/30"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      />
                      <offering.icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                    <div className="text-left flex-1 space-y-2">
                      <motion.h3 
                        className="text-lg font-bold mb-1.5" 
                        style={{ color: offering.color }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        {offering.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm md:text-base text-muted-foreground mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                      >
                        {offering.description}
                      </motion.p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          className="group relative overflow-hidden font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0"
                          onClick={() => handleLearnMoreClick(offering.title)}
                          style={{ 
                            background: `linear-gradient(135deg, ${offering.color}, ${offering.color}dd)`,
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Explore Now
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <ChevronRight className="w-4 h-4" />
                            </motion.div>
                          </span>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                  {/* Enhanced Connection Line */}
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -left-10 w-10 h-1 rounded-full"
                    style={{
                      background: `linear-gradient(to left, ${offering.color}80, transparent)`,
                      transformOrigin: "right"
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}