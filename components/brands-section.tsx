"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "House of Fashion", logo: "/photos/hof1.png" },
  { name: "UFO", logo: "/photos/ufo.png" },
  { name: "Pari", logo: "/photos/pari.jpg" },
  { name: "Aashma", logo: "/photos/aashma.png" },
  { name: "Vitalic", logo: "/photos/vitalic.jpg" },
  { name: "Yolo", logo: "/photos/yolologo.png" },
  { name: "Instyle Nepal", logo: "/photos/instylenepal.jpg" },
  { name: "Grit", logo: "/photos/grit.jpg" },
  { name: "Devtul", logo: "/photos/devtul.jpg" },
  { name: "New Mew", logo: "/photos/newmew.jpg" },
  { name: "Vanity", logo: "/photos/vanity.jpg" },
  { name: "White Feather", logo: "/photos/whitefeather.png" },
  { name: "Mheecha", logo: "/photos/mheecha.png" },
  { name: "Bluaway", logo: "/photos/bluaway.jpg" },
];

export default function BrandsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="brands" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Brands I've Worked With
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-16 w-full mb-3 flex items-center justify-center">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={120}
                    height={80}
                    className="object-contain max-h-16 transition-all duration-300 filter dark:brightness-110 dark:contrast-110"
                  />
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
