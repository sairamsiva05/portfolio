'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Video, Globe } from 'lucide-react';

const professional = [
  {
    role: 'Graphic Designer & Business Operations Analyst',
    company: 'Zenarise',
    duration: 'May 2025 – Present',
    status: 'current',
    points: [
      'Led visual revamp of an existing brand by establishing consistent design standards',
      'Designed conversion-focused product visuals for e-commerce platforms',
      'Contributed to successful product launches and improved engagement',
      'Created UI mockups and frontend layouts for digital products'
    ]
  },
  {
    role: 'Social Media Analyst & Creative Content Writer',
    company: 'Enu Dot Com – Travel & Tours Company',
    duration: 'May 2024 – July 2025',
    status: 'previous',
    points: [
      'I manage social media engagement and analytics',
      'I create creative posts and audience-focused content',
      'I develop captions and visual communication strategies',
      'I help improve audience engagement and client conversion'
    ]
  }
];

const freelance = [
  {
    role: 'Freelance Graphic Designer',
    duration: '2023 – March 2025',
    description: 'I worked with clients and university departments creating posters, pamphlet designs, event creatives, department promotional videos, and marketing visuals.'
  }
];

const media = [
  {
    title: 'University Media Team Member',
    description: 'I contributed to multiple short films and creative media projects. I worked as Assistant Director in independent short film productions. I collaborated with filmmakers and media professionals, gaining experience in visual storytelling, creative direction, and production workflows.'
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-40 px-6 lg:px-12 bg-[#f8f8f8] relative overflow-hidden" ref={containerRef}>
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-[-10%] text-[20vw] font-black text-black/[0.02] select-none pointer-events-none uppercase tracking-tighter">
        Work
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-bold tracking-[0.4em] text-[#999] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#f1c40f]"></span>
              Professional History
            </h3>
            <h2 className="text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              EXPERI<span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#f1c40f]">ENCE.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xs"
          >
            <p className="text-sm font-medium text-[#666] leading-relaxed uppercase tracking-wider">
              A chronological journey through my professional growth and creative evolution.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 relative">
            
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/5">
              <motion.div 
                style={{ scaleY }}
                className="absolute top-0 left-0 right-0 origin-top bg-[#f1c40f] w-full"
              />
            </div>

            {/* Professional Experience Section */}
            <div className="flex flex-col gap-24 relative">
              <div className="mb-8 flex items-center gap-4 ml-8">
                <div className="p-3 bg-black text-white rounded-full">
                  <Briefcase size={16} />
                </div>
                <h4 className="text-sm font-black tracking-[0.5em] text-black uppercase">Professional</h4>
              </div>

              {professional.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative pl-12 lg:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-[-5.5px] top-0 w-3 h-3 rounded-full border-2 border-[#f1c40f] bg-white z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#f1c40f]`}>
                    {exp.status === 'current' && (
                      <div className="absolute inset-[-4px] border border-[#f1c40f] rounded-full animate-ping opacity-50" />
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-black text-[#f1c40f] uppercase tracking-[0.3em] mb-2">{exp.duration}</span>
                    <h5 className="text-3xl lg:text-4xl font-black leading-[0.9] uppercase tracking-tighter group-hover:text-[#f1c40f] transition-colors duration-300">
                      {exp.role}
                    </h5>
                    <p className="text-sm font-bold text-black/40 uppercase tracking-widest mt-2 mb-8">
                      @ {exp.company}
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {exp.points.map((point, j) => (
                        <div key={j} className="p-4 bg-white/50 border border-black/[0.03] rounded-xl hover:bg-white hover:shadow-xl hover:shadow-black/[0.02] transition-all duration-300">
                          <p className="text-sm md:text-base font-medium text-[#666] leading-relaxed italic">
                             &quot;{point}&quot;
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Freelance & Film Section */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 ml-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-8 bg-black/[0.02] border border-black/[0.03] rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-black/[0.03] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-[#f1c40f]" size={20} />
                  <h4 className="text-sm font-black tracking-[0.4em] text-black uppercase">Freelance</h4>
                </div>
                {freelance.map((f, i) => (
                  <div key={i}>
                    <span className="text-sm font-bold text-[#f1c40f] uppercase tracking-widest">{f.duration}</span>
                    <h5 className="text-xl font-black mt-2 leading-tight uppercase tracking-tight">{f.role}</h5>
                    <p className="text-[#888] text-sm md:text-base font-semibold mt-4 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-8 bg-black/[0.02] border border-black/[0.03] rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-black/[0.03] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Video className="text-[#f1c40f]" size={20} />
                  <h4 className="text-sm font-black tracking-[0.4em] text-black uppercase">Media & Film</h4>
                </div>
                {media.map((m, i) => (
                  <div key={i}>
                    <h5 className="text-xl font-black leading-tight uppercase tracking-tight">{m.title}</h5>
                    <p className="text-[#888] text-sm md:text-base font-semibold mt-4 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-40 self-start">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-10 glass rounded-[2.5rem] border border-white relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Briefcase size={80} />
                </div>
                
                <p className="text-xl font-black uppercase leading-tight tracking-tight mb-8">
                  &quot;I combine technology and storytelling to build <span className="text-[#f1c40f]">visually engaging</span> experiences.&quot;
                </p>
                <div className="w-16 h-1 bg-[#f1c40f] rounded-full mb-8 group-hover:w-full transition-all duration-700" />
                
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center py-3 border-b border-black/5">
                    <span className="text-sm font-black uppercase text-black/40">Status</span>
                    <span className="text-sm font-bold uppercase text-green-500 flex items-center gap-2">
                       <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                       Open for Gigs
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-black uppercase text-black/40">Total Roles</span>
                    <span className="text-sm font-bold uppercase">5+ Projects</span>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
