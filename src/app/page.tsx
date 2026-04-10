import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section: The Imperial Union */}
        <section className="relative min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center overflow-hidden px-8 md:px-20 gap-12">
          <div className="w-full md:w-5/12 z-10 space-y-8 mt-12 md:mt-0">
            <div className="space-y-4">
              <span className="font-label text-secondary text-xs tracking-[0.3em] uppercase">
                Est. 2026 • Bangalore, India
              </span>
              <h1 className="font-headline text-7xl md:text-9xl text-primary leading-tight tracking-tighter">
                Neha & Karthik
              </h1>
            </div>
            <p className="font-headline italic text-2xl text-on-surface-variant max-w-md">
              A celebration of legacy, love, and the coming together of two families in the heart of the Garden City.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <button className="bg-linear-to-r from-primary to-primary-container text-on-primary px-10 py-4 font-label text-sm tracking-widest uppercase shadow-xl hover:opacity-90 transition-opacity">
                Save the Date
              </button>
              <button className="text-secondary font-label text-sm tracking-widest uppercase relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                Our Story
              </button>
            </div>
          </div>

          {/* Asymmetric Image Breakout */}
          <div className="relative w-full md:w-7/12 h-[600px] md:h-[800px] bg-surface-container-low group">
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 md:translate-x-12 md:translate-y-12 transition-transform duration-700 group-hover:translate-x-8 group-hover:translate-y-8">
              <Image
                src="/assets/romanticCouple.jpeg"
                alt="Neha & Karthik"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
            {/* Editorial Label */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-on-primary p-8 hidden md:block z-20">
              <span className="font-headline text-4xl block">N & K</span>
              <span className="font-label text-[10px] tracking-[0.4em] uppercase opacity-60">
                Forever Starts Now
              </span>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-32 px-8 md:px-20 bg-surface">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="inline-block px-4 py-1 border border-outline-variant rounded-full mb-4">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                A Royal Welcome
              </span>
            </div>
            <h2 className="font-headline text-5xl md:text-7xl text-primary leading-none">
              We invite you to witness the beginning of our forever.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 text-left">
              <div className="space-y-4">
                <span className="font-headline text-3xl text-secondary italic">The Union</span>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  More than a wedding, it is the merging of two distinct paths into one shared destiny. Traditional roots meet modern aspirations.
                </p>
              </div>
              <div className="space-y-4">
                <span className="font-headline text-3xl text-secondary italic">The City</span>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Set against the lush, heritage-rich backdrop of Bangalore, where the air smells of sandalwood and jasmine.
                </p>
              </div>
              <div className="space-y-4">
                <span className="font-headline text-3xl text-secondary italic">The Promise</span>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Crafted with love, intentionality, and the blessings of our elders. We cannot wait to celebrate with you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Highlight: Bento Style Gallery */}
        <section className="px-8 md:px-20 pb-32">
          <div className="grid grid-cols-12 gap-4 h-auto md:h-[1200px]">
            <div className="col-span-12 md:col-span-8 relative h-[400px] md:h-auto bg-surface-container overflow-hidden group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBre19RizFhN7lzx0fu0dpBxRLD7o4EbhSv-34YVtKEOQlV-fx3WY0ikFs0yBcq9VBfsQcunGJOwyCZ8zHdVNOHFAusFxwQCE4MEqyEfgEc4tE87Nk5PXgx6NdcDzTlzjuG2hHSpekvJAloQavMmaw9PJUK-eH1uRGOoT6qbgcfJ7lOh7XHLs5crNW5jViNKnP1D0uY7LMVUtOZA1S-cKjWBR_2t9EGvF0wUqGNAxz-km9PYtnYmFcfvFU7UuZtKeydyadPfpBhRg"
                alt="Henna Design"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="col-span-12 md:col-span-4 bg-primary-container p-12 flex flex-col justify-end text-on-primary min-h-[300px]">
              <h3 className="font-headline text-4xl mb-4">The Palette</h3>
              <p className="font-label text-xs tracking-wide opacity-70 uppercase">
                Royal Violet • Rich Maroon • Ivory Paper
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 relative h-[400px] md:h-auto bg-surface-container-high overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9s8O8-W18g71fo34cQLe2dNYWrcx-KhsgzDbvM323yBNoV5eT3gU76cOgIkhdpmCLwn9tyxXMLQGXROB7Q3kW1SL2ZmDUnnXA4vddy9qZN7hVEeNa5tVCbMZMHzkx7lQbW3tVKjsrpkiIFNk8tlEczPBb9xCYYnUbR7zBKzvFeDF4n6Rk7VbAGgv4U877f7marzehQTjcsqXPRKNQmk2IMWUJH35TVMllzDkIeo2Y2zpZb4W36yYuIjLajEx8I4IQtAt2IjkbGQ"
                alt="Palace Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-8 bg-surface-container-low relative flex items-center justify-center min-h-[400px]">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-secondary to-transparent"></div>
              <div className="text-center z-10 px-8">
                <span className="font-label text-[10px] tracking-[0.5em] uppercase text-secondary block mb-6">
                  Mark the Date
                </span>
                <div className="flex items-center justify-center gap-8 border-y border-outline-variant py-8">
                  <div className="text-center">
                    <span className="font-headline text-6xl text-primary block">06-12</span>
                    <span className="font-label text-xs uppercase opacity-60">July</span>
                  </div>
                  <div className="h-16 w-px bg-outline-variant"></div>
                  <div className="text-center">
                    <span className="font-headline text-6xl text-primary block">2026</span>
                    <span className="font-label text-xs uppercase opacity-60">Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Teaser */}
        <section className="py-32 bg-primary text-on-primary overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-8 md:px-20 editorial-grid">
            <div className="col-span-12 md:col-span-6 space-y-12">
              <span className="font-label text-xs tracking-[0.4em] uppercase opacity-50">
                The Destination
              </span>
              <h2 className="font-headline text-6xl md:text-8xl leading-none">
                Bangalore, The Garden City
              </h2>
              <p className="font-body text-lg opacity-80 max-w-md">
                The wedding will take place in the historical heart of Bangalore, surrounded by colonial architecture and botanical wonders.
              </p>
              <Link href="/guide" className="inline-flex items-center gap-4 group">
                <span className="w-12 h-px bg-on-primary group-hover:w-20 transition-all"></span>
                <span className="font-label text-sm uppercase tracking-widest">Explore the Guide</span>
              </Link>
            </div>
            <div className="col-span-12 md:col-span-6 mt-20 md:mt-0 relative h-[400px] md:h-[600px]">
              <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-full absolute -right-20 -top-20 w-96 h-96"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuh5mMhpVxG9Q0rNds3ggp2k4Jblna4mAruBO8I9dfam7B7bqirvAiLdXHaXhEzftF5pQibTC7ghWf4ik5kBOIN_uRzrTxHn4e9sETM9vbWX1Ra1O92Rb6LAhfB59zue8748vCT9ss5L3AubhjcFEyte-Buq0rtKe3gfwsHI1MRxwTtnY2IKs8phfnQY_oNVFr8h_msWS7TKRAeDDtyiEEzzwQHAN5PMA_q8lf_gp1_p_WTWL4J0K8TJZ8oYU5BNfyLNp_Rrxh7w"
                alt="Ariel view of Bangalore"
                fill
                className="relative z-10 object-cover rounded-sm shadow-2xl grayscale"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
