import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight, CheckCircle2, Wrench, Ruler, ShoppingCart, Settings, GraduationCap, RefreshCw } from "lucide-react";
import { Link } from "react-router";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function ATLLabSetup() {
  const submitContactForm = useMutation(api.contacts.submitContactForm);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  const [inquiryForm, setInquiryForm] = useState({
    schoolName: "",
    location: "",
    contactPerson: "",
    email: "",
    phone: "",
    labArea: "",
    servicesInterested: [] as string[],
    message: ""
  });

  const services = [
    {
      icon: Wrench,
      title: "Consulting & Grant Assistance",
      description: "Help with applying for ATL grants, compliance, and approvals.",
      color: "#00D084"
    },
    {
      icon: Ruler,
      title: "Lab Design & Layout",
      description: "Optimal bench layout, power & network planning.",
      color: "#007BFF"
    },
    {
      icon: ShoppingCart,
      title: "Procurement & Vendor Management",
      description: "Sourcing quality STEM kits, managing vendors.",
      color: "#0077ff"
    },
    {
      icon: Settings,
      title: "Installation & Commissioning",
      description: "Setup, calibration, testing of all equipment.",
      color: "#00b894"
    },
    {
      icon: GraduationCap,
      title: "Teacher Training & Onboarding",
      description: "Train staff to run lab and projects.",
      color: "#ffcc00"
    },
    {
      icon: RefreshCw,
      title: "Maintenance & Support",
      description: "Ongoing servicing, replacement, support.",
      color: "#ff6b6b"
    }
  ];

  const processSteps = [
    "Inquiry & Site Survey",
    "Design Proposal & Plan",
    "Budgeting & Procurement",
    "Installation & Testing",
    "Training & Handover",
    "Ongoing Support & Maintenance"
  ];

  const packages = [
    {
      name: "Starter ATL Package",
      features: ["Basic electronic kits", "Sensor sets", "Basic training"],
      color: "#007BFF"
    },
    {
      name: "Standard ATL Package",
      features: ["Includes 3D printer", "Advanced modules", "Extended training"],
      color: "#00D084"
    },
    {
      name: "Premium ATL Package",
      features: ["Full kit (robotics, IoT)", "Comprehensive training & support"],
      color: "#0077ff"
    },
    {
      name: "Custom Solution",
      features: ["Tailored to your school needs & space"],
      color: "#00b894"
    }
  ];

  const faqItems = [
    {
      q: "Who is eligible for ATL grant?",
      a: "Schools with Grades VI–X/XII under recognized boards; follow AIM guidelines."
    },
    {
      q: "What is required lab area?",
      a: "Typically 500–1000 sq ft, depending on number of students and activities."
    },
    {
      q: "How long does setup take?",
      a: "Usually 4–8 weeks from survey to commissioning."
    },
    {
      q: "Do you support documentation & compliance?",
      a: "Yes — we handle grant documentation, reporting & compliance."
    }
  ];

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitContactForm({
        name: inquiryForm.contactPerson,
        schoolName: inquiryForm.schoolName,
        email: inquiryForm.email,
        phone: inquiryForm.phone,
        service: "ATL Lab Setup - Quote/Consultation Request",
        message: `ATL Lab Setup Inquiry Details:

📍 Location: ${inquiryForm.location}
📐 Approximate Lab Area: ${inquiryForm.labArea || "Not specified"} sq ft

🔧 Services Interested:
${inquiryForm.servicesInterested.length > 0 ? inquiryForm.servicesInterested.map(s => `  • ${s}`).join('\n') : "  • None selected"}

💬 Additional Message:
${inquiryForm.message || "No additional message provided"}`
      });
      
      toast.success("Your inquiry has been submitted! We'll contact you within 24 hours.");
      setInquiryForm({
        schoolName: "",
        location: "",
        contactPerson: "",
        email: "",
        phone: "",
        labArea: "",
        servicesInterested: [],
        message: ""
      });
    } catch (error) {
      toast.error("Failed to submit inquiry. Please try again.");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <motion.img
                src="https://harmless-tapir-303.convex.cloud/api/storage/75ea5806-3221-4733-ab4f-ef6141abefa7"
                alt="STEMBotica Logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
              <span className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#0077ff] bg-clip-text text-transparent">
                STEMBotica
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/" className="text-sm lg:text-base text-foreground/80 hover:text-[#0077ff] active:text-[#00b894] transition-all duration-300 font-medium relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/workshops" className="text-sm lg:text-base text-foreground/80 hover:text-[#0077ff] active:text-[#00b894] transition-all duration-300 font-medium relative group">
                  Workshops
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/online-courses" className="text-sm lg:text-base text-foreground/80 hover:text-[#0077ff] active:text-[#00b894] transition-all duration-300 font-medium relative group">
                  Online Courses
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/atl-lab-setup" className="text-sm lg:text-base text-[#0077ff] font-semibold relative group">
                  ATL Lab Setup
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894]"
                    animate={{ scaleX: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link to="/atl-lab-setup" className="text-xs sm:text-sm text-[#0077ff] font-semibold px-2 py-1 rounded-md bg-[#0077ff]/10 active:bg-[#0077ff]/20 transition-all">
                  ATL Setup
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero_atl_setup" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0077ff]/5 via-background to-[#00b894]/5 z-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00D084]/3 to-transparent z-0" />
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-[1]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-20 left-10 w-96 h-96 bg-[#0077ff] rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D084] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#007BFF] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0077ff] via-[#00D084] to-[#007BFF] bg-clip-text text-transparent"
          >
            End-to-End ATL Lab Setup
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto"
          >
            We handle everything from design, procurement to training — your gateway to a world-class innovation lab.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0077ff] to-[#00D084] text-white shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('section_inquiry')}
            >
              Request a Quote
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About ATL Section */}
      <section id="section_about_atl" className="py-12 sm:py-16 md:py-20 relative overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0077ff]/5 via-[#00b894]/5 to-[#00D084]/5" />
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0077ff] to-[#00D084] bg-clip-text text-transparent">
                What is ATL & Why It Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                The Atal Tinkering Lab (ATL) is an initiative by NITI Aayog's Atal Innovation Mission to promote hands-on STEM learning and innovation in schools. Schools can receive grants (e.g. ₹20 lakh) under guidelines.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                ATL enables students to tinker, prototype, design, and experiment with robotics, sensors, 3D printers, IoT, and more.
              </p>
              <p className="text-lg text-foreground font-semibold">
                Benefits: improves creativity, student engagement, and real-world skills.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/5fbea786-d017-466a-904b-dc63ea95ab0e"
                alt="Students Working in ATL Lab - STEMBotica"
                className="w-full h-full object-cover rounded-2xl border-2 border-[#0077ff]/30 shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="section_services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-transparent to-[#0077ff]/5">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00D084] bg-clip-text text-transparent">
              Our ATL Setup Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-2 h-full" style={{ borderColor: `${service.color}40` }}>
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                      style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-center" style={{ color: service.color }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="section_process" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#00D084]/10 via-transparent to-[#0077ff]/10" />
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D084] to-[#0077ff] bg-clip-text text-transparent">
              Implementation Roadmap
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
                  style={{ background: `linear-gradient(135deg, #0077ff, #00D084)` }}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.div>
                <div className="flex-1 bg-gradient-to-r from-[#0077ff]/10 to-[#00D084]/10 border-2 border-[#0077ff]/30 rounded-xl p-4">
                  <p className="text-lg font-semibold text-foreground">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="section_packages" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#0077ff]/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div 
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#0077ff]/40 to-[#00D084]/40 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00D084] bg-clip-text text-transparent">
              ATL Setup Packages
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Choose the perfect package for your school's innovation lab
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 4px 20px ${pkg.color}20`,
                      `0 8px 40px ${pkg.color}40`,
                      `0 4px 20px ${pkg.color}20`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Card 
                    className="border-2 h-full relative overflow-hidden group" 
                    style={{ borderColor: `${pkg.color}40` }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${pkg.color}05 0%, ${pkg.color}15 100%)`
                      }}
                    />
                    
                    <CardHeader className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`
                        }}
                      >
                        <motion.span 
                          className="text-2xl font-bold text-white"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {index + 1}
                        </motion.span>
                      </motion.div>
                      
                      <CardTitle 
                        className="text-xl text-center mb-4 font-bold" 
                        style={{ color: pkg.color }}
                      >
                        {pkg.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-2 text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.4 + (i * 0.1) }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.4 }}
                            >
                              <CheckCircle2 
                                className="w-5 h-5 flex-shrink-0 mt-0.5" 
                                style={{ color: pkg.color }} 
                              />
                            </motion.div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.8 }}
                        className="mt-6"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            className="w-full text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                            style={{ 
                              background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`
                            }}
                            onClick={() => scrollToSection('section_inquiry')}
                          >
                            Get Started
                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Button>
                        </motion.div>
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
      <section id="section_faq" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-transparent to-[#0077ff]/5">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0077ff] to-[#00D084] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-gradient-to-r from-[#0077ff]/10 to-[#00D084]/10 border-2 border-[#0077ff]/30 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-[#0077ff] hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{item.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="section_inquiry" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077ff]/10 to-[#00D084]/10" />
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-[#0077ff]/40 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl bg-gradient-to-r from-[#0077ff] to-[#00D084] bg-clip-text text-transparent mb-2">
                  Request a Quote / Consultation
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <Input
                    placeholder="School Name *"
                    value={inquiryForm.schoolName}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, schoolName: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Location (City, State) *"
                    value={inquiryForm.location}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, location: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Contact Person & Role *"
                    value={inquiryForm.contactPerson}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, contactPerson: e.target.value })}
                    required
                  />
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
                  <Input
                    type="number"
                    placeholder="Approx Lab Area (sq ft)"
                    value={inquiryForm.labArea}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, labArea: e.target.value })}
                  />
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Services Interested (Select multiple)</label>
                    <div className="space-y-2">
                      {["Design", "Procurement", "Installation", "Training", "Support"].map((service) => (
                        <label key={service} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={inquiryForm.servicesInterested.includes(service)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setInquiryForm({
                                  ...inquiryForm,
                                  servicesInterested: [...inquiryForm.servicesInterested, service]
                                });
                              } else {
                                setInquiryForm({
                                  ...inquiryForm,
                                  servicesInterested: inquiryForm.servicesInterested.filter(s => s !== service)
                                });
                              }
                            }}
                            className="w-4 h-4 rounded border-input"
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>
                  <Textarea
                    placeholder="Additional Details or Questions"
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    rows={4}
                  />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0077ff] to-[#00D084] text-white shadow-lg hover:shadow-xl transition-all font-semibold text-lg py-6"
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
      <footer className="py-6 sm:py-8 border-t border-border/50 bg-gradient-to-br from-[#0077ff]/5 via-background to-[#00D084]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#0077ff] to-[#00D084] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/75ea5806-3221-4733-ab4f-ef6141abefa7" 
                alt="STEMBotica Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-[#0077ff] to-[#00D084] bg-clip-text text-transparent">
                STEMBotica
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm"
            >
              <Link to="/" className="text-muted-foreground hover:text-[#0077ff] transition-colors font-medium">Home</Link>
              <span className="text-border">•</span>
              <Link to="/workshops" className="text-muted-foreground hover:text-[#0077ff] transition-colors font-medium">Workshops</Link>
              <span className="text-border">•</span>
              <Link to="/online-courses" className="text-muted-foreground hover:text-[#0077ff] transition-colors font-medium">Courses</Link>
              <span className="text-border">•</span>
              <Link to="/atl-lab-setup" className="text-muted-foreground hover:text-[#0077ff] transition-colors font-medium">ATL Setup</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <a
                href="mailto:stembotica@gmail.com"
                className="text-muted-foreground hover:text-[#0077ff] transition-colors text-xs sm:text-sm font-medium"
              >
                stembotica@gmail.com
              </a>
              <span className="text-border">•</span>
              <a
                href="tel:9520559669"
                className="text-muted-foreground hover:text-[#00D084] transition-colors text-xs sm:text-sm font-medium"
              >
                9520559669
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border/50">
            <p className="text-muted-foreground text-xs text-center sm:text-left">
              © 2025 <span className="font-semibold bg-gradient-to-r from-[#0077ff] to-[#00D084] bg-clip-text text-transparent">STEMBotica</span>. All Rights Reserved.
            </p>
            <a
              href="https://www.linkedin.com/company/stemroots-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted-foreground hover:text-[#0077ff] transition-colors text-xs font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}