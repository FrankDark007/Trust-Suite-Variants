import React from 'react';
import TrustBadgeBar from './components/TrustBadgeBar';
import TestimonialSlider from './components/TestimonialSlider';
import TrustCards from './components/TrustCards';
import CertificationCloud from './components/CertificationCloud';
import SplitProofSection from './components/SplitProofSection';

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12 border-t border-slate-200 first:border-0">
    <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
    <p className="text-slate-500 mt-2">{description}</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* 1. Badge Bar (Often used at the very top or bottom of nav) */}
      <div className="bg-white pb-4">
        <SectionHeader 
            title="Variant 1: Site-wide Badge Bar" 
            description="Compact, scrolling bar ideal for headers or just below the hero section." 
        />
        <TrustBadgeBar />
      </div>

      {/* 2. Testimonial Slider (Replaces Stats Grid) */}
      <SectionHeader 
          title="Variant 2: Client Stories Slider" 
          description="Interactive carousel highlighting detailed customer experiences and specific service tags." 
      />
      <TestimonialSlider />

      {/* 3. Trust Cards */}
      <SectionHeader 
          title="Variant 3: Detailed Trust Cards" 
          description="Grid layout with icons and descriptive text for deeper context." 
      />
      <TrustCards />

      {/* 4. Certification Cloud */}
      <SectionHeader 
          title="Variant 4: Logo Cloud" 
          description="Clean, minimal row of certifications and partner badges." 
      />
      <CertificationCloud />

      {/* 5. Split Proof Section */}
      <SectionHeader 
          title="Variant 5: Split Proof & Review" 
          description="Combines a high-impact statistic with a powerful customer testimonial." 
      />
      <SplitProofSection />

      <footer className="bg-slate-900 text-slate-400 py-12 text-center mt-20">
        <p>&copy; 2024 Restoration Company Demo. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;