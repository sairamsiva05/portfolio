'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const circleRotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <section id="home" ref={containerRef} className="relative min-height-[100vh] w-full flex flex-col justify-center px-12 pt-24 overflow-hidden bg-[#f8f8f8]">

      {/* Social Sidebar */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20">
        {[Facebook, Instagram, Twitter].map((Icon, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="p-3 bg-white/50 backdrop-blur-sm rounded-full border border-black/5 hover:bg-black hover:text-white transition-all duration-300"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>

      <div className="container mx-auto relative z-10 grid grid-cols-12 gap-8 items-center">

        {/* Left Column: Text */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="w-[1px] h-24 bg-black/20 mb-8 hidden lg:block" />
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-black leading-[0.9] mb-4 uppercase">
              SAIRAM<span className="text-yellow-500">SIVA.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-extrabold max-w-sm leading-tight tracking-tighter text-black/40">
              I am a Creative Designer, <br /> Visual Story Teller & <br /> AI Design Specialist.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg tracking-wide text-[#666] max-w-[450px] leading-relaxed font-medium"
          >
            I design visuals and digital experiences that don’t just look good — they perform in real-world business environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a href="#featured" className="px-10 py-5 bg-black text-white rounded-full hover:bg-yellow-500 btn-premium shadow-xl">
              View My Work
            </a>
            <a href="/resume.pdf" download className="px-10 py-5 border border-black/10 text-black rounded-full hover:bg-black hover:text-white btn-premium">
              Download CV
            </a>
            <a href="#contact" className="px-10 py-5 border border-black/10 text-black rounded-full hover:bg-black hover:text-white btn-premium">
              Let&apos;s Connect
            </a>
          </motion.div>
        </div>

        {/* Center/Right Column: Image & Decorative elements */}
        <div className="col-span-12 lg:col-span-7 relative flex justify-center lg:justify-end items-center min-h-[500px] lg:min-h-[700px]">

          <div className="relative w-[450px] md:w-[650px] aspect-square">
            {/* Circular Accent Background */}
            <motion.div
              style={{ rotate: circleRotate, y: y2 }}
              className="absolute inset-0 circular-accent bg-[#f1c40f]"
            />

            {/* Person Image Container - Clips the image to the circle */}
            <motion.div
              style={{ scale: scale }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              className="absolute inset-0 overflow-hidden rounded-full z-10 flex items-end justify-center"
            >
              <motion.img
                src="/images/hero 1.png"
                alt="Sairamsiva Hero"
                style={{ 
                  filter: useTransform(scrollY, [0, 400], ["grayscale(0%) brightness(1.1) contrast(1.1)", "grayscale(100%) brightness(1.1) contrast(1.1)"]) 
                }}
                className="w-[110%] h-[110%] object-contain object-bottom"
              />
            </motion.div>

            {/* Large Number "01" */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute -right-20 -top-20 text-[18vw] font-black text-black/5 leading-none select-none z-0"
            >
              01
            </motion.div>
          </div>

        </div>
      </div>

      {/* Hero Bottom Navigation Arrows (Decorative) */}
      <div className="absolute bottom-12 right-12 flex gap-4">
        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black transition-all group">
          <span className="text-black group-hover:text-white transition-colors">←</span>
        </div>
        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black transition-all group">
          <span className="text-black group-hover:text-white transition-colors">→</span>
        </div>
      </div>
    </section>
  );
}
