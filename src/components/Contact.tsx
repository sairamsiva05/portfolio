'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-12 bg-white border-t border-black/5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-sm font-bold tracking-[0.3em] text-[#999] uppercase mb-6">Connect</h3>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-none">
              Let&apos;s <span className="text-yellow-500">Work Together.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:sairamsiva05@gmail.com"
              className="flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full hover:bg-[#f1c40f] transition-all group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">Email Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sairamsiva-s-39bb62245"
              target="_blank"
              className="flex items-center gap-4 px-10 py-5 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-4 px-10 py-5 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all group"
            >
              <FileText size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">Download CV</span>
            </a>
          </div>

          <div className="mt-24 pt-12 border-t border-black/5 w-full flex flex-col md:flex-row justify-between items-center text-[10px] text-[#ccc] uppercase tracking-[0.5em] gap-8">
            <p>&copy; 2026 SAIRAMSIVA STUDIOS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/_it_is_what_itis__/" target="_blank" className="hover:text-black transition-colors">Instagram</a>
              <a href="https://github.com/sairamsiva05" target="_blank" className="hover:text-black transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
