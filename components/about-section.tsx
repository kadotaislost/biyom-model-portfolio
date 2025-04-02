"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to my portfolio! I am a disciplined, confident, and passionate aspiring model certified by The House
            of Fashion Nepal. With a strong presence in front of the camera, I understand the significance of
            collaboration and the responsibilities that come with being a model.
          </p>
          <p className="text-lg leading-relaxed">
            I am committed to embodying the qualities of a professional model, bringing a blend of personality,
            attitude, and character to every project I undertake.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

