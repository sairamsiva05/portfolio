import { getGroupedWorks } from '@/utils/getWorks';
import PortfolioClient from './PortfolioClient';

export default function Portfolio() {
  const groupedWorks = getGroupedWorks();

  return (
    <section id="portfolio" className="py-40 px-6 lg:px-12 bg-white relative">
      <div className="container mx-auto">
        
        {/* Gallery Header */}
        <div className="mb-32">
          <div className="opacity-100 transform-none">
            <h3 className="text-sm font-bold tracking-[0.3em] text-[#999] uppercase mb-4">Archive</h3>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter">My <span className="text-black/20">Works.</span></h2>
          </div>
        </div>

        {/* Pass fetched data to the Client Component */}
        <PortfolioClient groupedWorks={groupedWorks} />
      </div>
    </section>
  );
}
