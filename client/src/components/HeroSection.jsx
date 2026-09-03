import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User, ShoppingBag, ArrowRight, Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  // Animation variants for Framer Motion
  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.18, 
        duration: 0.9, 
        ease: [0.25, 1, 0.5, 1] 
      },
    }),
  };

  const navLinks = ['Home', 'Collection', 'About', 'Lookbook', 'Contact'];

  return (
    <section className="relative w-full min-h-screen bg-[#C2B3A3] overflow-hidden flex flex-col justify-between select-none">
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none scale-105 transition-transform duration-1000"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/hero video/gemini_generated_video_5b80ee48.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle warm luxury lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/35 z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#1A1A1A]/80 z-1 pointer-events-none" />

      {/* 2. Header / Top Navigation */}
      <header className="relative z-20 flex items-center justify-between w-full px-8 md:px-16 lg:px-20 py-7 text-[#F5F0EB]">
        {/* Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="cursor-pointer"
        >
          <a href="#" className="font-cinzel text-2xl md:text-3xl tracking-[0.35em] uppercase font-semibold hover:text-[#D4AF37] transition-colors duration-300">
            KHAANI
          </a>
        </motion.div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.2em] uppercase font-light">
          {navLinks.map((link) => {
            const isActive = activeNav === link;
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(link);
                }}
                className={`relative py-1 transition-colors duration-300 ${
                  isActive ? 'text-white font-medium' : 'text-[#E0D7CD]/90 hover:text-white'
                }`}
              >
                {link}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F5F0EB]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-6 text-[#F5F0EB]">
          <button 
            aria-label="Search" 
            className="hover:text-[#D4AF37] transition-colors duration-250 cursor-pointer p-1"
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button 
            aria-label="User Profile" 
            className="hover:text-[#D4AF37] transition-colors duration-250 cursor-pointer p-1"
          >
            <User size={19} strokeWidth={1.5} />
          </button>
          <button 
            aria-label="Shopping Bag" 
            className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors duration-250 cursor-pointer p-1 group"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            <span className="text-xs font-mono opacity-85 group-hover:opacity-100">(0)</span>
          </button>

          {/* Mobile hamburger button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-2 p-1 text-[#F5F0EB]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden relative z-30 bg-[#1A1A1A]/95 backdrop-blur-md px-8 py-6 border-b border-white/10"
        >
          <nav className="flex flex-col gap-4 text-sm tracking-[0.2em] uppercase">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setActiveNav(link);
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-[#E0D7CD] hover:text-[#D4AF37]"
              >
                {link}
              </a>
            ))}
          </nav>
        </motion.div>
      )}

      {/* 3. Hero Content Area */}
      <div className="relative z-10 flex-grow grid grid-cols-1 lg:grid-cols-12 items-center px-8 md:px-16 lg:px-20 py-12">
        {/* Left Side (Space for Model / Video focus) */}
        <div className="hidden lg:block lg:col-span-6 xl:col-span-7"></div>

        {/* Right Side - Luxury Editorial Text Block */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left max-w-lg lg:ml-auto">
          {/* Tagline */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-[#E5CEAA] font-semibold mb-3 flex items-center gap-2"
          >
            <span className="w-6 h-px bg-[#E5CEAA]/60"></span>
            TIMELESS ELEGANCE
          </motion.p>
          
          {/* Main Heading */}
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] font-normal text-white drop-shadow-sm mb-5"
          >
            Redefine <br />
            <span className="italic font-light text-[#F3EDE2] font-editorial">your style.</span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-sm md:text-[15px] leading-relaxed text-[#ECE6DE]/90 font-light max-w-sm mb-8"
          >
            Modern silhouettes, luxurious fabrics, and uncompromising quality crafted for the discerning individual.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <a
              href="#collection-3d"
              className="group inline-flex items-center gap-4 px-8 py-3.5 border border-[#F5F0EB]/60 hover:border-white text-xs md:text-sm uppercase tracking-[0.25em] text-[#F5F0EB] bg-black/15 hover:bg-[#F5F0EB] hover:text-[#1A1A1A] backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 4. Right side pagination / section indicator (01, line, 02, 03) */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-5 text-[11px] tracking-widest text-[#F5F0EB]/75 font-mono">
        <span className="text-white font-semibold">01</span>
        <div className="w-px h-12 bg-white/40"></div>
        <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">02</span>
        <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">03</span>
      </div>

      {/* Bottom subtle gradient fade into next section */}
      <div className="relative z-10 w-full h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
