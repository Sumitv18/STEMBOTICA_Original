import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { 
  ChevronRight, 
  Clock, 
  GraduationCap, 
  Wrench, 
  Brain,
  Bot,
  Code,
  Lightbulb,
  Plane,
  Users,
  Award,
  CheckCircle,
  Star,
  Calendar,
  MessageCircle,
  Bell,
  Download
} from "lucide-react";
import { Link } from "react-router";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

// Counter animation component
function CountUpNumber({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Workshops() {
  const submitContactForm = useMutation(api.contacts.submitContactForm);

  const [registrationForm, setRegistrationForm] = useState({
    studentName: "",
    class: "",
    schoolName: "",
    parentContact: "",
    email: "",
    workshop: "",
    consent: false
  });

  const [partnerForm, setPartnerForm] = useState({
    schoolName: "",
    contactPerson: "",
    city: "",
    email: "",
    phone: ""
  });

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitContactForm({
        name: registrationForm.studentName,
        schoolName: registrationForm.schoolName || "Not provided",
        email: registrationForm.email,
        phone: registrationForm.parentContact,
        service: "Workshop Registration",
        message: `Workshop Registration Details:
- Student Name: ${registrationForm.studentName}
- Class/Grade: ${registrationForm.class}
- School Name: ${registrationForm.schoolName || "Not provided"}
- Parent Contact: ${registrationForm.parentContact}
- Email: ${registrationForm.email}
- Workshop Selected: ${registrationForm.workshop}
- Consent for updates: ${registrationForm.consent ? "Yes" : "No"}`
      });
      
      toast.success("Registration submitted successfully! We'll contact you soon.");
      setRegistrationForm({
        studentName: "",
        class: "",
        schoolName: "",
        parentContact: "",
        email: "",
        workshop: "",
        consent: false
      });
    } catch (error) {
      toast.error("Failed to submit registration. Please try again.");
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitContactForm({
        name: partnerForm.contactPerson || "Not provided",
        schoolName: partnerForm.schoolName,
        email: partnerForm.email,
        phone: partnerForm.phone,
        service: "Partnership Inquiry",
        message: `Partnership Inquiry Details:
- School Name: ${partnerForm.schoolName}
- Contact Person: ${partnerForm.contactPerson || "Not provided"}
- City: ${partnerForm.city || "Not provided"}
- Email: ${partnerForm.email}
- Phone: ${partnerForm.phone}`
      });
      
      toast.success("Thank you for your interest! We'll reach out to discuss partnership opportunities.");
      setPartnerForm({
        schoolName: "",
        contactPerson: "",
        city: "",
        email: "",
        phone: ""
      });
    } catch (error) {
      toast.error("Failed to submit partnership inquiry. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white">
      {/* Floating Action Buttons */}
      <motion.a
        href="https://wa.me/919520559669"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#00FF85] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-7 h-7 text-[#0B0C10]" />
      </motion.a>

      <motion.button
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#0078FF] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => toast.info("Subscribe to get notified about upcoming workshops!")}
      >
        <Bell className="w-7 h-7 text-white" />
      </motion.button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-students-working-on-robotics-project-6142/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0B0C10]/70" />
        </div>

        {/* Floating animated elements */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border-2 border-[#00FF85] rounded-lg"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 border-2 border-[#0078FF] rounded-full"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-12 h-12 bg-[#00FF85]/20 rounded-lg"
            animate={{ 
              x: [0, 30, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            🚀 Inspiring the Next Generation of Innovators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          >
            Hands-on STEM workshops that spark creativity through Robotics, Coding, AI, and Innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#00FF85] text-[#0B0C10] hover:bg-[#00FF85]/90 font-semibold"
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register for Workshop
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0078FF] text-[#0078FF] hover:bg-[#0078FF] hover:text-white"
              onClick={() => document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner with Us
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Workshop Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00FF85]">
                About STEMBotica Workshops
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                STEMBotica conducts interactive, fun-filled STEM workshops that align with NEP 2020 and ATL Tinkering goals. We bring innovation to classrooms through hands-on learning experiences that combine robotics, coding, and creativity. Each workshop helps students apply science and technology in real-world problem-solving.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "Duration", text: "1-Day or 2-Day Options" },
                  { icon: GraduationCap, title: "Target Group", text: "Students of Classes 6 to 12" },
                  { icon: Wrench, title: "Learning Mode", text: "Hands-on Project-Based" },
                  { icon: Brain, title: "Curriculum", text: "Aligned with NEP 2020 & ATL Labs" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#0078FF]/20 to-[#00FF85]/20 p-4 rounded-lg border border-[#00FF85]/30"
                  >
                    <feature.icon className="w-8 h-8 text-[#00FF85] mb-2" />
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800"
                alt="Workshop"
                className="rounded-2xl shadow-2xl border-2 border-[#00FF85]/30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Themes Grid */}
      <section id="programs" className="py-20 bg-gradient-to-b from-transparent to-[#0078FF]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FF85]">
              Explore Our Workshop Themes
            </h2>
            <p className="text-xl text-gray-300">
              Each program is designed to ignite curiosity and innovation in young minds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤖",
                title: "Robotics & Electronics",
                description: "Learn to build and program robots using sensors, motors, and microcontrollers.",
                projects: ["Line Follower Robot", "Obstacle Avoider", "Light Tracker"],
                targetClass: "6–10",
                color: "#00FF85"
              },
              {
                icon: "💻",
                title: "Coding & IoT",
                description: "Understand coding logic, IoT devices, and cloud-based automation projects.",
                projects: ["Home Automation", "Weather Station", "Smart Street Light"],
                targetClass: "7–12",
                color: "#0078FF"
              },
              {
                icon: "🧠",
                title: "AI & Innovation",
                description: "Dive into Artificial Intelligence and machine learning fundamentals through fun models.",
                projects: ["AI Face Recognition", "Chatbot", "AI Voice Assistant"],
                targetClass: "8–12",
                color: "#00FF85"
              },
              {
                icon: "✈️",
                title: "3D Design & Drones",
                description: "Explore aerodynamics, drone technology, and 3D printing for futuristic creations.",
                projects: ["Mini Drone", "3D CAD Model", "Paper Glider Aeronautics"],
                targetClass: "9–12",
                color: "#0078FF"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: `0 0 30px ${card.color}80`
                }}
                className="bg-[#0B0C10] border-2 rounded-xl p-6 cursor-pointer"
                style={{ borderColor: `${card.color}40` }}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: card.color }}>
                  {card.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{card.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Sample Projects:</p>
                  <ul className="space-y-1">
                    {card.projects.map((project, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3" style={{ color: card.color }} />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs font-semibold" style={{ color: card.color }}>
                  Target: Classes {card.targetClass}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Impact Stats */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0078FF]/20 to-[#00FF85]/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FF85]">
              Learning Impact & Achievements
            </h2>
            <p className="text-xl text-gray-300">
              Building confidence, creativity, and collaboration through STEM.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 1000, label: "Students Trained", suffix: "+" },
              { number: 25, label: "Partner Schools", suffix: "+" },
              { number: 90, label: "Students Built Their First Robot", suffix: "%" },
              { number: 100, label: "Certified Participants", suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#00FF85] mb-2">
                  <CountUpNumber end={stat.number} />
                  {stat.suffix}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-20 bg-gradient-to-b from-transparent to-[#0078FF]/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-[#0B0C10] border-[#00FF85]/30">
              <CardHeader>
                <CardTitle className="text-3xl text-[#00FF85]">Register for a STEM Workshop</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below to register for our upcoming workshops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                  <Input
                    placeholder="Student Name *"
                    value={registrationForm.studentName}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, studentName: e.target.value })}
                    required
                    className="bg-[#0B0C10] border-[#00FF85]/30 text-white"
                  />
                  <select
                    value={registrationForm.class}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, class: e.target.value })}
                    required
                    className="w-full h-9 rounded-md border border-[#00FF85]/30 bg-[#0B0C10] text-white px-3 py-1 text-sm"
                  >
                    <option value="">Select Class / Grade *</option>
                    {["6", "7", "8", "9", "10", "11", "12"].map(grade => (
                      <option key={grade} value={grade}>Class {grade}</option>
                    ))}
                  </select>
                  <Input
                    placeholder="School Name"
                    value={registrationForm.schoolName}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, schoolName: e.target.value })}
                    className="bg-[#0B0C10] border-[#00FF85]/30 text-white"
                  />
                  <Input
                    type="tel"
                    placeholder="Parent Contact Number *"
                    value={registrationForm.parentContact}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, parentContact: e.target.value })}
                    required
                    className="bg-[#0B0C10] border-[#00FF85]/30 text-white"
                  />
                  <Input
                    type="email"
                    placeholder="Email ID *"
                    value={registrationForm.email}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                    required
                    className="bg-[#0B0C10] border-[#00FF85]/30 text-white"
                  />
                  <select
                    value={registrationForm.workshop}
                    onChange={(e) => setRegistrationForm({ ...registrationForm, workshop: e.target.value })}
                    required
                    className="w-full h-9 rounded-md border border-[#00FF85]/30 bg-[#0B0C10] text-white px-3 py-1 text-sm"
                  >
                    <option value="">Select Workshop *</option>
                    <option value="robotics">Robotics & Electronics</option>
                    <option value="iot">Coding & IoT</option>
                    <option value="ai">AI & Innovation</option>
                    <option value="drones">3D Design & Drones</option>
                  </select>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={registrationForm.consent}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, consent: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-400">
                      I agree to receive updates about future STEMBotica events
                    </label>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-[#00FF85] text-[#0B0C10] hover:bg-[#00FF85]/90 font-semibold"
                    >
                      Submit Registration
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-[#0B0C10] border-[#0078FF]/30">
              <CardHeader>
                <CardTitle className="text-3xl text-[#0078FF]">Partner With STEMBotica</CardTitle>
                <CardDescription className="text-gray-400">
                  Bring our workshops to your school and empower your students with 21st-century skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <Input
                    placeholder="School Name *"
                    value={partnerForm.schoolName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, schoolName: e.target.value })}
                    required
                    className="bg-[#0B0C10] border-[#0078FF]/30 text-white"
                  />
                  <Input
                    placeholder="Contact Person"
                    value={partnerForm.contactPerson}
                    onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                    className="bg-[#0B0C10] border-[#0078FF]/30 text-white"
                  />
                  <Input
                    placeholder="City"
                    value={partnerForm.city}
                    onChange={(e) => setPartnerForm({ ...partnerForm, city: e.target.value })}
                    className="bg-[#0B0C10] border-[#0078FF]/30 text-white"
                  />
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    required
                    className="bg-[#0B0C10] border-[#0078FF]/30 text-white"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={partnerForm.phone}
                    onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                    required
                    className="bg-[#0B0C10] border-[#0078FF]/30 text-white"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button
                        type="submit"
                        className="w-full bg-[#0078FF] text-white hover:bg-[#0078FF]/90 font-semibold"
                      >
                        Submit
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-[#00FF85] text-[#00FF85] hover:bg-[#00FF85] hover:text-[#0B0C10]"
                        onClick={() => window.open('https://drive.google.com/file/d/1hBe1To9PPmc60A5TOjb1Fyzctn7dWmXV/view?usp=sharing', '_blank')}
                      >
                        <Download className="mr-2 w-4 h-4" />
                        Download Brochure
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#00FF85]/30 bg-[#0B0C10]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 STEMBotica | From Roots to Rockets – Planting the Seeds of Innovation.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-gray-400 hover:text-[#00FF85] transition-colors">
                Home
              </Link>
              <Link to="/workshops" className="text-gray-400 hover:text-[#00FF85] transition-colors">
                Workshops
              </Link>
              <a href="#contact" className="text-gray-400 hover:text-[#00FF85] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}