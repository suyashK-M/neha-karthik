"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Basic check for admin cookie
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('auth_token='))
      ?.split('=')[1];
    
    setIsAdmin(token === 'nk2026@meragi');
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "RSVP", href: "/rsvp" },
    { name: "Venue", href: "/venue" },
    { name: "Wardrobe", href: "/wardrobe" },
    { name: "Travel", href: "/travel" },
    { name: "Bangalore Guide", href: "/guide" },
    { name: "Contact", href: "/contact" },
  ];

  if (isAdmin) {
    navLinks.push({ name: "Admin", href: "/admin" });
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 max-w-none bg-white/60 backdrop-blur-xl z-50 shadow-[0_20px_40px_rgba(51,3,55,0.05)]">
        <div className="font-headline italic text-2xl text-primary">
          Neha &amp; Karthik
        </div>
        
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive
                    ? "text-secondary font-semibold border-b-2 border-secondary pb-1"
                    : "text-primary/70 font-medium hover:text-secondary transition-colors duration-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* RSVP Button (Desktop) */}
          <Link href="/rsvp" className="hidden md:block">
            <button className="bg-primary text-on-primary px-6 py-2 text-sm font-label tracking-widest uppercase hover:opacity-90 transition-all">
              RSVP Now
            </button>
          </Link>

          {/* Hamburger Button (Mobile only) */}
          <button
            className="md:hidden flex flex-col gap-[5px] justify-center items-center w-10 h-10"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-primary rounded-full"></span>
            <span className="block w-6 h-0.5 bg-primary rounded-full"></span>
            <span className="block w-4 h-0.5 bg-primary rounded-full self-start"></span>
          </button>
        </div>
      </nav>

      {/* =================== DRAWER =================== */}
      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-200 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white z-300 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="font-headline italic text-xl text-primary">Neha &amp; Karthik</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between py-4 border-b border-gray-50 ${
                  isActive ? "text-secondary" : "text-primary/80 hover:text-primary"
                }`}
              >
                <span className={`text-xl font-headline ${isActive ? "italic font-bold" : ""}`}>
                  {link.name}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 py-6 border-t border-gray-100">
          <Link href="/rsvp" onClick={() => setDrawerOpen(false)}>
            <button className="w-full bg-primary text-white py-4 text-xs font-label uppercase tracking-widest">
              RSVP Now
            </button>
          </Link>
          <p className="mt-4 text-center text-[10px] text-primary/40 font-label uppercase tracking-widest">
            Neha &amp; Karthik • Bangalore 2026
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
