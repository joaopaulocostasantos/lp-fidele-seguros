"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <div className="rounded-2xl border border-[#E4E7F0] bg-white p-3 shadow-2xl shadow-black/15">
            <Button
              variant="premium"
              size="lg"
              className="w-full"
              onClick={scrollToForm}
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar consultoria gratuita
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
