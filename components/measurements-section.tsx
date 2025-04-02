"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Ruler, Weight, Shirt, Armchair, PenIcon as Pants, Footprints, Brush, Eye } from "lucide-react"

const measurements = [
  { icon: <Ruler className="h-5 w-5" />, label: "Height", value: "6'1\" (186 cm)" },
  { icon: <Weight className="h-5 w-5" />, label: "Body Weight", value: "80 kg (176 lbs)" },
  { icon: <Shirt className="h-5 w-5" />, label: "Chest", value: '42" (108.22 cm)' },
  { icon: <Armchair className="h-5 w-5" />, label: "Arm", value: '16" (40.64 cm)' },
  { icon: <Pants className="h-5 w-5" />, label: "Waist", value: '30" (76 cm)' },
  { icon: <Footprints className="h-5 w-5" />, label: "Shoe Size", value: "42 (EU)" },
  { icon: <Brush className="h-5 w-5" />, label: "Hair Color", value: "Black Brown" },
  { icon: <Eye className="h-5 w-5" />, label: "Eye Color", value: "Black Brown" },
]

export default function MeasurementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="measurements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Measurements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {measurements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-4">{item.icon}</div>
              <h3 className="font-medium mb-1">{item.label}</h3>
              <p className="text-muted-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

