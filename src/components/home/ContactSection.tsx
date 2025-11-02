import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Linkedin, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export function ContactSection() {
  const submitContactForm = useMutation(api.contacts.submitContactForm);

  const [formData, setFormData] = useState({
    name: "",
    schoolName: "",
    email: "",
    phone: "",
    service: "",
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

    if (!formData.service) {
      errors.service = "Please select a service";
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
      setFormData({ name: "", schoolName: "", email: "", phone: "", service: "", message: "" });
      setFormErrors({ name: "", schoolName: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0077ff]/10 via-[#00b894]/10 to-[#ffcc00]/10" />
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#ffcc00] bg-clip-text text-transparent"
            >
              Get in Touch with STEMBotica
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Ready to bring innovation to your school? Let's collaborate to create an inspiring STEM learning experience for your students.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <Card className="border-2 border-[#0077ff]/40 shadow-xl h-full bg-gradient-to-br from-background to-[#0077ff]/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-base">
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077ff] to-[#0055cc] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                      <a href="tel:9520559669" className="font-bold text-lg hover:text-[#0077ff] transition-colors">
                        9520559669
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00b894] to-[#008f6f] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                      <a href="mailto:stembotica@gmail.com" className="font-bold text-lg hover:text-[#00b894] transition-colors break-all">
                        stembotica@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffcc00] to-[#ffaa00] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/company/stemroots-academy/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-lg text-[#0077ff] hover:text-[#00b894] transition-colors inline-flex items-center gap-1"
                      >
                        Visit Profile
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3"
            >
              <Card className="border-2 border-[#00b894]/40 shadow-xl h-full bg-gradient-to-br from-background to-[#00b894]/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                      <Select
                        value={formData.service}
                        onValueChange={(value) => {
                          setFormData({ ...formData, service: value });
                          if (formErrors.service) setFormErrors({ ...formErrors, service: "" });
                        }}
                      >
                        <SelectTrigger className={`h-11 ${formErrors.service ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}>
                          <SelectValue placeholder="Select Service Interested In *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stem-workshops">STEM Workshops</SelectItem>
                          <SelectItem value="diy-stem-kits">DIY STEM Kits</SelectItem>
                          <SelectItem value="online-courses">Online Courses/App</SelectItem>
                          <SelectItem value="year-long-curriculum">Year-long Curriculum</SelectItem>
                          <SelectItem value="tinkering-lab-services">Tinkering Lab Services</SelectItem>
                          <SelectItem value="teacher-training">Teacher Training</SelectItem>
                          <SelectItem value="other">Other / General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      {formErrors.service && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.service}</p>
                      )}
                    </div>
                    
                    <div>
                      <Textarea
                        placeholder="Tell us about your requirements, number of students, or any questions you have... (minimum 10 characters) *"
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
                        className="w-full bg-gradient-to-r from-[#0077ff] to-[#00b894] hover:from-[#0088ff] hover:to-[#00c9a5] text-white shadow-lg hover:shadow-2xl transition-all duration-300 h-12 text-base font-semibold group"
                      >
                        Send Message
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
