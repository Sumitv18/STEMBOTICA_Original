import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight, Clock, GraduationCap, Award, Lightbulb, Globe, Brain, Users } from "lucide-react";
import { Link } from "react-router";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function OnlineCourses() {
  const submitContactForm = useMutation(api.contacts.submitContactForm);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  const [waitlistForm, setWaitlistForm] = useState({
    fullName: "",
    email: "",
    grade: "",
    courseInterests: [] as string[]
  });

  const courses = [
    {
      icon: "🤖",
      title: "Beginner Robotics",
      description: "Build a line-following robot with sensors and Arduino — your first robotics step.",
      color: "#0077ff",
      scrollTo: "beginner_robotics"
    },
    {
      icon: "💻",
      title: "Coding & IoT",
      description: "Code intelligent systems, connect devices to cloud, build smart automation projects.",
      color: "#00b894",
      scrollTo: "coding_iot"
    },
    {
      icon: "🧠",
      title: "AI for Kids",
      description: "Dive into fundamentals of AI: build models for image, voice, chatbot projects.",
      color: "#a855f7",
      scrollTo: "ai_for_kids"
    },
    {
      icon: "✈️",
      title: "3D Design & Drones",
      description: "Design in CAD, 3D print prototypes, explore drone mechanics and build basics.",
      color: "#ff6b6b",
      scrollTo: "3d_drones"
    }
  ];

  const syllabusData = [
    {
      id: "beginner_robotics",
      title: "Beginner Robotics (Level 1)",
      modules: [
        "Module 1: Electronics & Sensors Introduction",
        "Module 2: Basics of Robotics & Arduino",
        "Module 3: Line-Following Robot Project",
        "Module 4: Troubleshooting & Innovation Challenge"
      ],
      duration: "4 Weeks",
      mode: "Self-paced + Live Q&A",
      prerequisite: "None",
      outcome: "Assemble and code a basic robot."
    },
    {
      id: "coding_iot",
      title: "Coding & IoT (Level 2)",
      modules: [
        "Module 1: Advanced Sensors & Actuators",
        "Module 2: IoT Gateway & Cloud Basics",
        "Module 3: Home Automation Project",
        "Module 4: Mobile Control via App"
      ],
      duration: "5 Weeks",
      mode: "Live + Recorded",
      prerequisite: "Basic Arduino knowledge",
      outcome: "Develop an IoT device controlled remotely."
    },
    {
      id: "ai_for_kids",
      title: "AI for Kids (Level 3)",
      modules: [
        "Module 1: Introduction to Artificial Intelligence",
        "Module 2: Image and Speech Recognition",
        "Module 3: Build Your First AI Model",
        "Module 4: Create a Voice-Controlled Robot"
      ],
      duration: "5 Weeks",
      mode: "Interactive + Live Mentorship",
      prerequisite: "Basic coding understanding",
      outcome: "Build and deploy simple AI-powered projects."
    },
    {
      id: "3d_drones",
      title: "3D Design & Drones (Level 4)",
      modules: [
        "Module 1: CAD & 3D Modeling",
        "Module 2: 3D Printing and Prototyping",
        "Module 3: Drone Aerodynamics Basics",
        "Module 4: Build & Test Drone Frame"
      ],
      duration: "6 Weeks",
      mode: "Project-based + Mentorship",
      prerequisite: "Some STEM / robotics exposure",
      outcome: "Design and assemble basic drones and 3D prototypes."
    }
  ];

  const learningOutcomes = [
    { icon: "🧰", label: "Hands-on STEM Projects" },
    { icon: "💡", label: "Creative & Critical Thinking" },
    { icon: "🌐", label: "Aligned with NEP & ATL" },
    { icon: "🧠", label: "Real-world Problem Solving" },
    { icon: "🏅", label: "Certificates & Badges" },
    { icon: "🤝", label: "Expert Mentorship & Support" }
  ];

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitContactForm({
        name: waitlistForm.fullName,
        schoolName: "Not provided",
        email: waitlistForm.email,
        phone: "Not provided",
        service: "Online Courses Waitlist",
        message: `Waitlist Registration Details:
- Full Name: ${waitlistForm.fullName}
- Email: ${waitlistForm.email}
- Class/Grade: ${waitlistForm.grade}
- Course Interests: ${waitlistForm.courseInterests.length > 0 ? waitlistForm.courseInterests.join(", ") : "None selected"}`
      });
      
      toast.success("You've been added to the waitlist! We'll notify you when courses launch.");
      setWaitlistForm({ fullName: "", email: "", grade: "", courseInterests: [] });
    } catch (error) {
      toast.error("Failed to submit waitlist form. Please try again.");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#0077ff] bg-clip-text text-transparent">
              STEMBotica
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/" className="text-sm sm:text-base text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link to="/workshops" className="text-sm sm:text-base text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium relative group">
              Workshops
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link to="/online-courses" className="text-sm sm:text-base text-[#0077ff] font-semibold relative group">
              Courses
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894]" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0077ff]/5 via-background to-[#00b894]/5 z-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#ffcc00]/3 to-transparent z-0" />
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-[1]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-20 left-10 w-96 h-96 bg-[#0077ff] rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b894] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ffcc00] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
          />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block">
          <motion.div
            className="absolute top-32 left-20 text-6xl"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            🤖
          </motion.div>
          <motion.div
            className="absolute top-40 right-32 text-5xl"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            💻
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-1/4 text-4xl"
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            🧠
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#ffcc00] bg-clip-text text-transparent"
          >
            🚀 Online STEM Courses Coming Soon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto"
          >
            Hands-on Robotics, Coding, AI & Drone Design from anywhere — launch date soon.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0077ff] to-[#00b894] text-white shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('waitlist')}
            >
              Join Waitlist
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2"
              onClick={() => scrollToSection('courses')}
            >
              View Course Paths
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Courses Overview */}
      <section id="courses" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0077ff]/5 via-[#00b894]/5 to-[#ffcc00]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
              🔍 Upcoming Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your pathway in STEM — we'll get you started.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="border-2 h-full cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  style={{ 
                    borderColor: `${course.color}40`,
                  }}
                >
                  <CardHeader>
                    <motion.div 
                      className="text-6xl mb-4 text-center"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {course.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-center" style={{ color: course.color }}>
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 text-center">
                      {course.description}
                    </CardDescription>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-full transition-all duration-300"
                        variant="outline"
                        style={{ 
                          borderColor: course.color, 
                          color: course.color,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = course.color;
                          e.currentTarget.style.borderColor = course.color;
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.borderColor = course.color;
                          e.currentTarget.style.color = course.color;
                        }}
                        onClick={() => scrollToSection(course.scrollTo)}
                      >
                        See Syllabus
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section id="syllabus" className="py-20 bg-gradient-to-b from-transparent to-[#0077ff]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
              Course Syllabus
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Click on each course to view modules, duration, mode, and expected outcomes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {syllabusData.map((course, index) => (
                <motion.div
                  key={course.id}
                  id={course.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={course.id}
                    className="bg-gradient-to-r from-[#0077ff]/10 to-[#00b894]/10 border-2 border-[#0077ff]/30 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-[#0077ff] hover:no-underline">
                      {course.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Modules:</h4>
                          <ul className="space-y-2">
                            {course.modules.map((module, i) => (
                              <li key={i} className="text-muted-foreground flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 mt-1 text-[#0077ff] flex-shrink-0" />
                                {module}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[#00b894]" />
                            <span className="text-sm text-muted-foreground"><strong>Duration:</strong> {course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-[#00b894]" />
                            <span className="text-sm text-muted-foreground"><strong>Mode:</strong> {course.mode}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#00b894]" />
                            <span className="text-sm text-muted-foreground"><strong>Prerequisite:</strong> {course.prerequisite}</span>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground"><strong className="text-[#0077ff]">Learning Outcome:</strong> {course.outcome}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#00b894]/10 via-transparent to-[#0077ff]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00b894] to-[#0077ff] bg-clip-text text-transparent">
              🎯 What You'll Achieve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hands-on learning outcomes aligned with real-world skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#0077ff]/10 to-[#00b894]/10 border-2 border-[#0077ff]/30 rounded-xl p-6 text-center"
              >
                <div className="text-5xl mb-4">{outcome.icon}</div>
                <p className="text-foreground font-semibold">{outcome.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-gradient-to-b from-[#0077ff]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
              👩‍🏫 Meet Our Mentors (Coming Soon)
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experts from IITs, NITs, and industry ready to guide you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="bg-gradient-to-br from-[#0077ff]/10 to-[#00b894]/10 border-2 border-[#0077ff]/30 h-64 flex items-center justify-center">
                  <CardContent className="text-center">
                    <Users className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
                    <div className="inline-block px-4 py-2 bg-[#00b894]/20 rounded-full">
                      <p className="text-[#00b894] font-semibold">Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077ff]/10 to-[#00b894]/10" />
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 text-8xl opacity-20"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            🤖
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-2 border-[#0077ff]/40 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent mb-2">
                  🌟 Join the Waitlist
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base sm:text-lg">
                  Be among the first to access our Online Courses when they go live!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <Input
                    placeholder="Full Name *"
                    value={waitlistForm.fullName}
                    onChange={(e) => setWaitlistForm({ ...waitlistForm, fullName: e.target.value })}
                    required
                    className="h-10 sm:h-11"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={waitlistForm.email}
                    onChange={(e) => setWaitlistForm({ ...waitlistForm, email: e.target.value })}
                    required
                    className="h-10 sm:h-11"
                  />
                  <select
                    value={waitlistForm.grade}
                    onChange={(e) => setWaitlistForm({ ...waitlistForm, grade: e.target.value })}
                    required
                    className="w-full h-10 sm:h-11 rounded-md border border-input bg-background text-foreground px-3 py-1 text-sm shadow-xs"
                  >
                    <option value="">Select Class / Grade *</option>
                    <option value="5-6">5–6</option>
                    <option value="7-8">7–8</option>
                    <option value="9-10">9–10</option>
                    <option value="11-12">11–12</option>
                  </select>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Course Interest (Optional - Select multiple)</label>
                    <div className="space-y-2">
                      {["Beginner Robotics", "Coding & IoT", "AI for Kids", "3D Design & Drones"].map((course) => (
                        <label key={course} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={waitlistForm.courseInterests.includes(course)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setWaitlistForm({ 
                                  ...waitlistForm, 
                                  courseInterests: [...waitlistForm.courseInterests, course] 
                                });
                              } else {
                                setWaitlistForm({ 
                                  ...waitlistForm, 
                                  courseInterests: waitlistForm.courseInterests.filter(c => c !== course) 
                                });
                              }
                            }}
                            className="w-4 h-4 rounded border-input"
                          />
                          {course}
                        </label>
                      ))}
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0077ff] to-[#00b894] text-white shadow-lg hover:shadow-xl transition-all font-semibold text-base sm:text-lg py-5 sm:py-6"
                    >
                      Join Waitlist
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
      <footer className="py-16 border-t border-border/50 bg-gradient-to-br from-[#0077ff]/5 via-background to-[#00b894]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0077ff] to-[#00b894] rounded-full blur-3xl"
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
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent"
            >
              STEMBotica — From Roots to Rockets 🚀
            </motion.h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-[#0077ff] mb-2">Contact</h4>
              <p className="text-muted-foreground text-sm">Email: stembotica@gmail.com</p>
              <p className="text-muted-foreground text-sm">Phone: 9520559669</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-[#0077ff] mb-2">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-muted-foreground hover:text-[#0077ff] transition-colors text-sm">Home</Link>
                <Link to="/workshops" className="text-muted-foreground hover:text-[#0077ff] transition-colors text-sm">Workshops</Link>
                <Link to="/online-courses" className="text-muted-foreground hover:text-[#0077ff] transition-colors text-sm">Online Courses</Link>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-[#0077ff] mb-2">Connect</h4>
              <a 
                href="https://www.linkedin.com/company/stemroots-academy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0077ff] transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm">
              © 2025 <span className="font-semibold bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">STEMBotica</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}