import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, ExternalLink, Sparkles, Globe, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = ["Expertise", "Case Studies", "Contact"];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 flex flex-col selection:bg-neutral-100 selection:text-neutral-900 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12 py-6 ${
          scrolled ? "bg-neutral-950/80 backdrop-blur-xl py-4" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-white transition-colors">
              <span className="text-neutral-950 font-display font-black text-lg">S</span>
            </div>
            <span className="font-display font-bold tracking-widest text-sm uppercase hidden sm:block">
              Sagheer <span className="text-neutral-500">Abbas</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 hover:text-neutral-100 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neutral-100 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 bg-neutral-100 text-neutral-950 px-6 py-2.5 rounded-full font-display font-bold text-[10px] tracking-widest uppercase hover:bg-white transition-all transform active:scale-95"
          >
            Let's Talk
            <ArrowUpRight className="w-3 h-3" />
          </motion.button>

          <button 
            className="md:hidden text-neutral-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-neutral-950 flex flex-col items-center justify-center p-6"
          >
            <button 
              className="absolute top-8 right-8 text-neutral-400"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-5xl font-light hover:text-neutral-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-8 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-neutral-700" />
              <span className="font-display text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500">
                Premium WordPress Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] font-light tracking-tight mb-8"
            >
              Websites that <br />
              <span className="italic font-medium text-neutral-100">Elevate</span> your <br />
              <span className="text-neutral-100">Digital Identity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="max-w-xl text-neutral-400 text-lg md:text-xl font-light leading-relaxed mb-12"
            >
              I design and develop fast, conversion-driven WordPress websites that transform brands into market leaders. Crafting digital experiences where <span className="text-neutral-200">Luxury</span> meets <span className="text-neutral-200">Performance</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-6"
            >
              <button id="view-work" className="btn-premium btn-primary flex items-center gap-2 group">
                View My Work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button id="hire-me" className="btn-premium btn-secondary">
                Hire Me
              </button>
            </motion.div>
          </div>

          <div className="md:col-span-4 lg:col-span-5 relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="relative aspect-square"
            >
              {/* Abstract Visual Shape (CSS & Motion) */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-transparent rounded-[40px] rotate-6 border border-white/5 opacity-50" />
              <div className="absolute inset-0 bg-neutral-900 rounded-[40px] -rotate-3 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 via-transparent to-transparent" />
                
                {/* User Photo Placeholder - Replace 'photoUrl' with actual photo path */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full aspect-square border border-neutral-700/50 rounded-[32px] flex items-center justify-center p-4 bg-neutral-900/50 backdrop-blur-sm shadow-inner group">
                    <div className="w-full h-full relative overflow-hidden rounded-[24px] border border-neutral-100/10">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Sagheer Abbas"
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 bg-glass p-6 rounded-2xl flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[9px] font-bold tracking-widest uppercase text-neutral-500">Live Project Status</span>
                    <span className="flex items-center gap-1.5 text-[8px] font-bold tracking-widest uppercase text-green-500">
                      <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                      In Performance Mode
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-neutral-800" />
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                       {[Globe, Shield, Sparkles].map((Icon, i) => (
                         <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center">
                           <Icon className="w-3.5 h-3.5 text-neutral-400" />
                         </div>
                       ))}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-medium text-neutral-300">Conversion Focused</span>
                      <span className="text-[8px] text-neutral-500 uppercase tracking-tighter">S Grade Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer / Social Mini */}
      <footer className="relative z-10 px-6 lg:px-12 py-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-8">
             {["LinkedIn", "Behance", "Dribbble"].map((social) => (
               <a key={social} href="#" className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-100 transition-colors">
                 {social}
               </a>
             ))}
           </div>
           
           <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500" />
             <p className="font-display text-[10px] font-bold tracking-widest uppercase text-neutral-500">
               Available for <span className="text-neutral-100">High-Impact</span> Projects
             </p>
           </div>
        </div>
      </footer>
    </div>
  );
}

