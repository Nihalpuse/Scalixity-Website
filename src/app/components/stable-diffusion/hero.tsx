"use client";
import { motion } from "framer-motion";


export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ backgroundColor: "#F3F1EB" }} 
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#000000" }}>
            Stable Diffusion Developers
          </h1>
          <p className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: "#000000" }}>
            Leverage the power of Stable Diffusion for high-quality AI-generated visuals, custom fine-tuning, and seamless integration into your projects. Our developers specialize in crafting AI-powered design solutions that enhance automation, efficiency, and creativity across industries.
          </p>
          
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
    </section>
  )
}

export default Hero;

