import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Users, Award, Zap, ChevronRight } from "lucide-react";

export function OneDayWorkshopSection() {
  const features = [
    {
      icon: Bot,
      title: "Hands-on Robotics Experience",
      color: "#0077ff"
    },
    {
      icon: Users,
      title: "Team-based STEM Challenges",
      color: "#0077ff"
    },
    {
      icon: Award,
      title: "Certificates for All Participants",
      color: "#0077ff"
    },
    {
      icon: Zap,
      title: "STEMBotica Innovation Kit Demo",
      color: "#0077ff"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0077ff]/5 to-transparent" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#0077ff] bg-clip-text text-transparent px-2">
            1-Day STEM Workshop
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Our flagship hands-on workshop introduces students to robotics, sensors, and innovation. By the end of the day, each student builds their own working robot model.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-2 border-[#0077ff]/30 max-w-5xl mx-auto bg-gradient-to-br from-background to-[#0077ff]/5 shadow-xl">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}
                    >
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                      {feature.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#0077ff] to-[#00b894] text-white shadow-xl hover:shadow-2xl hover:from-[#0088ff] hover:to-[#00c9a5] transition-all duration-300 font-semibold px-6 sm:px-8 group w-full sm:w-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Invite STEMBotica to Your School
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}