"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Instagram, Mail } from "lucide-react"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-xl mx-auto">
          <motion.a
            href="https://www.instagram.com/biyomrana/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-link w-full"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </motion.a>

          <motion.a
            href="mailto:biyomrana@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-link w-full"
          >
            <Mail className="h-5 w-5" />
            <span>biyomrana@gmail.com</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

