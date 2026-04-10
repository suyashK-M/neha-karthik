import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Wardrobe() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-32 pb-24">
        {/* Hero Archival Header */}
        <section className="relative w-full h-[600px] flex flex-col justify-center px-8 md:px-24 mb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-linear-to-r from-primary to-primary-container opacity-90"></div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvJ8rl6Xx2GiRb493XqqvvEk5KtDvjI1vgVWUUQHGaf3FQ3s3BuKLpH2b5ShZ0z05ae4t7m5dmoJeOT5knv6BOBQP8-B_OBGjBaeQ2t-eq5cMreRRSMl5pmmJyv1jlB2gfWH4u_HJAaoUzyr1RH5EKg-bbGfMSTRkVWumkaIciSzzrriUc9249d1mEFfUDfTJFMMP8WoZhxmi0T4KKEVJ9DYiIqYGjJqTxhc2mX4zO8C1cpNzO12ze56JEmZwnd8MLati7nsD4TQ"
              alt="Silk Texture"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </div>
          <div className="relative z-10">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-primary-fixed mb-4 block">
              The Lookbook
            </span>
            <h1 className="font-headline text-7xl md:text-9xl text-on-primary leading-tight -ml-1 md:-ml-2">
              Wardrobe <br />
              <span className="italic font-light">Curations</span>
            </h1>
            <div className="mt-8 flex items-center gap-4 text-primary-fixed-dim">
              <span className="h-px w-12 bg-primary-fixed-dim"></span>
              <p className="font-label text-sm uppercase tracking-widest">A Guide to Wedding Finery</p>
            </div>
          </div>
          <div className="absolute bottom-12 right-12 hidden md:block">
            <p className="font-headline italic text-2xl text-primary-fixed-dim max-w-xs text-right">
              "Elegance is the only beauty that never fades."
            </p>
          </div>
        </section>

        {/* Monsoon Packing Guide */}
        <section className="px-8 md:px-24 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 md:sticky md:top-40">
              <h2 className="font-headline text-5xl text-primary mb-6">July in Bangalore</h2>
              <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                The monsoon in Bangalore is a gentle affair—cool, breezy, and occasionally misty. Expect
                temperatures between 20°C to 28°C. Our curation balances the traditional richness of silks
                with the practicality required for a tropical garden city.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">cloudy_snowing</span>
                  <div>
                    <h4 className="font-label font-bold text-xs uppercase tracking-wider text-secondary">
                      The Monsoon Tip
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Opt for wedge heels or block heels for outdoor lawns to avoid sinking into the soft
                      earth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">device_thermostat</span>
                  <div>
                    <h4 className="font-label font-bold text-xs uppercase tracking-wider text-secondary">
                      Layering
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      A pashmina or light silk stole is recommended for evening events as the breeze can turn
                      chilly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group rounded-sm">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiFJIz8RQkjDEJ7aUyRHTsE_X9B3T1F3NEdXyC9rRul_wFlXFOk0l8knbjNMv1-aLgfnE5kNl-LLXfKeDBdjfD0LbJs_x_8t3yXLeVeTZJRB8koKAIhvaZ6uZi5-nesUq33pzzAKknXzWPPf9O5elajiEIRiLovnTjunsW1q4z6hwm-_8yI8srCW02lPz25G5Uh4AxwqgZaidNHVzTZ726LLQULsK0bLXGFr0MgYc3i-AEi7y9OFSBYLl8qCEbZALwsBTx03wNog"
                  alt="Cream Silk"
                  fill
                  className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="relative z-10">
                  <h3 className="font-headline text-3xl text-primary mb-2">Heavy Cream Silks</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    The cornerstone of traditional elegance. Perfect for the main Muhurtham, reflecting the
                    soft Bangalore morning light.
                  </p>
                </div>
              </div>
              <div className="bg-primary text-on-primary p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group rounded-sm">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5IF9HP1aI3rnNtH9FQebFFVWBVAd2p1UCGuZR6rEzfFV2jRCMyWyIdhwVqryO0dgHjJ1_CPyswc-M-3jv0t6sZNyQ9ivxYdL-1v2A_61O1Wwck7nmiL1Kuu4XhfYp9BML2-ivGqfF0tLiUzg7jnvMDhPFpXNDz9NVpi3Ep8qcmdqxJpYboZgqh-Aa_HKnVwZFR3aFOst4FoxAHB_ySYWirLElD6WTyIUKuFQ9JXiPj8wu28KQwS25yyWa9oKlVajly1MeEwIxIg"
                  alt="Maroon Velvet"
                  fill
                  className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="relative z-10">
                  <h3 className="font-headline text-3xl text-primary-fixed mb-2">Jewel-Toned Velvets</h3>
                  <p className="text-sm text-primary-fixed-dim leading-relaxed">
                    Rich maroons and deep violets provide warmth and regal structure for the Sangeet and
                    Reception nights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Looks Bento Grid */}
        <section className="px-8 md:px-24 mb-32">
          <div className="mb-16">
            <h2 className="font-headline text-6xl text-primary mb-4 text-center">The Wedding Edit</h2>
            <div className="w-24 h-px bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Bento items... */}
            <div className="md:col-span-4 bg-surface-container-high relative overflow-hidden rounded-sm p-8 flex flex-col justify-between h-[300px]">
              <div>
                <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary">
                  01. Thursday Morning
                </span>
                <h3 className="font-headline text-4xl mt-2">Devara Samradhane</h3>
              </div>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                Simple Cottons & Pastels
              </p>
            </div>
            <div className="md:col-span-4 md:row-span-2 bg-primary-container text-on-primary relative overflow-hidden rounded-sm h-[300px] md:h-auto">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPlxLRzyR-BqB9PFYQDdGfe32QlQ8GULm-oQ6ofFb2Hz1ee5RP5ErnXBa3R_d6G73J-zOzZMPbThJYvxtm_sDrb8rN1oNmYMcra5L59_3DWMxDiZAjRvqjV8WzrWpT3OAW8r1nNs_EySF3QMfvEJ2k2rVzBGNGnM0ZpGopZGoOxaQlS1L1HgVO1sjgewS4Ds_gJxqyuZzS6jZ43VjLwZKOlAIvdv5sRK1Oqxf7plbTdZvN-WFt0Y79THwQbvTnUO6DxES0kNy5yw"
                alt="Sangeet Look"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-primary via-transparent">
                <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary-fixed">
                  02. Friday Night
                </span>
                <h3 className="font-headline text-5xl mt-2 mb-4 text-primary-fixed">Sangeet</h3>
                <p className="text-sm text-on-primary-container">
                  Glamour meets movement. Mirror-work, sequins, and bold maroons. Bring your dancing shoes.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 border border-outline-variant/15 flex items-center justify-center p-8 h-[300px] rounded-sm">
              <div className="text-center">
                <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary">
                  03. Friday Noon
                </span>
                <h3 className="font-headline text-4xl mt-2">Mehendi</h3>
                <div className="mt-4 flex gap-2 justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                  <div className="w-3 h-3 rounded-full bg-[#e7bdb1]"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-fixed"></div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 md:row-span-2 bg-surface-container-low flex flex-col md:flex-row overflow-hidden rounded-sm h-[600px] md:h-auto">
              <div className="w-full md:w-1/2 relative h-[300px] md:h-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA398mgKgWx8XADdH9_qxdh-F8R_WMR9QMfYZZZ7tbC0GZV8E3oWmJiSYj5tx_d8eVXyRoqMS88IPRtxAkzeLonUBnXeIAcqzBUQ8oLI9asL_XwYPVSkrTJWGCcWmIy8_c48nt7YUUkDVk7dug4yA_e0ZhoOUuw3FKnJjroAYPQ7iKh_bgGue8kC_mkf6Q9sh9svynX5-_w7n0z4cVhzU74aiplIMSswyi-7dh-eh0utfppj7-u6JKHjFNtV94_KExcbC4CilALwg"
                  alt="Wedding Attire"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-surface-container-low">
                <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary">
                  04. Saturday Morning
                </span>
                <h3 className="font-headline text-6xl mt-4 mb-6">The Wedding</h3>
                <p className="font-body text-on-surface-variant leading-relaxed mb-8 text-sm">
                  Traditional Muhurtham attire. We suggest Kanjeevarams for the ladies and fine silk Veshtis
                  for the gentlemen. Stick to the classic palette of gold, ivory, and vermillion.
                </p>
                <ul className="space-y-3 font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Temple Jewellery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Fresh Jasmine Strings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Gold Accents
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-4 bg-secondary text-on-secondary p-8 flex flex-col justify-between h-[300px] rounded-sm">
              <div>
                <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary-fixed">
                  05. Saturday Evening
                </span>
                <h3 className="font-headline text-4xl mt-2">Reception</h3>
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-80">
                Black Tie or Indo-Western Formal
              </p>
            </div>
          </div>
        </section>

        {/* Packing Essentials Checklist - Refined Two-Column Section */}
        <section className="px-8 md:px-24 mb-32 bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content: The Ensemble Edit */}
            <div className="space-y-12">
              <div>
                <h3 className="font-headline text-6xl text-primary leading-tight">
                  The Ensemble <br /><span className="italic text-secondary">Edit.</span>
                </h3>
                <p className="mt-8 font-body text-on-surface-variant leading-relaxed max-w-md italic">
                  Crafting a wedding wardrobe is an art of balancing heritage with comfort. These refined additions ensure you remain effortless from the first ritual to the final toast.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-secondary">checkroom</span>
                  </div>
                  <div>
                    <h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-2">Textile Care</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
                      Professional steam pressing is available at the concierge for all silk and velvet ensembles to keep them crisp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                  </div>
                  <div>
                    <h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-2">Sartorial Cohesion</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
                      Coordinate your jewellery sets with the event's specific color palette for a truly curated, editorial look.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: The Checklist Box */}
            <div className="bg-white p-10 md:p-16 shadow-[0_40px_100px_rgba(51,3,55,0.05)] border border-outline-variant/10 rounded-sm">
              <p className="font-label text-center text-[10px] tracking-[0.4em] uppercase text-secondary mb-12">
                Packing Essentials Checklist
              </p>
              
              <ul className="space-y-8">
                {[
                  "Breathable Linens",
                  "Elegant Outerwear",
                  "Comfortable Occasion Flats",
                  "Waterproof Accessories",
                  "Emergency Mending Kit"
                ].map((item) => (
                  <li key={item} className="flex justify-between items-center border-b border-surface-container pb-4">
                    <span className="font-headline text-2xl md:text-3xl text-primary italic">
                      {item}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-sm">check</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 bg-[#faf3f4] p-6 border border-[#f5e1e4] text-center">
                <p className="font-label text-[9px] uppercase tracking-[0.2em] text-secondary leading-relaxed">
                  PRO TIP: HEM YOUR TROUSERS SLIGHTLY HIGHER TO AVOID <br /> MONSOON PUDDLES.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Style Advice Section */}
        <section className="px-8 md:px-24 mb-32 py-24 bg-surface-container-low relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-5xl text-primary mb-12">Fine Details & Etiquette</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-4">
                <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-secondary">checkroom</span>
                </div>
                <h4 className="font-headline text-xl mb-4 text-primary">Steam Pressing</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Hotel staff will be available for professional steam pressing of delicate silks and
                  velvets upon arrival.
                </p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-secondary">diamond</span>
                </div>
                <h4 className="font-headline text-xl mb-4 text-primary">Accessorizing</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Don't shy away from statement heritage pieces. Polki and Kundan sets pair beautifully with
                  our theme.
                </p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-secondary">umbrella</span>
                </div>
                <h4 className="font-headline text-xl mb-4 text-primary">Weather Ready</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  While all main venues are sheltered, we will provide elegant lace umbrellas for any short
                  walks through the gardens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final RSVP Reminder */}
        <section className="px-8 md:px-24 mb-24">
          <div className="bg-primary-container p-16 md:p-24 rounded-sm flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/40 to-transparent"></div>
            <h2 className="font-headline text-5xl md:text-7xl text-on-primary mb-8 relative z-10">
              Will you be <span className="italic">joining</span> us?
            </h2>
            <p className="font-body text-primary-fixed-dim max-w-lg mb-12 relative z-10">
              We kindly request you to confirm your attendance by the end of May to help us finalize
              arrangements for your stay and travel.
            </p>
            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <Link
                href="/rsvp"
                className="bg-surface text-primary px-10 py-4 font-label text-sm tracking-[0.2em] uppercase hover:bg-primary-fixed transition-colors"
              >
                RSVP Now
              </Link>
              <Link
                href="/contact"
                className="border border-primary-fixed-dim text-primary-fixed-dim px-10 py-4 font-label text-sm tracking-[0.2em] uppercase hover:bg-primary-fixed-dim hover:text-primary transition-colors"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
