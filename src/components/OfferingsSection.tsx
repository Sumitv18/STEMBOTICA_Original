import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BookOpen, Microscope, Users, Package, Trophy } from "lucide-react";

export function OfferingsSection() {
  const offerings = [
    {
      name: "STEM Workshops",
      description: "1-day and multi-day school workshops with hands-on robotics, coding, and innovation activities.",
      icon: Bot,
      color: "#0077ff"
    },
    {
      name: "STEM Curriculum Kits",
      description: "A structured 4-level STEM learning pathway from Basic Electronics to Advanced Robotics and IoT.",
      icon: BookOpen,
      color: "#00b894"
    },
    {
      name: "ATL & Robotics Lab Setup",
      description: "Complete setup solutions for Atal Tinkering Labs, including tools, kits, and training support.",
      icon: Microscope,
      color: "#ffcc00"
    },
    {
      name: "Teacher Training",
      description: "Workshops to equip educators with the skills to guide students in innovation-based learning.",
      icon: Users,
      color: "#0077ff"
    },
    {
      name: "DIY STEM Kits",
      description: "Take-home kits with tutorials for students to build and innovate independently.",
      icon: Package,
      color: "#00b894"
    },
    {
      name: "STEM Competitions",
      description: "Robotics challenges, innovation fairs, and inter-school hackathons to inspire creativity.",
      icon: Trophy,
      color: "#ffcc00"
    }
  ];

  return (
    <section id="offerings" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-[#00b894]/10 via-transparent to-[#ffcc00]/10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Offerings</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive STEM education solutions for schools, students, and educators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-2" style={{ borderColor: `${offering.color}40` }}>
                <CardHeader>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `linear-gradient(135deg, ${offering.color}, ${offering.color}dd)` }}
                  >
                    <offering.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{offering.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{offering.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
