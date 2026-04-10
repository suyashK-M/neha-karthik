import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-container full-width py-12 flex flex-col items-center gap-6 w-full text-center">
      <div className="font-headline italic text-xl text-surface">
        Neha & Karthik
      </div>
      <div className="flex gap-8">
        <Link
          href="/registry"
          className="font-label text-xs tracking-widest uppercase text-primary-fixed/60 hover:text-white transition-opacity"
        >
          Gift Registry
        </Link>
        <Link
          href="/contact"
          className="font-label text-xs tracking-widest uppercase text-primary-fixed/60 hover:text-white transition-opacity"
        >
          Contact Us
        </Link>
      </div>
      <p className="font-label text-[10px] tracking-widest opacity-40 uppercase">
        © 2026 Neha & Karthik • Bangalore, India
      </p>
    </footer>
  );
};

export default Footer;
