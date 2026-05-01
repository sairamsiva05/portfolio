'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-sm font-bold tracking-[0.3em] text-[#999] uppercase mb-8">About Me</h3>
              <div className="max-w-4xl">
                <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-8 text-black">
                  I come from an engineering background, but my strength lies in combining design, technology, and storytelling to create impactful digital experiences.
                </p>
                <p className="text-lg text-[#666] leading-relaxed">
                  I’ve worked on e-commerce brands across UAE, Saudi Arabia, and India, focusing on visuals that drive engagement and sales.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
