'use client';

import { motion } from 'framer-motion';
import { Layout, PenTool, Monitor, Brush, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const skills = [
  {
    title: 'Visual & Graphic Design',
    description: 'I design creative visuals for marketing campaigns, digital platforms, and brand communication. I build visual identities that stand out.',
    icon: Brush,
    position: 'top-[-20%] left-[0%]',
    arrow: 'rotate-[135deg] bottom-[-20px] right-[-20px]'
  },
  {
    title: 'UI / UX Design',
    description: 'I create intuitive and visually engaging user interfaces and experience mockups. I focus on user-centered design principles.',
    icon: Layout,
    position: 'top-[30%] left-[-30%]',
    arrow: 'rotate-[180deg] right-[-40px]'
  },
  {
    title: 'Web Design',
    description: 'I design modern and responsive websites with clean layouts and strong visual hierarchy. I ensure high-performance and aesthetic beauty.',
    icon: Monitor,
    position: 'bottom-[10%] left-[0%]',
    arrow: 'rotate-[225deg] top-[-20px] right-[-20px]'
  },
  {
    title: 'Creative Storytelling',
    description: 'I develop creative concepts, visual narratives, and design-driven storytelling. I bring messages to life through motion and imagery.',
    icon: PenTool,
    position: 'top-[10%] right-[-10%]',
    arrow: 'rotate-[45deg] bottom-[-20px] left-[-20px]'
  }
];

export default function Services() {
  const leftSkills = skills.slice(0, 2);
  const rightSkills = skills.slice(2, 4);

  return (
    <section id="services" className="py-20 lg:py-40 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 lg:mb-32">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold tracking-[0.3em] text-[#999] uppercase mb-6"
          >
            My Expertise
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter leading-none"
          >
            What I <span className="text-yellow-500">Do.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          {/* Left Column Skills */}
          <div className="lg:col-span-4 flex flex-col gap-12 lg:gap-24 order-2 lg:order-1">
            {leftSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="glass p-8 rounded-3xl hover:bg-black hover:text-white transition-all duration-500 cursor-pointer shadow-2xl shadow-black/5 hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-yellow-500 rounded-2xl group-hover:bg-white group-hover:text-black transition-colors">
                      <skill.icon size={24} />
                    </div>
                    <h4 className="font-black uppercase tracking-tight text-sm">{skill.title}</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-[#666] group-hover:text-white/70 transition-colors">
                    {skill.description}
                  </p>

                  {/* Arrow pointing to the center */}
                  <div className={`absolute ${i === 0 ? 'rotate-[135deg] bottom-[-30px] right-[-30px]' : 'rotate-[225deg] top-[-30px] right-[-30px]'} text-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:block`}>
                     <ArrowRight size={40} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Image Placeholder */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 w-64 lg:w-80 h-[400px] lg:h-[550px] bg-black/5 rounded-[80px] lg:rounded-[100px] overflow-hidden group border border-black/5"
            >
              <Image 
                src="/images/what i do section.jpeg"
                alt="Sairamsiva"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>

          {/* Right Column Skills */}
          <div className="lg:col-span-4 flex flex-col gap-12 lg:gap-24 order-3">
            {rightSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.1 }}
                className="relative group"
              >
                <div className="glass p-8 rounded-3xl hover:bg-black hover:text-white transition-all duration-500 cursor-pointer shadow-2xl shadow-black/5 hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-yellow-500 rounded-2xl group-hover:bg-white group-hover:text-black transition-colors">
                      <skill.icon size={24} />
                    </div>
                    <h4 className="font-black uppercase tracking-tight text-sm">{skill.title}</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-[#666] group-hover:text-white/70 transition-colors">
                    {skill.description}
                  </p>

                  {/* Arrow pointing to the center */}
                  <div className={`absolute ${i === 0 ? 'rotate-[45deg] bottom-[-30px] left-[-30px]' : 'rotate-[315deg] top-[-30px] left-[-30px]'} text-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:block`}>
                     <ArrowRight size={40} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
