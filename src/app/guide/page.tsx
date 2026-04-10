"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Guide() {
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const whitefieldPlaces = [
    {
      title: "VR Bengaluru",
      desc: "A luxury lifestyle destination featuring high-end retail, a boutique hotel, and the city's finest rooftop lounges.",
      icon: "storefront",
      image: "/assets/vr-bengaluru-black-box.jpg",
      link: "https://maps.app.goo.gl/wsGM8ci9pqtQYs5Q7",
      details: {
        highlights: ["Retail therapy at H&M, Zara", "PVR Director's Cut cinema", "The Sky Deck rooftop"],
        bestFor: "Shopping & Sunset Drinks",
        note: "Also known as the 'Black Box' for its distinctive architecture."
      }
    },
    {
      title: "Whitefield Social",
      desc: "A collaborative workspace by day and a high-energy bar by night, capturing the soul of Bangalore's pub culture.",
      icon: "local_bar",
      image: "/assets/whiteField_social.jpg",
      link: "https://maps.app.goo.gl/bXsDSjWM7ZXjpjRq7",
      details: {
        highlights: ["Industrial-chic decor", "Creative cocktail menu", "Great community vibes"],
        bestFor: "Casual Hangouts",
        note: "Perfect for working during the day with great coffee."
      }
    },
    {
      title: "ASC Golf Course",
      desc: "A golfer's paradise in the heart of the city, offering lush fairways and premium amenities for a sporty morning.",
      icon: "golf_course",
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2670&auto=format&fit=crop",
      link: "https://maps.app.goo.gl/5uaxGWpaVw96W7jb6",
      details: {
        highlights: ["Driving ranges & pulling carts", "High-end restaurants", "Professional club rentals"],
        bestFor: "Sporty Mornings",
        note: "Conveniently located near the hotel for early tee times."
      }
    },
    {
      title: "Lake View Park",
      desc: "A serene spot for nature lovers, offering picturesque views of Sheelavanthakere Lake and a peaceful escape from the city hustle.",
      icon: "park",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2670&auto=format&fit=crop",
      link: "https://maps.app.goo.gl/4VSsrB7JL7aWkDfG9",
      details: {
        highlights: ["Lakeside walking paths", "Birdwatching opportunities", "Perfect picnic spots"],
        bestFor: "Nature & Relaxation",
        note: "Ideal for a quiet evening stroll amidst serene surroundings."
      }
    },
    {
      title: "HAL Aerospace Museum",
      desc: "Explore India’s aviation history with vintage aircraft, simulators, and heritage exhibits at this iconic museum.",
      icon: "flight",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2670&auto=format&fit=crop",
      link: "https://maps.app.goo.gl/SEaKuzyJwxuAquCy7",
      details: {
        highlights: ["Vintage fighter jets", "Flight simulators", "Aviation heritage exhibits"],
        bestFor: "History & Tech",
        note: "Just a short drive away from the Whitefield hub."
      }
    },
    {
      title: "Avenue Park",
      desc: "A tranquil escape amidst lush greenery, featuring beautifully landscaped gardens and serene sculptures.",
      icon: "nature_people",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop",
      link: "https://maps.app.goo.gl/2uwRnfCYcsL3mMjD6",
      details: {
        highlights: ["Landscaped floral gardens", "Artistic sculptures", "Tranquil lakeside seating"],
        bestFor: "Tranquil Escapes",
        note: "A perfect place to escape the city bustle and unwind."
      }
    },
    {
      title: "Jagriti Theatre",
      desc: "One of the most intimate performing arts spaces in the country, hosting curated plays and musical ensembles.",
      icon: "theater_comedy",
      image: "/assets/JagritiTheatre.jpg",
      link: "https://maps.app.goo.gl/W8DjQgqUbQeRMkbR6",
      details: {
        highlights: ["Curated theatre performances", "Open-air cafe", "Artistic community hub"],
        bestFor: "Culture & Arts",
        note: "Check their schedule for weekend plays or workshops."
      }
    }
  ];

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-8 md:px-16 mb-24 relative">
          <div className="flex flex-col md:flex-row gap-12 items-end">
            <div className="md:w-3/5">
              <span className="font-label text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">Destination Guide</span>
              <h1 className="font-headline text-7xl md:text-9xl text-primary leading-none -ml-1 md:-ml-2">
                Bangalore <br/><span className="italic text-secondary">Anthology</span>
              </h1>
              <p className="mt-8 font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
                A curated selection of our favorite haunts in the Garden City. From the craft breweries of Whitefield to the silk markets of Commercial Street, explore the city that brought us together.
              </p>
            </div>
            <div className="md:w-2/5 w-full aspect-[4/5] overflow-hidden rounded-sm relative shadow-2xl">
              <Image 
                src="/assets/bangaloreCity.jpg"
                alt="Bangalore Cityscape"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute bottom-6 right-6 bg-surface/90 backdrop-blur p-4 text-xs font-label tracking-widest uppercase">
                EST. 2026
              </div>
            </div>
          </div>
        </section>

        {/* Pubs & Sightseeing (Asymmetric Layout) */}
        <section className="bg-surface-container-low py-24 px-8 md:px-16 overflow-hidden mb-24">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 md:sticky md:top-32 h-fit">
              <h2 className="font-headline text-5xl text-primary mb-6">Whitefield <br/>& Beyond</h2>
              <p className="font-body text-on-surface-variant mb-8">The neighborhood where the tech pulse meets the craft brew scene. These are the spots within walking distance of the venue.</p>
              <div className="group bg-secondary text-white rounded-sm shadow-xl hover:translate-y-[-4px] transition-transform overflow-hidden relative min-h-[400px]">
                <Image 
                  src="/assets/windmills-craftworks.jpg"
                  alt="Windmills Craftworks"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-secondary/90 to-transparent">
                  <span className="material-symbols-outlined mb-4 text-white" style={{ fontVariationSettings: "'FILL' 1" }}>local_drink</span>
                  <h3 className="font-headline text-3xl mb-2 italic text-white">Windmills Craftworks</h3>
                  <p className="text-sm text-white/90 leading-relaxed mb-6">Not just a brewery, but a sanctuary of jazz, rare books, and the finest Hefeweizen in India.</p>
                  <a 
                    href="https://maps.app.goo.gl/RCHGqaQGTBw2AvW96" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-label border border-white/30 py-2 px-4 hover:bg-white hover:text-secondary transition-colors w-fit text-white"
                  >
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="group relative overflow-hidden rounded-sm shadow-lg">
                <div className="aspect-square overflow-hidden relative">
                  <Image 
                    src="/assets/the_biere_club.jpg"
                    alt="The Biere Club"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-primary-container/20 p-6 md:p-8 border-t border-outline-variant/10">
                  <h4 className="font-headline text-2xl text-primary italic">The Biere Club</h4>
                  <p className="font-body text-sm text-on-surface-variant mt-2 mb-4">Whitefield's legacy craft brewery with a charming European bistro vibe.</p>
                  <a 
                    href="https://maps.app.goo.gl/q1Q7ddTypm3JeoG27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-label text-secondary hover:underline"
                  >
                    <span className="material-symbols-outlined text-sm">map</span>
                    View Location
                  </a>
                </div>
              </div>
              <div className="group relative md:mt-16 overflow-hidden rounded-sm shadow-lg">
                <div className="aspect-3/4 overflow-hidden relative">
                  <Image 
                    src="/assets/lalbagh-botanical-garden.jpg"
                    alt="Lalbagh Gardens"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-primary-container/20 p-6 md:p-8 border-t border-outline-variant/10">
                  <h4 className="font-headline text-2xl text-primary italic">Lalbagh Gardens</h4>
                  <p className="font-body text-sm text-on-surface-variant mt-2 mb-4">A 240-acre floral sanctuary. Visit the glass house modeled after London's Crystal Palace.</p>
                  <a 
                    href="https://maps.app.goo.gl/7SD1eKyy1rAPqSCb9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-label text-secondary hover:underline"
                  >
                    <span className="material-symbols-outlined text-sm">map</span>
                    View Location
                  </a>
                </div>
              </div>
              <div className="group relative md:-mt-8 overflow-hidden rounded-sm shadow-lg">
                <div className="aspect-square overflow-hidden relative">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL1u8qXXWbS67YQIcnGAB9SQaCoNVIpVsHzI_lUt5HScdSN2xLS_UE4eSV1brFbyFVsD51KiL5TV6WyNunwzRIBPbYdxxwjhETeyuSXqU8-vJbwih2mB54ys2Z7bA8pIMkHHn7RP8YnSBv4zrvRWIQBKS1JtbZ-5D2XFWbfR5FHqbUVFH2bNOx79HXFsOlVqS57vV-v0xAHqu-THjCqXARx2KoIwEK2bSiINrHtXVf_I8IG5bQdPG5VgvpCXSjhUtuGjJ58B0nQg"
                    alt="Bangalore Palace"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-primary-container/20 p-6 md:p-8 border-t border-outline-variant/10">
                  <h4 className="font-headline text-2xl text-primary italic">Bangalore Palace</h4>
                  <p className="font-body text-sm text-on-surface-variant mt-2 mb-4">Tudor-style architecture and sprawling grounds that echo the era of the Maharajas.</p>
                  <a 
                    href="https://maps.app.goo.gl/T4o8ZkkUsFquJazC7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-label text-secondary hover:underline"
                  >
                    <span className="material-symbols-outlined text-sm">map</span>
                    View Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shopping Anthology (Bento Grid) */}
        <section className="py-24 px-8 md:px-16 mb-24">
          <div className="mb-12 flex justify-between items-end border-b border-outline-variant pb-8">
            <div>
              <span className="font-label text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-2 block">Curation</span>
              <h2 className="font-headline text-5xl text-primary">The Shopping Edit</h2>
            </div>
            <div className="hidden md:block font-body text-sm text-on-surface-variant max-w-xs text-right italic leading-relaxed">
              From high-street luxury at UB City to the bustling lanes of Commercial Street.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 group relative overflow-hidden bg-primary-container rounded-sm h-[400px] md:h-auto">
              <Image 
                src="/assets/ub-city.jpg"
                alt="UB City"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white bg-linear-to-t from-primary/80 to-transparent">
                <h3 className="font-headline text-4xl mb-2">UB City</h3>
                <p className="font-body text-sm opacity-90 max-w-md mb-6">India's first luxury mall. Ideal for designer finds and high-end dining under the Bangalore stars.</p>
                <a 
                  href="https://maps.app.goo.gl/6C2UtT4JL8268h4PA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-label text-white/80 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Open in Maps
                </a>
              </div>
            </div>
            <div className="md:col-span-4 group relative overflow-hidden bg-secondary rounded-sm h-[400px] md:h-auto">
              <Image 
                src="/assets/commercial_street.jpg"
                alt="Commercial Street"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white bg-linear-to-t from-secondary/80 to-transparent">
                <h3 className="font-headline text-4xl mb-2">Commercial Street</h3>
                <p className="font-body text-sm opacity-90 mb-6">The soul of the city's trade. A labyrinth of silks, silver jewelry, and bespoke tailoring.</p>
                <a 
                  href="https://maps.app.goo.gl/4yWA3kCf9wVT1np46" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-label text-white/80 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Open in Maps
                </a>
              </div>
            </div>
            <div className="md:col-span-4 group relative overflow-hidden bg-primary rounded-sm h-[300px] md:h-auto">
              <Image 
                src="/assets/phoenixMarketCity.jpg"
                alt="Phoenix Marketcity"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white bg-linear-to-t from-primary/80 to-transparent">
                <h3 className="font-headline text-4xl mb-2 italic">Phoenix Marketcity</h3>
                <p className="font-body text-sm opacity-90 mb-6">Whitefield's Premier Hub</p>
                <a 
                  href="https://maps.app.goo.gl/7RSqMsh4Eqsg9DJF9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-label text-white/80 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Open in Maps
                </a>
              </div>
            </div>
            <div className="md:col-span-8 bg-surface-container-low p-8 flex flex-col justify-center border border-outline-variant/10 rounded-sm">
              <div className="flex items-center gap-4 mb-4 text-secondary">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="font-label text-xs tracking-widest font-bold uppercase">Pro Tip</span>
              </div>
              <p className="font-headline text-2xl text-primary leading-snug max-w-2xl">
                "For the most authentic Bangalore experience, head to Commercial Street early on a weekday. Don't forget to grab a 'Sulaimani' tea at Savera tea stall."
              </p>
            </div>
          </div>
        </section>

        {/* Things to do in Whitefield */}
        <section className="py-24 px-8 md:px-16 mb-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="md:w-1/2">
                <span className="font-label text-secondary tracking-[0.4em] uppercase text-[10px] block mb-4">Local Guide</span>
                <h2 className="font-headline text-6xl text-primary">Things to do in <br/><span className="italic text-secondary">Whitefield</span></h2>
              </div>
              <p className="md:w-1/3 font-body text-sm text-on-surface-variant italic border-l-2 border-outline-variant pl-8">
                The neighborhood of the union. Explore the charm of Bangalore's primary tech and lifestyle hub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whitefieldPlaces.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedPlace(item)}
                >
                   <div className="aspect-video relative overflow-hidden mb-6 rounded-sm shadow-lg">
                      <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-surface/90 backdrop-blur px-6 py-3 rounded-full font-label text-[10px] uppercase tracking-widest text-primary shadow-xl">
                          View Details
                        </span>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary text-xl">{item.icon}</span>
                        <h3 className="font-headline text-3xl text-primary italic">{item.title}</h3>
                      </div>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-2">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedPlace && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12 overflow-hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-primary/40 backdrop-blur-md transition-opacity duration-500"
              onClick={() => setSelectedPlace(null)}
            />
            
            {/* Modal Content */}
            <div className="relative w-[85vw] md:w-full max-w-4xl h-[80vh] md:h-auto md:max-h-[90vh] bg-surface animate-in fade-in zoom-in duration-300 shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm">
              <button 
                onClick={() => setSelectedPlace(null)}
                className="fixed md:absolute top-6 right-10 md:top-6 md:right-6 z-[60] w-10 h-10 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="md:w-1/2 relative min-h-[250px] md:h-auto shrink-0">
                <Image 
                  src={selectedPlace.image}
                  alt={selectedPlace.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 40vw"
                />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col space-y-8 bg-surface border-t md:border-t-0 md:border-l border-outline-variant/30 overflow-y-auto overflow-x-hidden">
                <div className="space-y-6">
                  <div>
                    <span className="font-label text-secondary tracking-[0.4em] uppercase text-[10px] mb-2 block">Curation Detail</span>
                    <h2 className="font-headline text-5xl text-primary leading-tight italic">{selectedPlace.title}</h2>
                  </div>
                  
                  <p className="font-body text-base text-on-surface-variant leading-relaxed">
                    {selectedPlace.desc}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                    <h4 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Highlights</h4>
                    <ul className="space-y-2">
                       {selectedPlace.details.highlights.map((h: string, i: number) => (
                         <li key={i} className="flex items-center gap-3 font-body text-sm text-on-surface-variant">
                           <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                           {h}
                         </li>
                       ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-4">
                    <div>
                      <h4 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Best For</h4>
                      <p className="font-headline text-lg italic text-secondary">{selectedPlace.details.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Local Note</h4>
                      <p className="font-body text-xs text-on-surface-variant italic">{selectedPlace.details.note}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={selectedPlace.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-on-primary py-5 rounded-sm font-label text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">navigation</span>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Getting Around (Utility Cards) */}
        <section className="py-24 px-8 md:px-16 bg-primary text-on-primary mb-24 rounded-sm mx-8 md:mx-16">
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-headline text-5xl mb-6 leading-tight">Navigating the <br/><span className="italic text-primary-fixed">Silicon Valley</span></h2>
              <p className="font-body text-on-primary-container leading-relaxed text-lg max-w-xl">Bangalore traffic is legendary—we recommend planning ahead and using these preferred transit methods to ensure you arrive in style.</p>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary-container p-8 rounded-sm hover:translate-y-[-4px] transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl mb-4 text-primary-fixed">directions_car</span>
                <h3 className="font-headline text-2xl mb-2 italic">Uber & Ola</h3>
                <p className="font-body text-sm opacity-70">The most reliable way to get door-to-door. Always book 'Premier' for a comfortable wedding commute.</p>
              </div>
              <div className="bg-primary-container p-8 rounded-sm hover:translate-y-[-4px] transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl mb-4 text-primary-fixed">train</span>
                <h3 className="font-headline text-2xl mb-2 italic">Namma Metro</h3>
                <p className="font-body text-sm opacity-70">The Purple Line connects Whitefield to the rest of the city, bypassing the most notorious traffic zones.</p>
              </div>
            </div>
          </div>
          <div className="mt-20 w-full h-[300px] overflow-hidden rounded-sm relative opacity-30">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcvqIHqNT4VRHGrSMQd16NMvWKrnYZv948FZNbcYjRuOGY9LEJsJeFrXpGKMWDYUKnB_bN89twzrV8NdICae4wWfwrITEA4oLvZW5ghgsf0MYTV7MPqHQJO7Dnvid6jEQ5h3UN_4tOrlcZY-NhWBmk4VzeUuxiPmhqo1uWVsQscHFMiImi9gd0Jg9I0J9v_GNcV9424D6DwJU3gJ7NxmsDVK99b2_7n4_fHJ5v1Qp0dCZ9g2BD0NV_SSqEUoIzfD2nq6XuxNCHrg"
              alt="Bangalore Map"
              fill
              className="object-cover grayscale"
            />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
