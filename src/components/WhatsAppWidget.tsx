import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "919520559669"; // Your WhatsApp number
  const defaultMessage = "Hi, I'm interested in STEMBotica programs. Can you help me?";

  const handleStartChat = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Popup Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src="https://harmless-tapir-303.convex.cloud/api/storage/75ea5806-3221-4733-ab4f-ef6141abefa7" 
                  alt="STEMBotica" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">STEMBotica</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <p className="text-white/90 text-sm">Online</p>
                </div>
              </div>
            </div>

            {/* Chat Message */}
            <div className="p-6 bg-[#ECE5DD] min-h-[200px] flex flex-col justify-end">
              <motion.div
                className="bg-white rounded-lg rounded-tl-none p-4 shadow-md max-w-[85%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm font-medium text-[#075E54] mb-1">STEMBotica</p>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Hi! 👋
                  <br />
                  How can I help you today?
                </p>
                <p className="text-xs text-gray-500 mt-2">Just now</p>
              </motion.div>
            </div>

            {/* Start Chat Button */}
            <div className="p-4 bg-white border-t border-gray-200">
              <motion.button
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartChat}
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </motion.button>
              <p className="text-center text-xs text-gray-500 mt-2">
                Powered by WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Ring Animation */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-[#25D366] opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </>
  );
}
