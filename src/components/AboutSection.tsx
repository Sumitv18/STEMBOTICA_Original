import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Cpu, Brain, Users, Lightbulb, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0077ff]/5 via-transparent to-[#00b894]/5" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#00b894] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-[#ffcc00] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About STEMBotica</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            STEMBotica is a STEM education and robotics company founded by engineers and educators. We aim to make learning practical and fun by teaching Robotics, AI, Coding, and IoT through real-world projects. Our programs align with NEP 2020 and Atal Tinkering Lab initiatives to foster innovation, problem-solving, and creativity among young learners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Award, title: "Aligned with NEP 2020 and ATL Labs", color: "#0077ff" },
            { icon: Cpu, title: "Hands-on STEM & Robotics Kits", color: "#00b894" },
            { icon: Brain, title: "AI, Coding, and IoT-based Curriculum", color: "#ffcc00" },
            { icon: Users, title: "Workshops for Students and Teachers", color: "#0077ff" },
            { icon: Lightbulb, title: "Custom STEM Lab Setup Support", color: "#00b894" },
            { icon: Sparkles, title: "Innovation-Focused Learning", color: "#ffcc00" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-[#0077ff]/50">
                <CardContent className="pt-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
