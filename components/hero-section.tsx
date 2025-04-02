"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/photos/biyom101.png')",
          filter: "brightness(0.5)",
        }}
      />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Biyom Jung Rana
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Professional Model
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <a href="#about" className="text-white">
          <ArrowDown className="h-8 w-8" />
        </a>
      </motion.div>
    </section>
  );
}
