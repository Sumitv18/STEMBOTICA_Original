import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Cpu, Lightbulb, Users, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router";

export function WorkshopsSection() {
  const workshops = [
    {
      icon: Rocket,
      title: "Robotics & Automation",
      description: "Build and program robots, learn about sensors, motors, and automation.",
      color: "#0077ff",
      gradient: "from-[#0077ff] to-[#0055cc]"
    },
    {
      icon: Cpu,
      title: "Coding & AI",
      description: "Learn programming fundamentals, AI concepts, and machine learning basics.",
      color: "#00b894",
      gradient: "from-[#00b894] to-[#008f6f]"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Design Thinking",
      description: "Develop creative problem-solving skills and bring ideas to life.",
      color: "#ffcc00",
      gradient: "from-[#ffcc00] to-[#ffaa00]"
    },
    {
      icon: Users,
      title: "Team Projects",
      description: "Collaborate on real-world challenges and build teamwork skills.",
      color: "#ff6b6b",
      gradient: "from-[#ff6b6b] to-[#ee5a52]"
    }
  ];

  return (
    <section id="workshops" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077ff]/5 via-[#00b894]/5 to-[#ffcc00]/5" />
      
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0077ff]/10 to-[#00b894]/10 rounded-full border border-[#0077ff]/30 mb-4"
          >
            <Clock className="w-5 h-5 text-[#0077ff]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
              1-Day Hands-On Workshops Available
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#ffcc00] bg-clip-text text-transparent">
            Our STEM Workshops
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on learning experiences designed to inspire creativity and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="border-2 h-full hover:shadow-xl transition-shadow" style={{ borderColor: `${workshop.color}40` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${workshop.gradient} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                    <workshop.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center" style={{ color: workshop.color }}>
                    {workshop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {workshop.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/workshops">
            <Button size="lg" className="bg-gradient-to-r from-[#0077ff] to-[#00b894] text-white shadow-lg hover:shadow-xl">
              Explore All Workshops
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}