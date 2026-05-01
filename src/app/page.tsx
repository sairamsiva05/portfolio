
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import VideoSection from '@/components/VideoSection';
import Contact from '@/components/Contact';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f8f8f8] selection:bg-black selection:text-white overflow-x-hidden">
      <CustomCursor />
      <SmoothScroll />
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <FeaturedWork />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <VideoSection />
        <Experience />
        <Education />
        <Contact />
      </div>

      <footer className="py-20 px-12 bg-white border-t border-black/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter uppercase">
            SAIRAM<span className="text-yellow-500">SIVA.</span>
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em] text-[#999] uppercase">
            © 2025 ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </main>
  );
}
