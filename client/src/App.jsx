import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import KhaaniCollectionSection from './components/KhaaniCollectionSection';
import KhaaniCollection3D from './components/KhaaniCollection3D';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const collectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        collectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: collectionRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#0D0B0A] text-white font-sans antialiased overflow-x-hidden selection:bg-[#A67C52] selection:text-white">
      {/* 1. Hero Section with Background Video */}
      <HeroSection />
      
      {/* 2. 3D KHAANI + Framed Brand Owner Section */}
      <div ref={collectionRef} className="w-full">
        <KhaaniCollectionSection>
          <div className="w-full h-full">
            <KhaaniCollection3D />
          </div>
        </KhaaniCollectionSection>
      </div>
    </main>
  );
}

export default App;
