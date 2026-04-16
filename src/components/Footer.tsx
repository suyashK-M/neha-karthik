import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-container full-width py-12 flex flex-col items-center gap-6 w-full text-center">
      <div className="font-headline italic text-xl text-surface">
        Neha & Karthik
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-6">
        <Link
          href="/venue"
          className="font-label text-xs tracking-widest uppercase text-primary-fixed/60 hover:text-white transition-opacity"
        >
          The Venue
        </Link>
        <Link
          href="/travel"
          className="font-label text-xs tracking-widest uppercase text-primary-fixed/60 hover:text-white transition-opacity"
        >
          Travel Info
        </Link>
        <Link
          href="/contact"
          className="font-label text-xs tracking-widest uppercase text-primary-fixed/60 hover:text-white transition-opacity"
        >
          Contact US
        </Link>
      </div>
      <p className="font-label text-[10px] tracking-widest opacity-40 uppercase">
        © 2026 Neha & Karthik • Bangalore, India
      </p>
    </footer>
  );
};

export default Footer;
