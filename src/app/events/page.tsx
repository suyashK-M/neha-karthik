import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Events() {
  interface WeddingEvent {
    date: string;
    title: string;
    description: string;
    location: string;
    image: string;
    atmosphere: string;
    time?: string;
  }

  const events: WeddingEvent[] = [
    {
      date: "July 6th",
      time: "9:00 AM onwards",
      title: "Devara Samradhane",
      description: "Commencing our journey with divine blessings. A morning of spiritual resonance and traditional rituals followed by a sacred brunch.",
      location: "Ekadanta Pravachana Mandira, B.E.L. Sri Ganapathi Seva Mandali, B.E.L. Colony, Jalahalli, Bengaluru 560 013",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXO2EmZG2qkghraNHJuLFE2z8v-a8h_xeKphPxhj2Oos75knOAGTzNOlj7Uh5Y3TT01iQzn_AcOK8v4nN3BVy4O9XDx6ugVlRjjQLle0poqBXbdLdaUkbNtKiz3yBN0i-9-52uTTH1UiwfXVzU6slK-e3SUaZdfxj2KRkgcyUD-P5GnBcEMBRBGSh6e2y37_JhUXth0Hw2Dd1AeexyOmg2j9fZ2xtcA4EMDtS02jgPWovY1oR6-I38ySuz0HBj_-lJWFWcIEZM2w",
      atmosphere: "Sacred & Traditional",
    },
    {
      date: "July 10th",
      title: "Welcome Lunch",
      description: "A vibrant introduction to our celebrations. Join us for a curated afternoon of flavors and hospitality as we welcome our loved ones.",
      location: "Zinnia, Sheraton Whitefield",
      image: "/assets/zinnia.jpeg",
      atmosphere: "Warm & Welcoming",
    },
    {
      date: "July 10th",
      title: "Sangeet & Afterparty",
      description: "An electrifying night of music, dance, and celebration. Let the rhythms take over as we celebrate the union of two families.",
      location: "Scarlet Ballroom",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8_EP7hfqd-R9p9M-KSjpSMFnI5HP04ZA5OlkuqytgP6i1lFCMfTzSPDr3ANl9TMEI9eMadnbxS57YbI9hxs-bFLBA-oYGPcJjbTO2ZoiKur009AdtzB5faxOHBpHGaJixKlbu-cU5cHEqfwr38NnEwdnJC0d4Mm07Kyj17jRqi3tkZu8_5ZN2CAoYEhMl70C64Fn4jff2MJCTW_oLGPF269kuvO68Mws3MOELiwM2kdvpR0qzAB4whiTKZnJNe4bQQubAJIcnew",
      atmosphere: "Electric & Festive",
    },
    {
      date: "July 11th",
      title: "Mehendi followed by Lunch",
      description: "Sun-kissed celebrations filled with intricate henna designs and joyous melodies. A relaxed afternoon on the lawn.",
      location: "Party Lawn / Scarlet Alfresco",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9s8O8-W18g71fo34cQLe2dNYWrcx-KhsgzDbvM323yBNoV5eT3gU76cOgIkhdpmCLwn9tyxXMLQGXROB7Q3kW1SL2ZmDUnnXA4vddy9qZN7hVEeNa5tVCbMZMHzkx7lQbW3tVKjsrpkiIFNk8tlEczPBb9xCYYnUbR7zBKzvFeDF4n6Rk7VbAGgv4U877f7marzehQTjcsqXPRKNQmk2IMWUJH35TVMllzDkIeo2Y2zpZb4W36yYuIjLajEx8I4IQtAt2IjkbGQ",
      atmosphere: "Sun-kissed & Joyful",
    },
    {
      date: "July 11th",
      title: "Varpooje followed by Dinner",
      description: "Traditional rituals honoring our heritage, followed by a sophisticated Sit-down Banti Bhojanam dinner.",
      location: "Zinnia / Scarlet Ballroom",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbaYqQxFr4d1avXG0eEprfJ88YWB1WoZHSKiljH0B3xOfGEn7BGxEAJDETSXNALfCVFzrOuYpyfVyBPTCEfI35JkcLOR6REJDiVSKLR4MtXZ-xzEi69NZAKjzGdzhpxUQhqDksBjmPZxDUa8OZmmkWGOX98oHgteiCsx1qu0q61l8O-tla0fFQEOgNii5M-qVWWLZOhpSWiJ8A886WoVuA2YO1xNjUxaYscjGD7l8UwhDhRDbRsXiLXxhRi81qOFec41Ucnxx6dQ",
      atmosphere: "Elegant & Traditional",
    },
    {
      date: "July 12th",
      title: "The Wedding followed by Lunch",
      description: "The pinnacle of our union. A grand ceremony followed by a celebratory Banti Bhojanam lunch in both Scarlet and Zinnia.",
      location: "Convention Center / Scarlet Ballroom",
      image: "/assets/convention_center_sheraton.avif",
      atmosphere: "Grand & Imperial",
    },
    {
      date: "July 12th",
      title: "Reception & Afterparty",
      description: "Concluding our celebrations with a grand reception and an unforgettable night of music and joy as a newly wed couple.",
      location: "Scarlet Ballroom",
      image: "/assets/scarlet_alfersco.webp",
      atmosphere: "Celebratory & Royal",
    },
  ];

  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <Navbar />

      <div className="pt-32 pb-24">
        {/* Page Header - Redesigned Editorial Hero */}
        <header className="px-6 md:px-20 mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-6">
              <span className="font-label text-[10px] uppercase tracking-[0.5em] text-secondary font-bold block">
                The Itinerary
              </span>
              <h1 className="font-headline text-5xl sm:text-7xl md:text-[7rem] lg:text-[11rem] text-primary leading-[0.85] tracking-tighter">
                Celebrations <br />
                <span className="italic text-secondary">& Venues</span>
              </h1>
              <div className="max-w-xl pt-12">
                <p className="font-body text-xl text-on-surface-variant leading-relaxed">
                  A curated sequence of celebrations bridging tradition and modern elegance across Bangalore's most distinguished venues.
                </p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-6 pb-4">
              <div className="w-16 h-px bg-secondary opacity-40"></div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60 font-bold whitespace-nowrap">
                Bangalore, Karnataka • July 2026
              </p>
            </div>
          </div>
        </header>

        {/* Itinerary Grid */}
        <section className="space-y-0">
          {events.map((event, index) => (
            <div
              key={`${event.title}-${index}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-outline-variant/10 group overflow-hidden"
            >
              <div
                className={`md:col-span-12 lg:col-span-5 px-6 md:px-20 py-10 md:py-32 flex flex-col justify-center ${
                  index % 2 !== 0 ? "lg:order-2 bg-surface" : "bg-surface-container-low"
                }`}
              >
                <div className="space-y-8">
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-xs md:text-sm uppercase tracking-widest text-secondary font-bold">
                      {event.date}
                    </span>
                    {"time" in event && (
                      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60">
                        {event.time as string}
                      </span>
                    )}
                  </div>
                  <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl text-primary leading-none tracking-tighter">
                    {event.title}
                  </h2>
                  <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed italic max-w-md">
                    {event.description}
                  </p>
                  <div className="pt-8 border-t border-outline-variant/20 space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary text-xl mt-1 opacity-60">
                        location_on
                      </span>
                      <p className="font-headline text-lg md:text-xl lg:text-2xl leading-snug text-primary max-w-sm">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`md:col-span-12 lg:col-span-7 h-[400px] lg:h-auto overflow-hidden relative ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-8 right-8 bg-surface/90 backdrop-blur px-8 py-6 border border-outline-variant/20 shadow-2xl">
                  <p className="font-label text-[10px] uppercase tracking-widest opacity-40">Atmosphere</p>
                  <p className="font-headline text-2xl md:text-3xl italic text-primary">{event.atmosphere}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Logistics Note */}
        <section className="px-6 md:px-20 py-16 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="font-headline text-4xl md:text-5xl text-primary leading-tight">
                Arrival <br /> & <span className="italic">Logistics</span>
              </h3>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                For our international guests and those traveling from afar, we have prepared a comprehensive guide to visas, flights, and local travel. 
                Our team is also available for any personal concierge assistance you may need throughout the wedding week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <Link
                  href="/travel"
                  className="bg-primary text-white border border-primary px-10 py-4 font-label text-xs tracking-widest uppercase hover:bg-secondary hover:border-secondary transition-colors text-center"
                >
                  Travel Info
                </Link>
                <Link
                  href="/guide"
                  className="border border-outline text-primary px-10 py-4 font-label text-xs tracking-widest uppercase hover:bg-surface-container transition-colors text-center"
                >
                  Bangalore Guide
                </Link>
              </div>
            </div>
            <div className="relative aspect-video bg-surface-container-low overflow-hidden rounded-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9s8O8-W18g71fo34cQLe2dNYWrcx-KhsgzDbvM323yBNoV5eT3gU76cOgIkhdpmCLwn9tyxXMLQGXROB7Q3kW1SL2ZmDUnnXA4vddy9qZN7hVEeNa5tVCbMZMHzkx7lQbW3tVKjsrpkiIFNk8tlEczPBb9xCYYnUbR7zBKzvFeDF4n6Rk7VbAGgv4U877f7marzehQTjcsqXPRKNQmk2IMWUJH35TVMllzDkIeo2Y2zpZb4W36yYuIjLajEx8I4IQtAt2IjkbGQ"
                alt="Bangalore Cityscape"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
