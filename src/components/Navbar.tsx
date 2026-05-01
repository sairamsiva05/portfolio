'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'FEATURED', href: '#featured' },
  { name: 'ARCHIVE', href: '#portfolio' },
  { name: 'ABOUT ME', href: '#about' },
  { name: 'CONTACT ME', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center bg-white/5 backdrop-blur-md"
    >
      <Link href="#home" className="text-xl font-black tracking-tighter uppercase group">
        SAIRAM<span className="text-yellow-500 group-hover:text-black transition-colors">SIVA.</span>
      </Link>
      <ul className="flex gap-12">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-[10px] font-black tracking-[0.3em] hover:text-yellow-500 transition-colors duration-300">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
