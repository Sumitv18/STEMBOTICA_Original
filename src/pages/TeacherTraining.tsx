import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight, GraduationCap, Users, Lightbulb, Award, BookOpen, Target, Zap, Heart, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function TeacherTraining() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  const [enrollmentForm, setEnrollmentForm] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
    numberOfTeachers: "",
    trainingLevels: [] as string[],
    message: ""
  });

  const submitContactForm = useMutation(api.contacts.submitContactForm);

  const handleEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const trainingLevelsText = enrollmentForm.trainingLevels.length > 0 
        ? enrollmentForm.trainingLevels.join(", ") 
        : "Not specified";
      
      const messageContent = `
Number of Teachers: ${enrollmentForm.numberOfTeachers || "Not specified"}
Training Levels Interested: ${trainingLevelsText}

Additional Details:
${enrollmentForm.message || "No additional details provided"}
      `.trim();

      await submitContactForm({
        name: enrollmentForm.contactPerson,
        schoolName: enrollmentForm.schoolName,
        email: enrollmentForm.email,
        phone: enrollmentForm.phone,
        service: "Teacher Training Enrollment",
        message: messageContent,
      });

      toast.success("Your enrollment inquiry has been submitted! We'll contact you within 24 hours.");
      setEnrollmentForm({
        schoolName: "",
        contactPerson: "",
        email: "",
        phone: "",
        numberOfTeachers: "",
        trainingLevels: [],
        message: ""
      });
    } catch (error) {
      toast.error("Failed to submit enrollment. Please try again.");
      console.error("Error submitting enrollment:", error);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const programHighlights = [
    { icon: GraduationCap, title: "Certified Training", text: "Get an official STEMBotica Certified Teacher badge for completion.", color: "#007bff" },
    { icon: Users, title: "Hands-On Learning", text: "Learn by building robots, coding sensors, and exploring AI modules.", color: "#ff7f50" },
    { icon: Lightbulb, title: "Design Thinking Approach", text: "Train educators to promote creativity, problem-solving, and innovation.", color: "#8a2be2" },
    { icon: Award, title: "NEP 2020 & ATL Aligned", text: "Our curriculum supports national education goals for experiential learning.", color: "#00bfff" }
  ];

  const trainingLevels = [
    {
      name: "Level 1: Foundation Workshop",
      icon: "🔧",
      color: "#00bfff",
      summary: "Introduction to STEM, ATL, and classroom integration using simple electronics & block coding.",
      duration: "1 Day (Hands-On Bootcamp)",
      outcomes: ["Basic Robotics Setup", "Understanding Sensors", "Block-Based Coding Projects"]
    },
    {
      name: "Level 2: Advanced Robotics & Coding",
      icon: "🤖",
      color: "#ff7f50",
      summary: "Covers Arduino programming, IoT projects, and classroom STEM management.",
      duration: "2 Days (Workshop + Practice)",
      outcomes: ["IoT Projects", "Arduino Coding", "Smart Classroom Tools"]
    },
    {
      name: "Level 3: Innovation & Design Thinking",
      icon: "💡",
      color: "#8a2be2",
      summary: "Focuses on integrating innovation-based pedagogy, ATL projects, and mentorship.",
      duration: "2 Days (Practical + Mentorship)",
      outcomes: ["Design Thinking", "ATL Project Mentoring", "STEM Club Setup"]
    }
  ];

  const uniqueFeatures = [
    { icon: BookOpen, title: "Interactive Learning", text: "No boring lectures – everything is hands-on with real kits.", color: "#007bff" },
    { icon: Target, title: "Comprehensive Modules", text: "From theory to project execution – every step is guided.", color: "#ff7f50" },
    { icon: Zap, title: "Continuous Support", text: "Get lifetime access to our educator network and resources.", color: "#8a2be2" },
    { icon: Users, title: "School Integration", text: "We help implement STEM clubs and ATL innovation labs effectively.", color: "#00bfff" }
  ];

  const testimonials = [
    { quote: "STEMBotica's training made us confident to lead robotics classes independently!", author: "STEM Mentor, Delhi", rating: 5 },
    { quote: "The hands-on sessions were amazing — I learned how to integrate innovation into teaching.", author: "Teacher, Ghaziabad", rating: 5 },
    { quote: "This program transformed our school's approach to learning by doing.", author: "Principal, Noida", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src="https://harmless-tapir-303.convex.cloud/api/storage/75ea5806-3221-4733-ab4f-ef6141abefa7"
              alt="STEMBotica Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#007bff] via-[#ff7f50] to-[#8a2be2] bg-clip-text text-transparent">
              STEMBotica
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-[#007bff] transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#007bff] to-[#ff7f50] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link to="/workshops" className="text-foreground/80 hover:text-[#007bff] transition-all duration-300 font-medium relative group">
              Workshops
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#007bff] to-[#ff7f50] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link to="/teacher-training" className="text-[#007bff] font-semibold relative group">
              Teacher Training
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#007bff] to-[#ff7f50]" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero_section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007bff]/5 via-background to-[#ff7f50]/5 z-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#8a2be2]/3 to-transparent z-0" />
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-[1]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-20 left-10 w-96 h-96 bg-[#007bff] rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff7f50] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#8a2be2] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-[1]">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#007bff] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#007bff] via-[#ff7f50] to-[#8a2be2] bg-clip-text text-transparent"
          >
            Empowering Teachers to Shape Tomorrow's Innovators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto"
          >
            Upskill your educators with hands-on STEM training programs aligned with NEP 2020 and ATL Lab goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#007bff] to-[#ff7f50] text-white shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('training_levels')}
            >
              Explore Programs
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#007bff] hover:bg-[#007bff]/10"
              onClick={() => scrollToSection('enrollment_form')}
            >
              Enroll Your School
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro_section" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#007bff]/5 via-[#ff7f50]/5 to-[#8a2be2]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#007bff] to-[#ff7f50] bg-clip-text text-transparent">
                Why Train Teachers in STEM?
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Teachers are the bridge between curiosity and creation. Our Teacher Training Program equips educators with the knowledge, tools, and confidence to lead hands-on STEM learning in classrooms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From understanding robotics kits to integrating coding and design thinking — we help schools bring innovation to life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=800&q=80"
                alt="Teacher Training - Educators learning robotics and STEM"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl border-2 border-[#007bff]/30"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section id="program_highlights" className="py-20 bg-gradient-to-b from-transparent to-[#007bff]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#007bff] to-[#ff7f50] bg-clip-text text-transparent">
              Program Highlights
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-2 h-full" style={{ borderColor: `${highlight.color}40` }}>
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                      style={{ background: `linear-gradient(135deg, ${highlight.color}, ${highlight.color}dd)` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <highlight.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-center" style={{ color: highlight.color }}>
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-center">
                      {highlight.text}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section id="training_features" className="py-20 bg-gradient-to-b from-[#007bff]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#007bff] to-[#ff7f50] bg-clip-text text-transparent">
              What Makes Our Training Unique?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-2 h-full" style={{ borderColor: `${feature.color}40` }}>
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                      style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-center" style={{ color: feature.color }}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-center">
                      {feature.text}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules Overview */}
      <section id="training_levels" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007bff]/5 to-[#ff7f50]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#007bff] to-[#ff7f50] bg-clip-text text-transparent">
              Training Modules Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Progressive training levels designed for comprehensive STEM education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trainingLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card 
                  className="border-2 h-full hover:shadow-2xl transition-all duration-300"
                  style={{ borderColor: `${level.color}40` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl"
                      >
                        {level.icon}
                      </motion.div>
                    </div>
                    <CardTitle className="text-2xl text-center" style={{ color: level.color }}>
                      {level.name}
                    </CardTitle>
                    <CardDescription className="text-center text-base font-semibold">
                      {level.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">{level.summary}</p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5" style={{ color: level.color }} />
                        Learning Outcomes
                      </h4>
                      <ul className="space-y-1">
                        {level.outcomes.map((outcome, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: level.color }} />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery_section" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007bff]/5 to-[#ff7f50]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#007bff] to-[#ff7f50] bg-clip-text text-transparent">
              Training in Action
            </h2>
          </motion.div>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {[
                { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80", label: "Teachers Building Robot" },
                { image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", label: "Training Session at School" },
                { image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80", label: "Group Photo with STEM Kits" },
                { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80", label: "Coding Workshop for Teachers" }
              ].map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-2"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#007bff]/30 shadow-lg relative group">
                      <img 
                        src={item.image}
                        alt={item.label}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white font-semibold text-lg p-4">{item.label}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonial_section" className="py-20 bg-gradient-to-b from-transparent to-[#007bff]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#007bff] to-[#8a2be2] bg-clip-text text-transparent">
              What Educators Say
            </h2>
          </motion.div>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-2"
                  >
                    <Card className="border-2 border-[#007bff]/30 h-full">
                      <CardContent className="pt-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-[#ffcc00] text-xl">★</span>
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                        <p className="font-semibold text-[#007bff]">— {testimonial.author}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Enrollment CTA Banner */}
      <section id="enroll_cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007bff]/20 via-[#ff7f50]/20 to-[#8a2be2]/20" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-[#007bff] rounded-full"
            animate={{ y: [0, -20, 0], rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 bg-[#ff7f50] rounded-full"
            animate={{ y: [0, 20, 0], rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#007bff] via-[#ff7f50] to-[#8a2be2] bg-clip-text text-transparent"
          >
            Ready to Empower Your Teachers?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Let's collaborate to build future-ready classrooms with STEMBotica's Teacher Training Program.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#007bff] to-[#ff7f50] text-white shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('enrollment_form')}
            >
              Contact Us to Start
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enrollment_form" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007bff]/10 to-[#ff7f50]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-[#007bff]/40 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl bg-gradient-to-r from-[#007bff] to-[#ff7f50] bg-clip-text text-transparent mb-2">
                  Enroll Your School
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                  <Input
                    placeholder="School Name *"
                    value={enrollmentForm.schoolName}
                    onChange={(e) => setEnrollmentForm({ ...enrollmentForm, schoolName: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Contact Person & Role *"
                    value={enrollmentForm.contactPerson}
                    onChange={(e) => setEnrollmentForm({ ...enrollmentForm, contactPerson: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={enrollmentForm.email}
                    onChange={(e) => setEnrollmentForm({ ...enrollmentForm, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={enrollmentForm.phone}
                    onChange={(e) => setEnrollmentForm({ ...enrollmentForm, phone: e.target.value })}
                    required
                  />
                  <Input
                    type="number"
                    placeholder="Number of Teachers to Train *"
                    value={enrollmentForm.numberOfTeachers}
                    onChange={(e) => setEnrollmentForm({ ...enrollmentForm, numberOfTeachers: e.target.value })}
                    required
                  />
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Training Levels Interested (Select multiple)</label>
                    <div className="space-y-2">
                      {["Level 1: Foundation", "Level 2: Advanced", "Level 3: Innovation"].map((level) => (
                        <label key={level} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={enrollmentForm.trainingLevels.includes(level)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setEnrollmentForm({
                                  ...enrollmentForm,
                                  trainingLevels: [...enrollmentForm.trainingLevels, level]
                                });
                              } else {
                                setEnrollmentForm({
                                  ...enrollmentForm,
                                  trainingLevels: enrollmentForm.trainingLevels.filter(l => l !== level)
                                });
                              }
                            }}
                            className="w-4 h-4 rounded border-input"
                          />
                          {level}
                        </label>
                      ))}
                    </div>
                  </div>
                  <Textarea
                    placeholder="Additional Details or Questions"
                    value={enrollmentForm.message}
                    onChange={(e) => setEnrollmentForm({ ...enrollmentForm, message: e.target.value })}
                    rows={4}
                  />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#007bff] to-[#ff7f50] text-white shadow-lg hover:shadow-xl transition-all font-semibold text-lg py-6"
                    >
                      Submit Enrollment Inquiry
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50 bg-gradient-to-br from-[#007bff]/5 via-background to-[#ff7f50]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#007bff] to-[#ff7f50] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#007bff] to-[#ff7f50] bg-clip-text text-transparent"
            >
              STEMBotica — From Roots to Rockets 🚀
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-[#007bff] mb-2">Contact</h4>
              <p className="text-muted-foreground text-sm">Email: stembotica@gmail.com</p>
              <p className="text-muted-foreground text-sm">Phone: 9520559669</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-[#007bff] mb-2">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-muted-foreground hover:text-[#007bff] transition-colors text-sm">Home</Link>
                <Link to="/workshops" className="text-muted-foreground hover:text-[#007bff] transition-colors text-sm">Workshops</Link>
                <Link to="/teacher-training" className="text-muted-foreground hover:text-[#007bff] transition-colors text-sm">Teacher Training</Link>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-[#007bff] mb-2">Connect</h4>
              <a
                href="https://www.linkedin.com/company/stemroots-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#007bff] transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm">
              © 2025 <span className="font-semibold bg-gradient-to-r from-[#007bff] to-[#ff7f50] bg-clip-text text-transparent">STEMBotica</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}