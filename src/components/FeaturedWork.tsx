'use client';

import { motion } from 'framer-motion';


const featuredProjects = [
  {
    title: 'Tumbler Product Design',
    category: 'E-commerce',
    impact: 'Sold Out in 1 Week',
    image: '/images/wander-tumblers.png',
    size: 'large',
  },
  {
    title: 'S2C Brand Revamp',
    category: 'Branding',
    impact: 'Listing Optimization',
    image: '/images/zenith 2.jpg',
    size: 'medium',
  },
  {
    title: 'Viral Content Strategy',
    category: 'Content',
    impact: '1M+ Views',
    image: '/images/viral content strategy.png',
    size: 'medium',
  },
  {
    title: 'MS Bridge Web Portal',
    category: 'UI/UX',
    impact: 'UI Design',
    image: '/works/WEB/Template_Project/01_Hero/Screenshot 2026-04-20 135920.png',
    size: 'medium',
  }
];

export default function FeaturedWork() {
  return (
    <section id="featured" className="py-32 px-12 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-sm font-bold tracking-[0.3em] text-[#999] uppercase mb-4">Highlights</h3>
          <h2 className="text-6xl font-black tracking-tighter">Featured Work.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden bg-[#f8f8f8] rounded-2xl ${
                project.size === 'large' ? 'md:col-span-12 aspect-[21/9] min-h-[400px]' : 'md:col-span-4 aspect-square'
              }`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <span className="self-start inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full mb-auto drop-shadow-md">
                  {project.category}
                </span>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className={`font-black text-white ${project.size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl'} mb-2 drop-shadow-lg`}>
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <p className={`font-bold text-[#f1c40f] drop-shadow-lg uppercase tracking-wide ${project.size === 'large' ? 'text-lg' : 'text-sm'}`}>
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
