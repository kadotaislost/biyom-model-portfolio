"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Award, Medal } from "lucide-react"

const achievements = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Envogue Season 10 Runner-Up",
    description:
      "Proudly secured runner-up position in the prestigious Envogue Season 10, showcasing discipline, style, and passion on the runway.",
  },
  {
    icon: <Medal className="h-10 w-10 text-primary" />,
    title: "Envogue Season 10 Most Talented Title",
    description:
      'Awarded the "Most Talented" title, recognized for my unique flair, creativity, and mastery of the craft during Envogue Season 10.',
  },
]

export default function AchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="achievement-card"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

