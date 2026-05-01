'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech – Electronics and Communication Engineering',
    institution: 'University Graduate',
    year: 'Class of 2024',
    description: 'Specialized in electronic systems and communication protocols, providing a strong technical foundation for engineering-led design.'
  }
];

const internships = [
  {
    role: 'IoT Internship',
    company: 'Barola Technologies',
    duration: '2023',
    points: ['Focused on IoT and electronic systems development']
  },
  {
    role: 'Frontend Development Internship',
    company: 'IBM via Edunet Foundation',
    duration: '2024',
    points: ['Focused on modern web development practices and frontend technologies']
  }
];

export default function Education() {
  return (
    <section id="education" className="py-40 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute bottom-10 left-[-5%] text-[15vw] font-black text-black/[0.01] select-none pointer-events-none uppercase tracking-tighter">
        Learning
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-[#f1c40f] text-white rounded-2xl rotate-3 shadow-lg shadow-[#f1c40f]/20">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xs font-black tracking-[0.5em] text-black uppercase">Foundation</h3>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-16 uppercase">
               Edu<span className="text-[#f1c40f]">cation.</span>
            </h2>

            <div className="flex flex-col gap-12 relative pl-12 border-l border-black/[0.05]">
              {education.map((edu, i) => (
                <div key={i} className="group relative">
                  {/* Timeline Marker */}
                  <div className="absolute left-[-53px] top-2 p-2 bg-white border border-black/5 rounded-full group-hover:bg-[#f1c40f] group-hover:text-white transition-all duration-300">
                    <Award size={14} />
                  </div>
                  
                  <span className="text-[10px] font-black text-[#f1c40f] uppercase tracking-[0.3em] mb-2 block">{edu.year}</span>
                  <h4 className="text-2xl lg:text-3xl font-black leading-tight uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-bold text-black/40 uppercase tracking-widest mb-6">{edu.institution}</p>
                  <p className="text-xs font-medium text-[#888] leading-relaxed max-w-md italic">
                    &quot;{edu.description}&quot;
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Internships Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-black text-white rounded-2xl -rotate-3 shadow-lg shadow-black/10">
                <Calendar size={24} />
              </div>
              <h3 className="text-xs font-black tracking-[0.5em] text-black uppercase">Practical</h3>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-16 uppercase">
               Intern<span className="text-black/20">ships.</span>
            </h2>

            <div className="flex flex-col gap-16 relative pl-12 border-l border-black/[0.05]">
              {internships.map((intern, i) => (
                <div key={i} className="group relative">
                  {/* Timeline Marker */}
                  <div className="absolute left-[-53px] top-2 p-2 bg-white border border-black/5 rounded-full group-hover:border-[#f1c40f] transition-all duration-300">
                    <div className="w-2 h-2 bg-black/10 group-hover:bg-[#f1c40f] rounded-full transition-colors" />
                  </div>

                  <span className="text-[10px] font-black text-[#f1c40f] uppercase tracking-[0.3em] mb-2 block">{intern.duration}</span>
                  <h5 className="text-2xl font-black leading-none uppercase mb-2 group-hover:text-[#f1c40f] transition-colors">{intern.role}</h5>
                  <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-6">@ {intern.company}</p>
                  
                  <ul className="flex flex-col gap-4">
                    {intern.points.map((point, j) => (
                      <li key={j} className="flex gap-4 items-start group/item">
                        <div className="w-5 h-[1px] bg-[#f1c40f] mt-2 group-hover/item:w-8 transition-all" />
                        <p className="text-xs font-medium text-[#666] leading-relaxed uppercase tracking-wide">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
