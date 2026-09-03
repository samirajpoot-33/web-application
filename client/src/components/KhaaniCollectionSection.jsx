import React from 'react';
import { motion } from 'framer-motion';

// If inside src folder:
import ownerImg from './owner picture/owner.jpg';

const KhaaniCollectionSection = ({ children }) => {
  return (
    <section 
      id="collection-3d" 
      className="relative w-full min-h-screen bg-[#0D0B0A] flex items-center justify-center px-6 lg:px-16 py-16 overflow-hidden select-none"
    >
      {/* Background Ambient Glows & Silk Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/silk-texture.jpg" 
          alt="Luxury Silk Texture Backdrop"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(140,98,57,0.20)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(212,175,55,0.16)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#0D0B0A]" />
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: KHAANI + Subtitles docked directly underneath */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-6">
          
          {/* 1. KHAANI (3D Canvas Slot or Fallback Typography) */}
          <div className="w-full h-[260px] sm:h-[300px] md:h-[340px] flex justify-center lg:justify-start">
            {children ? (
              children
            ) : (
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#D4AF37] to-[#8C6239] drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] font-bold">
                KHAANI
              </h1>
            )}
          </div>

          {/* 2. SUBTITLES: Directly below KHAANI at the marked line */}
          <div className="mt-3 sm:mt-4 flex flex-col items-center lg:items-start w-full gap-2">
            
            {/* COLLECTION with accent lines */}
            <div className="flex items-center gap-4 text-base sm:text-lg md:text-xl font-light tracking-[0.55em] uppercase text-[#DFC085]">
              <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
              <span>COLLECTION</span>
              <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
            </div>

            {/* AUTUMN • WINTER • HAUTE COUTURE (Increased size & clear spacing) */}
            <p className="text-xs sm:text-sm md:text-base tracking-[0.38em] uppercase font-light text-[#E8C585]/90 pl-1">
              Autumn &nbsp;•&nbsp; Winter &nbsp;•&nbsp; Haute Couture
            </p>

          </div>
        </div>

        {/* RIGHT COLUMN: Brand Owner Framed Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          
          {/* Ornate Gold Outer Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative p-[10px] rounded-sm bg-gradient-to-br from-[#F0D78C] via-[#7B5324] to-[#D4AF37] 
                       shadow-[0_0_60px_rgba(212,175,55,0.22)] 
                       before:absolute before:inset-0 before:rounded-sm before:border-[3px] before:border-[#3D2813] before:pointer-events-none"
          >
            {/* Inner Dark Bevel */}
            <div className="relative p-[6px] bg-[#18130E] rounded-sm">
              <div className="p-[3px] bg-gradient-to-tr from-[#8C6239] via-[#FFEBB0] to-[#593916] rounded-sm">
                
                {/* Photo Canvas */}
                <div className="relative w-[250px] sm:w-[290px] md:w-[330px] aspect-[3/4] overflow-hidden bg-[#110D0A]">
                  <img
                    src={ownerImg}
                    alt="Khadija Khan - Brand Owner"
                    className="w-full h-full object-cover object-center contrast-[1.03]"
                    onError={(e) => {
                      e.currentTarget.src = "/owner.jpg";
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/30 pointer-events-none shadow-[inset_0_0_25px_rgba(0,0,0,0.55)]" />
                </div>

              </div>
            </div>
          </motion.div>

          {/* Owner Details */}
          <div className="mt-5 text-center">
            <p 
              className="text-2xl md:text-3xl text-[#E8C585] tracking-wide font-normal"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', cursive", fontStyle: "italic" }}
            >
              Brand Owner
            </p>

            <h3 className="mt-1 text-2xl md:text-3xl tracking-[0.22em] uppercase font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#EED59B] via-[#FFF6DD] to-[#B3874B] font-semibold">
              Khadija Khan
            </h3>
          </div>

        </div>

      </div>

      {/* Numerical Navigation Indicator (01, 02, 03) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 text-xs text-[#D8B478]/40 tracking-widest pointer-events-none">
        <span className="text-[#D8B478] font-bold">01</span>
        <div className="w-[1px] h-10 bg-[#D8B478]/30"></div>
        <span>02</span>
        <span>03</span>
      </div>
    </section>
  );
};

export default KhaaniCollectionSection;
