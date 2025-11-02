import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { toast } from "sonner";
import { 
  ChevronRight, 
  BookOpen, 
  Award, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Download,
  Lightbulb,
  Target,
  TrendingUp,
  School,
  GraduationCap,
  Rocket,
  Sparkles,
  Clock,
  FileText,
  Video,
  Package
} from "lucide-react";
import { Link } from "react-router";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function YearLongCurriculum() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  const submitContactForm = useMutation(api.contacts.submitContactForm);

  const [inquiryForm, setInquiryForm] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
    gradeLevels: [] as string[],
    numberOfStudents: "",
    message: ""
  });

  const curriculumLevels = [
    {
      level: "Level 1",
      name: "TechExplorer",
      grades: "Grades 3-5",
      age: "8-10 years",
      color: "#0077ff",
      icon: "🔍",
      topics: ["Basic Electronics", "Simple Circuits", "Block Coding", "Sensors & LEDs"],
      projects: "10+ hands-on projects",
      outcomes: [
        "Understand basic electronic components",
        "Build simple circuits with LEDs and sensors",
        "Learn block-based programming fundamentals",
        "Develop problem-solving skills"
      ]
    },
    {
      level: "Level 2",
      name: "RoboSpark",
      grades: "Grades 6-8",
      age: "10-13 years",
      color: "#00b894",
      icon: "🤖",
      topics: ["Robotics Basics", "Arduino Programming", "Motor Control", "Line Following Robots"],
      projects: "12+ robotics projects",
      outcomes: [
        "Build and program Arduino-based robots",
        "Master motor control and sensor integration",
        "Create line-following and obstacle-avoiding robots",
        "Apply coding logic to real-world problems"
      ]
    },
    {
      level: "Level 3",
      name: "Innovation Maker",
      grades: "Grades 9-10",
      age: "13-16 years",
      color: "#ffcc00",
      icon: "💡",
      topics: ["IoT Fundamentals", "Cloud Connectivity", "AI Basics", "Smart Automation"],
      projects: "15+ IoT & AI projects",
      outcomes: [
        "Connect devices to cloud platforms",
        "Build smart home automation systems",
        "Understand AI and machine learning basics",
        "Create IoT-enabled innovative solutions"
      ]
    },
    {
      level: "Level 4",
      name: "Tech Pioneer",
      grades: "Grades 11-12",
      age: "16-18 years",
      color: "#ff6b6b",
      icon: "🚀",
      topics: ["Advanced AI", "Machine Learning", "3D Design & CAD", "Drone Technology"],
      projects: "20+ advanced projects",
      outcomes: [
        "Develop AI models for real applications",
        "Design and 3D print prototypes",
        "Build and program drones",
        "Prepare for engineering careers"
      ]
    }
  ];

  const highlights = [
    { icon: Calendar, label: "40+ Weeks of Learning", color: "#0077ff" },
    { icon: Award, label: "NEP 2020 & ATL Aligned", color: "#00b894" },
    { icon: Lightbulb, label: "Monthly Projects", color: "#ffcc00" },
    { icon: TrendingUp, label: "Progressive Skills", color: "#ff6b6b" },
    { icon: Users, label: "Teacher Training", color: "#a855f7" },
    { icon: CheckCircle2, label: "Certification", color: "#0077ff" }
  ];

  const monthlyRoadmap = [
    { months: "Month 1-2", phase: "Foundation & Basics", description: "Introduction to STEM concepts, basic electronics, and safety protocols" },
    { months: "Month 3-4", phase: "Core Concepts", description: "Deep dive into programming fundamentals and circuit design" },
    { months: "Month 5-6", phase: "Intermediate Projects", description: "Hands-on projects combining coding and hardware" },
    { months: "Month 7-8", phase: "Advanced Applications", description: "Complex systems, sensors integration, and automation" },
    { months: "Month 9-10", phase: "Innovation Challenges", description: "Problem-solving competitions and creative projects" },
    { months: "Month 11-12", phase: "Final Projects & Showcase", description: "Capstone projects and student exhibition events" }
  ];

  const includedFeatures = [
    { icon: FileText, label: "Complete Curriculum Materials" },
    { icon: BookOpen, label: "Student Workbooks & Guides" },
    { icon: Users, label: "Teacher Training Sessions" },
    { icon: Package, label: "DIY STEM Kits" },
    { icon: Video, label: "Online Learning Resources" },
    { icon: CheckCircle2, label: "Monthly Assessments" },
    { icon: Sparkles, label: "Project Showcase Events" },
    { icon: Award, label: "Certificates of Completion" }
  ];

  const implementationModels = [
    {
      title: "Full School Integration",
      description: "Complete curriculum implementation across all grade levels",
      features: ["All 4 levels included", "Whole-school training", "Comprehensive support"],
      color: "#0077ff"
    },
    {
      title: "Grade-Specific Program",
      description: "Select specific grade levels based on your school's needs",
      features: ["Choose 1-3 levels", "Targeted training", "Flexible scheduling"],
      color: "#00b894"
    },
    {
      title: "After-School Club",
      description: "Extra-curricular STEM program for interested students",
      features: ["2-3 hours/week", "Mixed grade groups", "Project-focused"],
      color: "#ffcc00"
    },
    {
      title: "Custom Package",
      description: "Tailored curriculum designed for your unique requirements",
      features: ["Customized content", "Flexible duration", "Dedicated support"],
      color: "#ff6b6b"
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "Contact for pricing",
      description: "Perfect for schools starting their STEM journey",
      features: [
        "1 curriculum level",
        "Basic DIY kits",
        "Online resources access",
        "Email support",
        "Quarterly assessments"
      ],
      color: "#0077ff"
    },
    {
      name: "Standard",
      price: "Contact for pricing",
      description: "Comprehensive program for growing STEM initiatives",
      features: [
        "2 curriculum levels",
        "Standard DIY kits",
        "Teacher training (2 sessions)",
        "Online + phone support",
        "Monthly assessments",
        "Project showcase event"
      ],
      color: "#00b894",
      popular: true
    },
    {
      name: "Premium",
      price: "Contact for pricing",
      description: "Advanced program with full support and resources",
      features: [
        "3 curriculum levels",
        "Premium DIY kits",
        "Teacher training (4 sessions)",
        "Priority support",
        "Bi-weekly assessments",
        "2 showcase events",
        "Custom projects"
      ],
      color: "#ffcc00"
    },
    {
      name: "Enterprise",
      price: "Contact for pricing",
      description: "Complete solution for large-scale implementation",
      features: [
        "All 4 curriculum levels",
        "Premium kits + extras",
        "Unlimited teacher training",
        "Dedicated support manager",
        "Weekly assessments",
        "Quarterly showcase events",
        "Custom curriculum modules",
        "Annual review & updates"
      ],
      color: "#ff6b6b"
    }
  ];

  const faqs = [
    {
      question: "How is the curriculum aligned with NEP 2020?",
      answer: "Our curriculum is designed to align with the National Education Policy 2020's focus on experiential learning, critical thinking, and 21st-century skills. It emphasizes hands-on STEM education, problem-solving, and creativity - all core principles of NEP 2020."
    },
    {
      question: "What materials are provided with the curriculum?",
      answer: "Each package includes comprehensive teacher guides, student workbooks, DIY STEM kits with all necessary components, online learning resources, assessment materials, and project templates. Digital resources are accessible through our learning platform."
    },
    {
      question: "Is teacher training included in all packages?",
      answer: "Teacher training is included in Standard, Premium, and Enterprise packages. Basic package includes online training resources. Training covers curriculum delivery, kit usage, assessment methods, and classroom management for STEM activities."
    },
    {
      question: "How are students assessed throughout the year?",
      answer: "Assessment is continuous and multi-faceted, including project-based evaluations, practical demonstrations, written tests, peer reviews, and self-assessments. We provide rubrics and assessment tools aligned with learning outcomes for each level."
    },
    {
      question: "Can we customize the curriculum for our school?",
      answer: "Yes! Our Custom Package allows complete flexibility. We can adapt content, adjust pacing, integrate with your existing programs, and create specialized modules based on your school's unique requirements and student needs."
    },
    {
      question: "What ongoing support is available after implementation?",
      answer: "We provide continuous support through email, phone, and online portal. This includes troubleshooting assistance, additional resources, curriculum updates, teacher consultation sessions, and access to our community of educators using the program."
    }
  ];

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const gradeLevelsText = inquiryForm.gradeLevels.length > 0 
        ? inquiryForm.gradeLevels.join(", ") 
        : "Not specified";
      
      const messageContent = `
Grade Levels Interested: ${gradeLevelsText}
Number of Students: ${inquiryForm.numberOfStudents || "Not specified"}

Additional Message:
${inquiryForm.message || "No additional message provided"}
      `.trim();

      await submitContactForm({
        name: inquiryForm.contactPerson,
        schoolName: inquiryForm.schoolName,
        email: inquiryForm.email,
        phone: inquiryForm.phone,
        service: "Year-Long Curriculum Inquiry",
        message: messageContent,
      });

      toast.success("Thank you for your inquiry! Our team will contact you within 24 hours.");
      setInquiryForm({
        schoolName: "",
        contactPerson: "",
        email: "",
        phone: "",
        gradeLevels: [],
        numberOfStudents: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to submit inquiry. Please try again.");
      console.error("Error submitting inquiry:", error);
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
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#0077ff] bg-clip-text text-transparent">
              STEMBotica
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link to="/year-long-curriculum" className="text-[#0077ff] font-semibold relative group">
              Year-Long Curriculum
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

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-[#0077ff]/20 to-[#00b894]/20 rounded-full mb-6 border border-[#0077ff]/30"
          >
            <span className="text-[#0077ff] font-semibold">📚 Comprehensive STEM Education</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#ffcc00] bg-clip-text text-transparent"
          >
            Year-Long STEM Curriculum
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto"
          >
            A Structured Learning Journey Aligned with NEP 2020 & ATL Labs
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto"
          >
            Transform your school with our comprehensive 40-week STEM program designed for grades 3-12, featuring hands-on projects, progressive skill development, and complete teacher support.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0077ff] to-[#00b894] text-white shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://drive.google.com/file/d/1hBe1To9PPmc60A5TOjb1Fyzctn7dWmXV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-5 h-5" />
                Download Curriculum Guide
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2"
              onClick={() => scrollToSection('inquiry')}
            >
              Request Demo
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview - Highlights */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077ff]/5 to-[#00b894]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
              Why Choose Our Curriculum?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive program designed for excellence in STEM education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-2 h-full" style={{ borderColor: `${highlight.color}40` }}>
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                      style={{ background: `linear-gradient(135deg, ${highlight.color}, ${highlight.color}dd)` }}
                    >
                      <highlight.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold" style={{ color: highlight.color }}>
                      {highlight.label}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Four-Level Curriculum Structure */}
      <section id="levels" className="py-20 bg-gradient-to-b from-transparent to-[#0077ff]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
              Four-Level Curriculum Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Progressive learning pathways designed for every grade level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {curriculumLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card 
                  className="border-2 h-full hover:shadow-2xl transition-all duration-300"
                  style={{ borderColor: `${level.color}40` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl"
                      >
                        {level.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-2xl" style={{ color: level.color }}>
                          {level.level}: {level.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {level.grades} • {level.age}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" style={{ color: level.color }} />
                        Topics Covered
                      </h4>
                      <ul className="space-y-1">
                        {level.topics.map((topic, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: level.color }} />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <Rocket className="w-5 h-5" style={{ color: level.color }} />
                      <span className="text-sm font-semibold">{level.projects}</span>
                    </div>

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

      {/* Monthly Learning Roadmap */}
      <section id="roadmap" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#00b894]/10 via-transparent to-[#0077ff]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00b894] to-[#0077ff] bg-clip-text text-transparent">
              Monthly Learning Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured 12-month journey from basics to advanced projects
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {monthlyRoadmap.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`phase-${index}`}
                    className="bg-gradient-to-r from-[#0077ff]/10 to-[#00b894]/10 border-2 border-[#0077ff]/30 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-[#0077ff] hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5" />
                        <span>{phase.months}: {phase.phase}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground pt-2">{phase.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-[#0077ff]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful STEM implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-2 border-[#0077ff]/30 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0077ff] to-[#00b894] mb-4"
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <p className="font-semibold text-foreground">{feature.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Models */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffcc00]/5 to-[#ff6b6b]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffcc00] to-[#ff6b6b] bg-clip-text text-transparent">
              Implementation Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible options to fit your school's unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {implementationModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card 
                  className="border-2 h-full"
                  style={{ borderColor: `${model.color}40` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl" style={{ color: model.color }}>
                      {model.title}
                    </CardTitle>
                    <CardDescription>{model.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {model.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: model.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section id="packages" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0077ff]/5 via-[#00b894]/5 to-[#ffcc00]/5" />
        
        {/* Animated background blob */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#0077ff]/20 to-[#00b894]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent">
              Pricing & Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your school's STEM journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative h-full"
                >
                  {/* Pulsing glow shadow */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl blur-xl"
                    style={{ background: pkg.color }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <Card 
                    className={`border-2 h-full relative overflow-hidden ${pkg.popular ? 'ring-2 ring-offset-2' : ''}`}
                    style={{ 
                      borderColor: `${pkg.color}60`,
                      ...(pkg.popular && { '--tw-ring-color': pkg.color } as React.CSSProperties)
                    }}
                  >
                    {pkg.popular && (
                      <div 
                        className="absolute top-0 right-0 px-4 py-1 text-white text-xs font-bold rounded-bl-lg"
                        style={{ background: pkg.color }}
                      >
                        POPULAR
                      </div>
                    )}

                    <CardHeader>
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                        style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)` }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <span className="text-3xl font-bold text-white">{index + 1}</span>
                      </motion.div>
                      <CardTitle className="text-2xl text-center" style={{ color: pkg.color }}>
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className="text-center">{pkg.description}</CardDescription>
                      <p className="text-2xl font-bold text-center mt-4" style={{ color: pkg.color }}>
                        {pkg.price}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                              <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: pkg.color }} />
                            </motion.div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6"
                      >
                        <Button
                          className="w-full text-white font-semibold"
                          style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)` }}
                          onClick={() => scrollToSection('inquiry')}
                        >
                          Get Started
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#00b894]/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00b894] to-[#0077ff] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our curriculum
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`faq-${index}`}
                    className="bg-gradient-to-r from-[#00b894]/10 to-[#0077ff]/10 border-2 border-[#00b894]/30 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-[#00b894] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground pt-2">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077ff]/10 to-[#00b894]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-[#0077ff]/40 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl bg-gradient-to-r from-[#0077ff] to-[#00b894] bg-clip-text text-transparent mb-2">
                  Request Curriculum Details
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Fill out the form below and our team will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="School Name *"
                      value={inquiryForm.schoolName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, schoolName: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Contact Person *"
                      value={inquiryForm.contactPerson}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, contactPerson: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Grade Levels Interested (Select multiple)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Grades 3-5", "Grades 6-8", "Grades 9-10", "Grades 11-12"].map((grade) => (
                        <label key={grade} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={inquiryForm.gradeLevels.includes(grade)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setInquiryForm({ 
                                  ...inquiryForm, 
                                  gradeLevels: [...inquiryForm.gradeLevels, grade] 
                                });
                              } else {
                                setInquiryForm({ 
                                  ...inquiryForm, 
                                  gradeLevels: inquiryForm.gradeLevels.filter(g => g !== grade) 
                                });
                              }
                            }}
                            className="w-4 h-4 rounded border-input"
                          />
                          {grade}
                        </label>
                      ))}
                    </div>
                  </div>

                  <Input
                    placeholder="Approximate Number of Students"
                    value={inquiryForm.numberOfStudents}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, numberOfStudents: e.target.value })}
                  />

                  <Textarea
                    placeholder="Additional Message or Questions"
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    rows={4}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0077ff] to-[#00b894] text-white shadow-lg hover:shadow-xl transition-all font-semibold text-lg py-6"
                    >
                      Submit Inquiry
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
                <Link to="/year-long-curriculum" className="text-muted-foreground hover:text-[#0077ff] transition-colors text-sm">Year-Long Curriculum</Link>
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