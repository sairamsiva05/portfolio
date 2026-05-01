'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { WorkGroup } from '@/utils/getWorks';

export default function PortfolioClient({ groupedWorks }: { groupedWorks: WorkGroup[] }) {
  const [lightbox, setLightbox] = useState<{ images: string[], index: number } | null>(null);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      setLightbox({
        ...lightbox,
        index: (lightbox.index + 1) % lightbox.images.length
      });
    }
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      setLightbox({
        ...lightbox,
        index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-40">
        {groupedWorks.map((group) => (
          <div key={group.category} className="flex flex-col gap-16">
            
            {/* Section Title */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-6"
            >
              <div className="w-16 h-[2px] bg-black"></div>
              <div>
                <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter">{group.category}</h3>
                <p className="text-sm font-bold tracking-widest text-[#999] uppercase mt-2">{group.title}</p>
              </div>
            </motion.div>

            {/* Masonry Grid Layout - No slide effects, no cropping */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {group.images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openLightbox(group.images, idx)}
                  className="break-inside-avoid w-full rounded-2xl overflow-hidden cursor-zoom-in relative group border border-black/5"
                >
                   <img 
                     src={img} 
                     alt={`${group.category} Project ${idx + 1}`} 
                     className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modern Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-xl flex justify-center items-center p-4 lg:p-12 cursor-default"
            onClick={() => setLightbox(null)}
          >
             {/* Close Button */}
             <button 
               onClick={() => setLightbox(null)} 
               className="absolute top-6 right-6 lg:top-12 lg:right-12 z-[210] p-4 bg-white shadow-xl hover:shadow-2xl rounded-full text-black hover:scale-110 transition-all border border-black/5"
             >
               <X size={24} />
             </button>

             {/* Navigation Arrows */}
             {lightbox.images.length > 1 && (
               <>
                 <button 
                   onClick={(e) => prevImg(e)} 
                   className="absolute left-4 lg:left-12 z-[210] p-4 bg-white shadow-xl hover:shadow-2xl rounded-full text-black hover:scale-110 transition-all border border-black/5 group"
                 >
                   <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                 </button>
                 <button 
                   onClick={(e) => nextImg(e)} 
                   className="absolute right-4 lg:right-12 z-[210] p-4 bg-white shadow-xl hover:shadow-2xl rounded-full text-black hover:scale-110 transition-all border border-black/5 group"
                 >
                   <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </>
             )}

             {/* Main Image Container */}
             <div className="relative max-w-[95vw] max-h-[90vh] w-full h-full flex items-center justify-center p-8 lg:p-0" onClick={(e) => e.stopPropagation()}>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={lightbox.index}
                    src={lightbox.images[lightbox.index]}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={(e) => nextImg(e)}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-zoom-out"
                    alt="Expanded View"
                  />
                </AnimatePresence>
                
                {/* Counter */}
                {lightbox.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-black/5 text-xs font-bold tracking-widest text-black">
                     {lightbox.index + 1} / {lightbox.images.length}
                  </div>
                )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
