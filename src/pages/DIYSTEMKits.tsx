import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { ChevronRight, ShoppingCart, Package, Zap } from "lucide-react";
import { Link } from "react-router";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function DIYSTEMKits() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const submitContactForm = useMutation(api.contacts.submitContactForm);

  const [formData, setFormData] = useState({
    name: "",
    schoolName: "",
    email: "",
    phone: "",
    service: "diy-stem-kits",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    schoolName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
  };

  const validateForm = (): boolean => {
    const errors = {
      name: "",
      schoolName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    };

    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.schoolName.trim()) {
      errors.schoolName = "School name is required";
      isValid = false;
    } else if (formData.schoolName.trim().length < 3) {
      errors.schoolName = "School name must be at least 3 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    
    try {
      await submitContactForm({
        name: formData.name.trim(),
        schoolName: formData.schoolName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
      });
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", schoolName: "", email: "", phone: "", service: "diy-stem-kits", message: "" });
      setFormErrors({ name: "", schoolName: "", email: "", phone: "", service: "", message: "" });
      setContactDialogOpen(false);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const benefits = [
    { icon: "🧰", label: "Hands-on Learning" },
    { icon: "💡", label: "Creativity & Innovation" },
    { icon: "🔧", label: "Build Confidence & Skills" },
    { icon: "📚", label: "Aligned with School Curriculum & NEP" },
    { icon: "🌐", label: "Learn Anywhere Anytime" }
  ];

  const kits = [
    {
      id: "kit_robotics_beginner",
      title: "Robotics Beginner Kit",
      gradeLevel: "Grades 5-7",
      difficulty: "Easy",
      description: "Build a simple line-following robot, learn basics of circuits & motors.",
      color: "#00D084"
    },
    {
      id: "kit_coding_iot_starter",
      title: "Coding & IoT Starter Kit",
      gradeLevel: "Grades 6-8",
      difficulty: "Medium",
      description: "Includes sensors, microcontroller, and starter IoT modules to automate tasks.",
      color: "#007BFF"
    },
    {
      id: "kit_ai_project_kit",
      title: "AI Project Kit",
      gradeLevel: "Grades 8-10",
      difficulty: "Hard",
      description: "Image recognition, voice control components, and AI-enabled boards.",
      color: "#0077ff"
    }
  ];

  const kitDetails = [
    {
      id: "kit_robotics_beginner",
      title: "Robotics Beginner Kit",
      components: ["Arduino Nano / Maker board", "Motors & Wheels", "Chassis frame", "Line sensors", "Battery pack", "Assembly tools"],
      sampleProject: "Line-Follower Robot",
      videoLink: "https://youtube.com/sample-demo-robotics"
    },
    {
      id: "kit_coding_iot_starter",
      title: "Coding & IoT Starter Kit",
      components: ["Microcontroller board", "Temperature & humidity sensors", "WiFi module", "LEDs & buzzer", "Connecting cables"],
      sampleProject: "Smart Home Alarm / Weather Station",
      videoLink: "https://youtube.com/sample-demo-iot"
    },
    {
      id: "kit_ai_project_kit",
      title: "AI Project Kit",
      components: ["Raspberry Pi / AI board", "Camera module", "Microphone module", "Speech / Image dataset", "LED display", "Power unit"],
      sampleProject: "Face / Voice Recognition",
      videoLink: "https://youtube.com/sample-demo-ai"
    }
  ];

  const steps = [
    "Choose Your Kit",
    "Place Order / Pre-Order",
    "Kit Shipped to You",
    "Unbox & Explore",
    "Build & Learn",
    "Support & Share Projects"
  ];

  const packages = [
    {
      name: "Starter Kit",
      price: "₹1,499",
      features: ["Basic robotics parts", "USB power", "Simple instructions", "1 month support"],
      color: "#00D084"
    },
    {
      name: "Intermediate Kit",
      price: "₹2,999",
      features: ["Includes sensors & modules", "IoT/WiFi parts", "Detailed tutorials", "2 months support"],
      color: "#007BFF"
    },
    {
      name: "Advanced Kit",
      price: "₹4,999",
      features: ["AI/ML capable parts", "Better build materials", "Video library access", "3 months support"],
      color: "#0077ff"
    },
    {
      name: "Bundle Pack",
      price: "₹7,499",
      features: ["Multiple kits combined", "Discounted price", "Extra bonus modules", "Extended support"],
      color: "#00b894"
    }
  ];

  const faqItems = [
    {
      q: "What age levels are these kits for?",
      a: "Typically Grades 5-10. Each kit has its recommended age/difficulty."
    },
    {
      q: "Do I need extra tools or parts?",
      a: "Basic tools included; some household items may be needed depending on the project."
    },
    {
      q: "How long will shipping take?",
      a: "Delivery times vary; usually 5-10 business days depending on location."
    },
    {
      q: "Is customer support available?",
      a: "Yes, for setup, component replacement and project help."
    },
    {
      q: "Do you provide instructions / tutorials?",
      a: "Yes – video tutorials, PDF guides, and online support are included with every kit."
    }
  ];

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
            <Link to="/workshops" className="text-foreground/80 hover:text-[#0077ff] transition-all duration-300 font-medium relative group">
              Workshops
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link to="/diy-stem-kits" className="text-[#0077ff] font-semibold relative group">
              DIY STEM Kits
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894]" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero_kits" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D084]/5 via-background to-[#007BFF]/5 z-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#0077ff]/3 to-transparent z-0" />
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-[1]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-20 left-10 w-96 h-96 bg-[#00D084] rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#007BFF] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          />
        </div>

        <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00D084] via-[#007BFF] to-[#0077ff] bg-clip-text text-transparent"
              >
                DIY STEM Kits – Hands-On Learning at Home
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed"
              >
                Everything you need to build, tinker, and explore STEM concepts by yourself or with friends.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00D084] to-[#007BFF] text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={() => scrollToSection('section_catalogue')}
                >
                  Browse Kits
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.img
                src="https://harmless-tapir-303.convex.cloud/api/storage/8dc63bc4-55f3-434d-93a1-5e169d34821d"
                alt="STEMBotica DIY STEM Kits - Robotics Components"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl lg:ml-auto"
                loading="eager"
                decoding="async"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why STEM Kits Section */}
      <section id="section_why_kits" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00D084]/5 via-[#007BFF]/5 to-[#0077ff]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D084] to-[#007BFF] bg-clip-text text-transparent">
              Why STEM Kits?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-2 border-[#00D084]/30 h-full text-center">
                  <CardContent className="pt-6">
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <p className="font-semibold text-foreground">{benefit.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kits Catalogue Section */}
      <section id="section_catalogue" className="py-20 bg-gradient-to-b from-transparent to-[#00D084]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D084] to-[#007BFF] bg-clip-text text-transparent">
              Our Kits Catalogue
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the STEM kits we offer – pick those that excite you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kits.map((kit, index) => (
              <motion.div
                key={kit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="border-2 h-full" style={{ borderColor: `${kit.color}40` }}>
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-lg mb-4 flex items-center justify-center">
                      <Package className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl" style={{ color: kit.color }}>
                      {kit.title}
                    </CardTitle>
                    <CardDescription>
                      <span className="font-semibold">{kit.gradeLevel}</span> • <span className="font-semibold">{kit.difficulty}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{kit.description}</p>
                    <Button
                      variant="outline"
                      className="w-full"
                      style={{ borderColor: kit.color, color: kit.color }}
                      onClick={() => scrollToSection('section_featured_kit_details')}
                    >
                      View Details
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kit Details Section */}
      <section id="section_featured_kit_details" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#007BFF]/10 via-transparent to-[#00D084]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#007BFF] to-[#00D084] bg-clip-text text-transparent">
              Featured Kit Details
            </h2>
          </motion.div>

          <Tabs defaultValue={kitDetails[0].id} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {kitDetails.map((kit) => (
                <TabsTrigger key={kit.id} value={kit.id}>
                  {kit.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {kitDetails.map((kit) => (
              <TabsContent key={kit.id} value={kit.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{kit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Components Included:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {kit.components.map((component, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-[#00D084]" />
                            {component}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Sample Project:</h4>
                      <p className="text-muted-foreground">{kit.sampleProject}</p>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-[#00D084] to-[#007BFF] text-white"
                      onClick={() => window.open(kit.videoLink, '_blank')}
                    >
                      Watch Demo Video
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="section_faq" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D084]/5 to-[#007BFF]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00D084] to-[#007BFF] bg-clip-text text-transparent">
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
                    className="bg-gradient-to-r from-[#00D084]/10 to-[#007BFF]/10 border-2 border-[#00D084]/30 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-[#00D084] hover:no-underline">
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

      {/* Contact CTA Section */}
      <section id="section_contact" className="py-20 bg-gradient-to-b from-[#00D084]/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#00D084] to-[#007BFF] bg-clip-text text-transparent">
              Ready to Start Your STEM Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to order your DIY STEM Kit or learn more about our offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00D084] to-[#007BFF] text-white shadow-lg hover:shadow-xl"
                onClick={() => setContactDialogOpen(true)}
              >
                Contact Us
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'tel:9520559669'}
              >
                Call: 9520559669
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#00D084] to-[#007BFF] bg-clip-text text-transparent">
              Get Your DIY STEM Kit
            </DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you within 24 hours
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (formErrors.name) setFormErrors({ ...formErrors, name: "" });
                  }}
                  className={`h-11 ${formErrors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>
              <div>
                <Input
                  placeholder="School Name *"
                  value={formData.schoolName}
                  onChange={(e) => {
                    setFormData({ ...formData, schoolName: e.target.value });
                    if (formErrors.schoolName) setFormErrors({ ...formErrors, schoolName: "" });
                  }}
                  className={`h-11 ${formErrors.schoolName ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
                />
                {formErrors.schoolName && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.schoolName}</p>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (formErrors.email) setFormErrors({ ...formErrors, email: "" });
                  }}
                  className={`h-11 ${formErrors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number (10 digits) *"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (formErrors.phone) setFormErrors({ ...formErrors, phone: "" });
                  }}
                  className={`h-11 ${formErrors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                )}
              </div>
            </div>
            
            <div>
              <Textarea
                placeholder="Tell us which kit you're interested in and any questions you have... (minimum 10 characters) *"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (formErrors.message) setFormErrors({ ...formErrors, message: "" });
                }}
                className={`min-h-32 resize-none ${formErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
              />
              {formErrors.message && (
                <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
              )}
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-[#00D084] to-[#007BFF] hover:from-[#00b894] hover:to-[#0088ff] text-white shadow-lg hover:shadow-2xl transition-all duration-300 h-12 text-base font-semibold group"
              >
                Send Message
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </form>
        </DialogContent>
      </Dialog>

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
              <Link to="/diy-stem-kits" className="text-muted-foreground hover:text-[#0077ff] transition-colors font-medium">DIY Kits</Link>
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