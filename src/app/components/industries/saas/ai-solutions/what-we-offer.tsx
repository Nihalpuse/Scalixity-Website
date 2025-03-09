"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "AI-Powered Data Insights",
    description: "Transform raw data into actionable insights using advanced AI algorithms, helping businesses make data-driven decisions with confidence."
  },
  {
    title: "Predictive Analytics & Forecasting",
    description: "Leverage AI models to predict trends, customer behavior, and market shifts — allowing proactive strategies and optimized planning."
  },
  {
    title: "Intelligent Automation",
    description: "Streamline repetitive tasks by integrating AI-powered automation, boosting operational efficiency and reducing manual workload."
  },
  {
    title: "AI Model Development & Deployment",
    description: "Design, train, and deploy custom AI models tailored to your SaaS platform, ensuring real-time processing and seamless cloud integration."
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Implement AI-driven NLP solutions for chatbots, sentiment analysis, and voice recognition, enhancing user interactions and support."
  },
  {
    title: "Real-Time Monitoring & Optimization",
    description: "Continuously monitor AI performance with dynamic dashboards and iteratively optimize models for maximum impact."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            AI SaaS Solutions Tailored for Your Business
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Unlock the full potential of AI with our cutting-edge SaaS solutions — designed to drive growth, enhance automation, and deliver real-time insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-white/20 hover:border-white/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-[#5B1DAF] mb-4">{service.title}</h3>
              <p className="text-[#5B1DAF]/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
