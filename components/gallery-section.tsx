"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const photos = [
  "/photos/bom.jpg",
  "/photos/bom1.jpg",
  "/photos/bom11.jpg",
  "/photos/biyom101.png",
  "/photos/bom10.jpg",
  "/photos/biyom102.jpg",
  "/photos/biyom3.jpg",
  "/photos/biyom2.jpg",
  "/photos/bom8.jpg",
  "/photos/bom5.jpg",
  "/photos/bom7.jpg",
  "/photos/bom6.jpg",
  "/photos/biyom5.jpg",
  "/photos/bom2.jpg",
  "/photos/bom3.jpg",
  "/photos/biyom106.jpg",
  "/photos/biyom103.jpg",
  "/photos/biyom1001.jpg",
  "/photos/biyom104.jpg",
  "/photos/bom12.jpg",
];

export default function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Photo Gallery</h2>
        </motion.div>

        <div className="gallery-grid">
          {photos.map((photo, index) => {
            console.log(photo);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(photo)}
              >
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged photo"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
