"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Venue() {
  const VENUE_NAME = "Sheraton Grand Bengaluru Whitefield Hotel & Convention Center";
  const MAPS_LINK = "https://maps.app.goo.gl/XK2kZ3Zt2TUa4KUi6";
  const OFFICIAL_WEBSITE = "https://www.marriott.com/en-us/hotels/blrsw-sheraton-grand-bengaluru-whitefield-hotel-and-convention-center/overview/";
  const QR_CODE_API = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(MAPS_LINK)}`;

  return (
    <main className="min-h-screen bg-surface selection:bg-secondary/30">
      <Navbar />

      <div className="pt-32 pb-24">
        {/* Editorial Header */}
        <header className="px-8 md:px-20 mb-20 md:mb-32">
          <div className="max-w-5xl">
            <span className="font-label text-secondary tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700 text-primary">
              The Venue
            </span>
            <h1 className="font-headline text-5xl md:text-[7rem] text-primary leading-[1] tracking-tighter mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Sheraton Grand <br />
              <span className="italic text-secondary">Bengaluru Whitefield</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              A Five-star sanctuary of luxury and heritage, where modern elegance meets timeless sophistication in the heart of Bangalore's IT hub.
            </p>
          </div>
        </header>

        {/* Hero Image Section */}
        <section className="px-6 md:px-20 mb-24 md:mb-40">
           <div className="relative aspect-video overflow-hidden rounded-sm group animate-in zoom-in duration-1000">
              <Image 
                src="/assets/sheraton01.avif" 
                alt="Sheraton Grand Exterior"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000" />
           </div>
        </section>

        <div className="px-6 md:px-20 space-y-24 md:space-y-48">
          {/* Section 1: Introduction - Premium Redesign */}
          <section className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-secondary opacity-40"></div>
                  <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Resort Overview</span>
                </div>
                
                <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary mb-12 leading-[0.9] tracking-tighter">
                  Relax in a luxury suite <br />
                  <span className="italic text-secondary">at our Bengaluru hotel</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                  <div className="space-y-6">
                    <p className="font-body text-xl text-primary leading-relaxed first-letter:text-5xl first-letter:font-headline first-letter:mr-3 first-letter:float-left first-letter:text-secondary">
                      Experience refined hospitality at Sheraton Grand Bengaluru Whitefield Hotel & Convention Center. Ideally located near IT hubs and attractions like Bangalore Palace and Phoenix Marketcity.
                    </p>
                    <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed">
                      Our luxury hotel offers premium amenities including a tranquil outdoor pool, 24-hour Sheraton Fitness, and Shine Spa for a complete revitalizing experience.
                    </p>
                  </div>
                  <div className="relative p-8 md:p-12 bg-surface-container-low border-l-4 border-secondary/30">
                     <p className="font-body text-xl text-primary leading-relaxed italic">
                       "Host impactful events at our 65,000 sq. ft. convention centre with expert planning, AV tech and bespoke catering. Every stay is elevated with seamless service."
                     </p>
                     <div className="mt-8 flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                           <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                        </div>
                        <span className="font-label text-[10px] uppercase tracking-widest text-primary/60">5-Star Excellence</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Accommodations & QR */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
             <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                   <span className="font-label text-secondary tracking-[0.4em] uppercase text-[10px] font-bold block">Getting There</span>
                   <h2 className="font-headline text-5xl md:text-6xl text-primary leading-tight">Locate <br /> & <span className="italic">Navigate</span></h2>
                </div>

                <div className="space-y-8 bg-surface-container-low p-6 md:p-12 border border-outline-variant/10 rounded-sm">
                   <div className="flex flex-col md:flex-row gap-12 items-stretch md:items-start text-center md:text-left">
                      <div className="space-y-6 flex-1 w-full">
                         <div>
                            <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-2">Address</p>
                            <p className="font-headline text-xl text-primary italic leading-snug">
                               Prestige Shantiniketan, Hoodi, Whitefield, <br />
                               Bengaluru, Karnataka, India, 560048
                            </p>
                         </div>
                         <div>
                            <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-2">Concierge</p>
                            <p className="font-headline text-xl text-primary">+91 8071-008100</p>
                         </div>
                         <div className="pt-4">
                            <a 
                              href={MAPS_LINK} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex w-full items-center justify-between gap-3 bg-primary text-on-primary px-8 py-4 font-label text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-primary/10"
                            >
                              <span>Open in Google Maps</span>
                              <span className="material-symbols-outlined text-sm">directions</span>
                            </a>
                         </div>
                      </div>

                      <div className="flex flex-col items-center gap-4">
                         <div className="p-4 bg-white shadow-2xl rounded-sm border border-outline-variant/10">
                            <img 
                              src={QR_CODE_API} 
                              alt="Location QR Code"
                              className="w-32 h-32 md:w-40 md:h-40"
                            />
                         </div>
                         <p className="font-label text-center text-[8px] uppercase tracking-widest text-primary/40 max-w-[120px]">
                           Scan to open the location on your phone
                         </p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="lg:col-span-7 relative aspect-square md:aspect-16/10 overflow-hidden rounded-sm group">
                <Image 
                  src="/assets/sheraton02.avif" 
                  alt="Sheraton Accommodations"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000" />
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-surface/95 px-6 py-4 md:px-8 md:py-6 border border-outline-variant/10 shadow-2xl">
                   <p className="font-label text-[8px] md:text-[10px] uppercase tracking-widest text-primary font-bold">The Experience</p>
                   <p className="font-headline text-2xl md:text-3xl italic text-primary">Luxury At Every Step</p>
                </div>
             </div>
          </section>

          {/* Section 3: Fine Details */}
          <section className="bg-primary/5 rounded-sm p-8 md:p-24 text-center max-w-6xl mx-auto border border-outline-variant/10">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                <div className="space-y-4">
                   <h4 className="font-headline text-3xl text-primary italic">360</h4>
                   <p className="font-body text-sm text-on-surface-variant leading-relaxed">Guest rooms & 39 luxury suites for your comfort.</p>
                </div>
                <div className="space-y-4 border-y md:border-y-0 md:border-x border-primary/10 py-8 md:py-0">
                   <h4 className="font-headline text-3xl text-primary italic">65,000</h4>
                   <p className="font-body text-sm text-on-surface-variant leading-relaxed">Sq. ft. of magnificent convention & event space.</p>
                </div>
                <div className="space-y-4">
                   <h4 className="font-headline text-3xl text-primary italic">Five-Star</h4>
                   <p className="font-body text-sm text-on-surface-variant leading-relaxed">World-class amenities including Shine Spa & pool.</p>
                </div>
             </div>
             
             <div className="mt-20 pt-16 border-t border-primary/10 flex flex-col items-center gap-8">
                <p className="font-body text-lg text-on-surface-variant italic max-w-2xl leading-relaxed">
                   For a truly immersive look at everything the hotel offers, we invite you to explore their official website.
                </p>
                <a 
                  href={OFFICIAL_WEBSITE} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-primary text-primary px-10 py-5 font-label text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all font-bold"
                >
                  Official Hotel Website
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
             </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
