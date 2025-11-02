import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { memo, useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package, Users, Award, BookOpen, Filter } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const curriculumKits = [
  { 
    title: "TechExplorer Kit", 
    color: "#0077ff",
    image: "https://harmless-tapir-303.convex.cloud/api/storage/eafa6305-9973-4a88-bf8d-778731738984",
    description: "Perfect for beginners starting their STEM journey. Learn basic electronics, circuits, and simple coding concepts.",
    features: [
      "Basic electronic components and breadboard",
      "LED circuits and sensors",
      "Introduction to block-based coding",
      "10+ hands-on projects"
    ],
    ageRange: "Ages 8-10 (Grades 3-5)",
    duration: "3-6 months learning path",
    category: "Electronics",
    level: "Beginner"
  },
  { 
    title: "Robotics DIY Kit", 
    color: "#00b894",
    image: "https://harmless-tapir-303.convex.cloud/api/storage/f475022e-0f9c-47c5-8b73-1990dbcecf2e",
    description: "Build and program your own robots. Explore advanced coding with Arduino and create line-following robots.",
    features: [
      "Arduino-based robotics platform",
      "Motors, sensors, and chassis",
      "Python and C++ programming",
      "15+ robotics projects"
    ],
    ageRange: "Ages 10-13 (Grades 6-8)",
    duration: "6-9 months learning path",
    category: "Robotics",
    level: "Intermediate"
  },
  { 
    title: "RoboSpark Kit", 
    color: "#ffcc00",
    image: "https://harmless-tapir-303.convex.cloud/api/storage/810e221e-5b90-496f-b8ba-08be65ef9052",
    description: "Your first step into robotics with hands-on learning, easy assembly, and beginner-friendly projects.",
    features: [
      "Complete robotics starter kit",
      "Easy-to-follow assembly guide",
      "Sensor integration basics",
      "8+ beginner projects"
    ],
    ageRange: "Ages 8-11 (Grades 3-6)",
    duration: "2-4 months learning path",
    category: "Robotics",
    level: "Beginner"
  },
  { 
    title: "IoT DIY Kit", 
    color: "#0077ff",
    image: "https://harmless-tapir-303.convex.cloud/api/storage/1d92ccd9-5213-487d-a019-adac519a170a",
    description: "Connect devices to the internet and build smart automation systems. Learn IoT, cloud connectivity, and AI basics.",
    features: [
      "IoT sensors and WiFi modules",
      "Cloud platform integration",
      "Smart home automation projects",
      "12+ IoT applications"
    ],
    ageRange: "Ages 13-16 (Grades 9-10)",
    duration: "6-12 months learning path",
    category: "IoT",
    level: "Advanced"
  }
];

const CurriculumCard = memo(({ kit, index, onClick }: { kit: typeof curriculumKits[0]; index: number; onClick: () => void }) => (
  <motion.div 
    className="p-1 cursor-pointer"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.25, delay: index * 0.03 }}
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <Card className="h-full border-2 hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-background to-muted/10" style={{ borderColor: `${kit.color}40` }}>
      <CardContent className="p-6">
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/20 shadow-md">
          <img 
            src={kit.image} 
            alt={kit.title}
            className="w-full h-full object-contain p-4"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="font-bold text-xl text-white text-center tracking-tight">{kit.title}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
));

CurriculumCard.displayName = "CurriculumCard";

export function CurriculumSection() {
  const [selectedKit, setSelectedKit] = useState<typeof curriculumKits[0] | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [levelFilter, setLevelFilter] = useState<string>("All");
  const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const filteredKits = useMemo(() => {
    return curriculumKits.filter(kit => {
      const matchesCategory = categoryFilter === "All" || kit.category === categoryFilter;
      const matchesLevel = levelFilter === "All" || kit.level === levelFilter;
      return matchesCategory && matchesLevel;
    });
  }, [categoryFilter, levelFilter]);

  const categories = ["All", "Electronics", "Robotics", "IoT"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffcc00]/10 via-transparent to-[#0077ff]/10" />
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">STEMBotica Curriculum Kits</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our structured 4-level STEM learning pathway. Click on any kit to learn more about its features and learning outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-semibold text-muted-foreground">Filter by:</span>
          </div>
          
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={categoryFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoryFilter(category)}
                className={categoryFilter === category ? "bg-gradient-to-r from-[#0077ff] to-[#00b894]" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="h-6 w-px bg-border hidden md:block" />

          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level}
                variant={levelFilter === level ? "default" : "outline"}
                size="sm"
                onClick={() => setLevelFilter(level)}
                className={levelFilter === level ? "bg-gradient-to-r from-[#0077ff] to-[#00b894]" : ""}
              >
                {level}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {filteredKits.length > 0 ? (
            <>
              {/* Desktop Grid View */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredKits.map((kit, index) => (
                  <CurriculumCard 
                    key={index} 
                    kit={kit} 
                    index={index}
                    onClick={() => setSelectedKit(kit)}
                  />
                ))}
              </div>

              {/* Mobile Carousel View */}
              <div className="md:hidden">
                <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[autoplayPlugin.current]}
                  className="w-full"
                >
                  <CarouselContent>
                    {filteredKits.map((kit, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <CurriculumCard 
                          kit={kit} 
                          index={index}
                          onClick={() => setSelectedKit(kit)}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">
                No kits match your selected filters. Try adjusting your selection.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <Dialog open={selectedKit !== null} onOpenChange={() => setSelectedKit(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedKit && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold" style={{ color: selectedKit.color }}>
                  {selectedKit.title}
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {selectedKit.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/20">
                  <img 
                    src={selectedKit.image} 
                    alt={selectedKit.title}
                    className="w-full h-full object-contain p-6"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <Users className="w-6 h-6" style={{ color: selectedKit.color }} />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Age Range</p>
                      <p className="font-bold">{selectedKit.ageRange}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <BookOpen className="w-6 h-6" style={{ color: selectedKit.color }} />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Duration</p>
                      <p className="font-bold">{selectedKit.duration}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5" style={{ color: selectedKit.color }} />
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {selectedKit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Award className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: selectedKit.color }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${selectedKit.color}, ${selectedKit.color}dd)`,
                    color: 'white'
                  }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get This Kit
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}