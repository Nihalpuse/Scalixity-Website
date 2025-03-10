"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: "Healthcare & Diagnostics", icon: "/icons/healthcare.svg" },
  { name: "Finance & Banking", icon: "/icons/finance.svg" },
  { name: "Retail & E-commerce", icon: "/icons/ecommerce.svg" },
  { name: "Manufacturing & Automation", icon: "/icons/manufacturing.svg" },
  { name: "Education & E-Learning", icon: "/icons/education.svg" },
  { name: "Logistics & Supply Chain", icon: "/icons/logistics.svg" },
  { name: "Media & Entertainment", icon: "/icons/media.svg" },
  { name: "Real Estate & Property Tech", icon: "/icons/real-estate.svg" }
];

export function Industries() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">INDUSTRIES</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            AI PoC Development for Diverse Industries
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empower your industry with AI-driven Proof of Concepts — transforming ideas into scalable, innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center bg-[#F3F1EB] p-6 rounded-lg border border-black"
            >
              <div className="bg-white p-6 rounded-full mb-4 border border-black">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-black text-center">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
