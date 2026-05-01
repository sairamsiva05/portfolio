'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const videoLibrary = {
  'Promo Video': [
    { id: 'promo1', src: '/videos/promo video 1.mp4', label: 'Campaign Promo' },
    { id: 'promo2', src: '/videos/promo.mp4', label: 'Main Feature' },
  ],
  'Social Content': [
    { id: 'social1', src: '/videos/social content 1.mp4', label: 'Instagram Reel' },
    { id: 'social2', src: '/videos/social content 2.mp4', label: 'TikTok Edit' },
  ],
  'Podcast Edit': [
    { id: 'podcast1', src: '/videos/podcast edit.mp4', label: 'Podcast Highlight' }
  ]
};

type Category = keyof typeof videoLibrary;

export default function VideoSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Promo Video');
  const [activeVideo, setActiveVideo] = useState(videoLibrary['Promo Video'][0]);

  return (
    <section id="reel" className="relative py-32 px-6 lg:px-12 bg-[#050505] text-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:flex md:items-end justify-between gap-8"
        >
          <div>
            <h3 className="text-sm font-bold tracking-[0.3em] text-[#999] uppercase mb-4">Portfolio Reel</h3>
            <h2 className="text-6xl font-black tracking-tighter">Selected Works <br/> <span className="text-white/20">in Motion.</span></h2>
          </div>
          <p className="text-[#999] max-w-sm mt-6 md:mt-0 pb-2">
            Storytelling-driven content with real audience impact.
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full aspect-[16/9] lg:aspect-[21/9] bg-black rounded-3xl overflow-hidden relative shadow-2xl mb-12 border border-white/5"
        >
          <AnimatePresence mode="wait">
            <motion.video
              key={activeVideo.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={activeVideo.src} 
              autoPlay 
              loop 
              muted 
              playsInline 
              controls
              className="w-full h-full object-contain bg-black"
            />
          </AnimatePresence>
        </motion.div>

        {/* Categories / Sections below video */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {(Object.keys(videoLibrary) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveVideo(videoLibrary[cat][0]);
              }}
              className={`px-6 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
                : 'bg-transparent text-[#666] border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Available Videos for Selected Category */}
        <div className="bg-[#111] border border-white/5 p-6 rounded-3xl">
          <h4 className="text-xs font-bold tracking-[0.2em] text-[#666] uppercase mb-6">
            Available Videos in {activeCategory}
          </h4>
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {videoLibrary[activeCategory].map((video, i) => (
                <motion.div
                  layout
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => setActiveVideo(video)}
                  className={`relative aspect-video bg-black rounded-2xl overflow-hidden cursor-pointer group border-2 transition-all duration-300 ${
                    activeVideo.id === video.id ? 'border-[#f1c40f] shadow-[0_0_20px_rgba(241,196,15,0.15)]' : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`absolute inset-0 transition-colors duration-500 z-10 ${
                    activeVideo.id === video.id ? 'bg-black/0' : 'bg-black/60 group-hover:bg-black/20'
                  }`} />
                  
                  <video 
                    src={video.src}
                    muted 
                    playsInline
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onMouseEnter={(e) => {
                      if (activeVideo.id !== video.id) e.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      if (activeVideo.id !== video.id) {
                        e.currentTarget.pause(); 
                        e.currentTarget.currentTime = 0;
                      }
                    }}
                  />
                  
                  {/* Play Icon Overlay */}
                  {activeVideo.id !== video.id && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-80 group-hover:scale-110 transition-all duration-300">
                      <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Play fill="white" size={24} className="ml-1" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 z-30 flex justify-between items-center">
                    <span className={`text-[10px] font-bold tracking-widest uppercase backdrop-blur-md px-4 py-2 rounded-full border transition-colors ${
                      activeVideo.id === video.id ? 'bg-[#f1c40f] text-black border-transparent' : 'bg-black/80 border-white/10 text-white group-hover:border-white/30'
                    }`}>
                      {video.label}
                    </span>
                    {activeVideo.id === video.id && (
                      <span className="text-[10px] font-bold tracking-widest text-[#f1c40f] uppercase bg-black/80 px-3 py-1 rounded-full">
                        Playing
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
