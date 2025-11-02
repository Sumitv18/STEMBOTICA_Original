import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Principal, Delhi Public School",
      feedback: "STEMBotica's workshop was a huge success! Students were thrilled to build their first robot and learn coding in such an engaging way."
    },
    {
      name: "Science Teacher, St. Mary's Academy",
      feedback: "Their kits and curriculum are perfectly designed for school integration — practical, affordable, and aligned with NEP 2020."
    },
    {
      name: "Student, Class 9",
      feedback: "I built my own IoT car! It was the most exciting workshop I've ever attended."
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-[#00b894]/10 via-transparent to-[#0077ff]/10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Educators & Students Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-2 border-[#00b894]/30">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-5 h-5 fill-[#ffcc00] text-[#ffcc00]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.feedback}"</p>
                  <p className="font-semibold text-[#0077ff]">— {testimonial.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
