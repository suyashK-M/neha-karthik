"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Travel() {
  return (
    <main className="min-h-screen bg-surface selection:bg-secondary/30">
      <Navbar />

      <div className="pt-32 pb-24">
        {/* Editorial Header */}
        <header className="px-8 md:px-20 mb-20 md:mb-32">
          <div className="max-w-4xl">
            <span className="font-label text-secondary tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
              International Guests
            </span>
            <h1 className="font-headline text-6xl md:text-9xl text-primary leading-[0.9] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Travel & <br />
              <span className="italic text-secondary">Logistics</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              We are so honored that you are traveling across the world to celebrate with us. To make your journey as seamless as possible, we have curated essential details for your visit to the Garden City.
            </p>
          </div>
        </header>

        <div className="px-6 md:px-20 space-y-20 md:space-y-40">
          {/* Section 1: Visa Information */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6 italic">Visa & E-Visa</h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Most international guests will require a visa to enter India. We recommend applying for an **e-Tourist Visa** at least 3 weeks before your travel.
              </p>
              <div className="mt-10 p-6 bg-secondary/5 border border-secondary/20 rounded-sm">
                <p className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-2">Requirement Note</p>
                <p className="font-body text-sm text-primary/80 leading-relaxed italic">
                  "You will need to upload a digital passport photograph (square, with a white/light background) and a scan of your passport ID page."
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 bg-surface-container-low border border-outline-variant/10 p-8 md:p-16 relative overflow-hidden">
               {/* Pattern Overlay */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
               
               <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div className="space-y-6">
                        <h3 className="font-headline text-2xl text-primary uppercase tracking-widest border-b border-primary/10 pb-4">E-Visa Portal</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                           The official government portal for Indian e-Visa applications.
                        </p>
                        <a 
                          href="https://indianvisaonline.gov.in/evisa/Registration" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-label text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-primary/10"
                        >
                          Official Visa Portal
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                     </div>

                     <div className="space-y-8">
                        <h3 className="font-headline text-2xl text-primary uppercase tracking-widest border-b border-primary/10 pb-4">Reference in India</h3>
                        <p className="font-body text-xs text-on-surface-variant italic mb-6">
                           You will need these details for the "Contact in India" section of your visa application.
                        </p>
                        
                        <div className="space-y-6">
                           <div className="grid grid-cols-1 gap-1">
                              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Reference Name</span>
                              <span className="font-headline text-xl text-primary">[PLACEHOLDER_NAME]</span>
                           </div>
                           <div className="grid grid-cols-1 gap-1">
                              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Address</span>
                              <span className="font-headline text-xl text-primary italic leading-tight">
                                [PLACEHOLDER_ADDRESS] <br />
                                Bangalore, Karnataka, India
                              </span>
                           </div>
                           <div className="grid grid-cols-1 gap-1">
                              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Contact Number</span>
                              <span className="font-headline text-xl text-primary">[PLACEHOLDER_PHONE]</span>
                           </div>
                        </div>

                        <div className="pt-8 border-t border-primary/5">
                           <p className="font-body text-[11px] text-on-surface-variant/60 leading-relaxed">
                              * If you choose to stay at a hotel instead, you may use the hotel's address and contact number as your reference.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </section>

          {/* Section 2: International Arrivals */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-7 order-2 lg:order-1 relative aspect-16/10 md:aspect-16/8 overflow-hidden rounded-sm group">
                <Image 
                  src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2670&auto=format&fit=crop"
                  alt="Aerial View of Airport"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000" />
                <div className="absolute bottom-6 right-6 bg-surface/90 backdrop-blur px-8 py-6 border border-outline-variant/10">
                   <p className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Primary Hub</p>
                   <p className="font-headline text-3xl italic text-primary">Kempegowda Int'l (BLR)</p>
                </div>
             </div>

             <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                <span className="font-label text-secondary tracking-[0.4em] uppercase text-[10px] font-bold block">Arrivals</span>
                <h2 className="font-headline text-5xl md:text-6xl text-primary leading-tight">Flight <br /> & <span className="italic">Hubs</span></h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                   Bangalore is a major international hub with direct flights from across the globe. For those coming from outside India, direct flights to Chennai or Bombay are also viable, with frequent 1-hour domestic connections to Bangalore thereafter.
                </p>
                
                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-primary/10">
                   <div>
                      <h4 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-4">Direct Connections</h4>
                      <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                         <li>London (LHR)</li>
                         <li>San Francisco (SFO)</li>
                         <li>Dubai (DXB)</li>
                         <li>Singapore (SIN)</li>
                         <li>Abu Dhabi (AUH)</li>
                         <li>Paris (CDG)</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-4">Domestic Routes</h4>
                      <ul className="space-y-2 font-body text-sm text-on-surface-variant opacity-70">
                         <li>Delhi (150 min)</li>
                         <li>Mumbai (90 min)</li>
                         <li>Chennai (55 min)</li>
                         <li>Hyderabad (60 min)</li>
                      </ul>
                   </div>
                </div>
             </div>
          </section>

          {/* Section 3: Getting Around Summary */}
          <section className="bg-primary-container/30 rounded-sm p-8 md:p-16 text-center max-w-5xl mx-auto border border-outline-variant/10">
             <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-8">
                <span className="material-symbols-outlined text-3xl">airport_shuttle</span>
             </div>
             <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">Concierge & Logistics</h2>
             <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
                Dedicated wedding shuttles will be operating between the primary residences and all celebration venues. For personal travel, we highly recommend using the **Uber Premier** service for safe and reliable commutes within the city.
             </p>
             <Link href="/guide" className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.3em] text-secondary hover:text-primary transition-colors font-bold group">
                Explore the Bangalore Guide
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
             </Link>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
