'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery',
    description: 'Deep diving into the project goals, audience, and market landscape. I research and strategize the optimal path forward.',
    color: '#f1c40f'
  },
  {
    title: 'Visual Identity',
    description: 'Crafting the aesthetic soul of the project. This is where layouts, colors, and typography meet the strategy.',
    color: '#e74c3c'
  },
  {
    title: 'Development',
    description: 'Transforming designs into performant, clean, and scalable code using modern tech stacks like Next.js and Tailwind.',
    color: '#3498db'
  },
  {
    title: 'Refinement',
    description: 'Polishing every detail, optimizing performance, and ensuring a bug-free launch for a perfect user experience.',
    color: '#2ecc71'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-12 bg-black text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:max-w-xl"
          >
            <h3 className="text-sm font-bold tracking-[0.3em] text-[#666] uppercase mb-6">Workflow</h3>
            <h2 className="text-6xl font-black tracking-tighter leading-none">
              A Structured <br /><span className="text-white/20">Process.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#999] max-w-sm mb-2"
          >
            My methodology ensures that every project is not just a visual success, but a strategic achievement that meets business objectives. My process ensures every design decision aligns with business goals and user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-white/10 hidden lg:block" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group lg:pt-16"
            >
              <div 
                className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center mb-12 group-hover:scale-125 transition-transform duration-500 bg-black relative z-10"
                style={{ borderColor: step.color }}
              >
                <div className="w-2 h-2 rounded-full bg-white" style={{ backgroundColor: step.color }} />
              </div>
              
              <h4 className="text-3xl font-black mb-6 group-hover:text-[#f1c40f] transition-colors">
                {step.title}
              </h4>
              <p className="text-[#666] leading-relaxed group-hover:text-white/70 transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
