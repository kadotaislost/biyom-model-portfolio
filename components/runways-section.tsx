"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const runways = [
  {
    title: "Envogue X",
    description:
      "Participated in the iconic Envogue X runway, showcasing my style and creativity on one of the most celebrated fashion platforms in Nepal.",
  },
  {
    title: "White Feather",
    description:
      "Participated the prestigious White Feather's Jewellery Runway Vol 1, where I experienced the elegance and luxury of walking in Nepal's finest jewellery collections in a dazzling fashion show.",
  },
  {
    title: "Nepal Pashmina International Expo",
    description:
      "Walked the runway at the prestigious Nepal Pashmina International Expo 2025, highlighting exquisite pashmina designs and supporting local artisans.",
  },
]

export default function RunwaysSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="runways" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Runways I've Walked</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {runways.map((runway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="runway-card"
            >
              <div className="flex flex-col items-center text-center">
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{runway.title}</h3>
                <p className="text-muted-foreground">{runway.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

