import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 md:py-10 border-t border-border/50 bg-gradient-to-br from-[#0B0C10] via-[#1a1d29] to-[#0B0C10] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div 
          className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-[#0077ff] via-[#00b894] to-[#0077ff] rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#ffcc00] via-[#ff6b6b] to-[#a855f7] rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-[#00b894] via-[#0077ff] to-[#ffcc00] rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:items-start gap-2"
          >
            <div className="flex items-center gap-3">
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/75ea5806-3221-4733-ab4f-ef6141abefa7" 
                alt="STEMBotica Logo" 
                className="h-10 md:h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
              <motion.span 
                className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#ffcc00] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                STEMBotica
              </motion.span>
            </div>
            <p className="text-muted-foreground text-xs md:text-sm text-center lg:text-left">
              Igniting Innovation Through Hands-On STEM Learning
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 md:gap-6"
          >
            {[
              { name: "Home", href: "#" },
              { name: "Programs", href: "#offerings" },
              { name: "Workshops", href: "#workshops" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-[#0077ff] transition-all duration-300 font-medium relative group text-xs md:text-sm"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0077ff] to-[#00b894] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Linkedin, link: "https://www.linkedin.com/company/stemroots-academy/", color: "#0077ff" },
              { icon: Instagram, link: "https://instagram.com/stembotica", color: "#00b894" },
              { icon: Youtube, link: "https://youtube.com/@stembotica", color: "#ffcc00" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-xl relative overflow-hidden"
                style={{ backgroundColor: `${social.color}20` }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <social.icon className="w-4 h-4 md:w-5 md:h-5 relative z-10" style={{ color: social.color }} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-4 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground text-xs">
            © 2025 <span className="font-semibold bg-gradient-to-r from-[#0077ff] via-[#00b894] to-[#ffcc00] bg-clip-text text-transparent">STEMBotica</span>. All Rights Reserved. Designed with <motion.span 
              className="inline-block text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >❤️</motion.span> by STEMBotica Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
}