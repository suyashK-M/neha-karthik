"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchRSVPs, deleteRSVP } from "./actions";

interface RSVPRecord {
  timestamp: string;
  event: string;
  fullName: string;
  email: string;
  guestCount: string | number;
  contactNumber?: string;
  dietary?: string;
  accessibility?: string;
  foodAllergies?: string;
  additionalGuests?: string;
}

export default function AdminDashboard() {
  const [rsvps, setRsvps] = useState<RSVPRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null); // Stores the timestamp of the record being deleted
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  // Filter & UI States
  const [searchTerm, setSearchTerm] = useState("");
  const [eventFilter, setEventFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"date-desc" | "date-asc" | "alpha-asc">("date-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  useEffect(() => {
    async function loadData() {
      const result = await fetchRSVPs();
      if (result.success) {
        setRsvps(result.data);
      } else {
        setError(result.error || "Failed to fetch data");
      }
      setLoading(false);
    }
    loadData();
  }, []);

  // Get unique events for filtering
  const uniqueEvents = Array.from(new Set(rsvps.flatMap(r => {
    if (r.event.includes(" | ")) {
      return r.event.split(" | ").map(e => e.split(":")[0].trim());
    }
    return [r.event];
  }))).sort();

  // FILTERING LOGIC
  const filteredRsvps = rsvps.filter((rsvp) => {
    const matchesSearch = 
      rsvp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rsvp.contactNumber && String(rsvp.contactNumber).includes(searchTerm)) ||
      rsvp.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesEvent = eventFilter === "all" || rsvp.event.includes(eventFilter);
    
    return matchesSearch && matchesEvent;
  });

  // SORTING LOGIC
  const sortedRsvps = [...filteredRsvps].sort((a, b) => {
    if (sortBy === "date-desc") return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    if (sortBy === "date-asc") return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    if (sortBy === "alpha-asc") return a.fullName.localeCompare(b.fullName);
    return 0;
  });

  // PAGINATION LOGIC
  const totalItems = sortedRsvps.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRsvps = sortedRsvps.slice(startIndex, startIndex + itemsPerPage);

  const totalGuests = rsvps.reduce((sum, rsvp) => sum + Number(rsvp.guestCount || 0), 0);

  const handleExport = () => {
    const headers = ["Date", "Name", "Email", "Phone", "Event Responses", "Total Guests", "Dietary", "Allergies", "Accessibility", "Additional Guests"];
    const rows = sortedRsvps.map(r => [
      new Date(r.timestamp).toLocaleString(),
      r.fullName,
      r.email,
      `'${r.contactNumber || ""}`, // Prefix with ' to prevent Excel formatting issues
      r.event,
      r.guestCount,
      r.dietary || "",
      r.foodAllergies || "",
      r.accessibility || "",
      r.additionalGuests || ""
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell.toString().replace(/"/g, '""')}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `RSVP_Export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (timestamp: string) => {
    setIsDeleting(timestamp);
    try {
      const result = await deleteRSVP(timestamp);
      if (result.success) {
        setRsvps(prev => prev.filter(r => r.timestamp !== timestamp));
        setConfirmDelete(null);
      } else {
        alert(result.error || "Failed to delete entry");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("An unexpected error occurred while deleting.");
    } finally {
      setIsDeleting(null);
    }
  };

  return (
    <main className="min-h-screen bg-surface dot-pattern">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Admin Header */}
          <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="font-label text-secondary text-[10px] tracking-[0.4em] uppercase">
                Confidential • Central Guest Registry
              </span>
              <h1 className="font-headline text-6xl text-primary italic leading-tight">
                Guest Anthology
              </h1>
              <p className="font-body text-on-surface-variant max-w-lg italic">
                A live summary of all RSVPs received for the Bangalore celebrations.
              </p>
            </div>

            <div className="flex bg-surface-container-lowest p-8 shadow-sm border border-outline-variant/30 rounded-sm relative">
              <button 
                onClick={handleExport}
                className="absolute -top-4 -right-4 bg-primary text-on-primary p-3 rounded-full shadow-lg hover:scale-105 transition-all group"
                title="Export current view to CSV"
              >
                <span className="material-symbols-outlined text-xl">download</span>
              </button>
              <div className="text-center md:text-left">
                <div className="font-label text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Total RSVP Entries</div>
                <div className="font-headline text-4xl text-primary">{rsvps.length}</div>
              </div>
              <div className="w-px bg-outline-variant/30 h-full"></div>
              <div className="text-center md:text-left">
                <div className="font-label text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Total Expected Guests</div>
                <div className="font-headline text-4xl text-secondary">{totalGuests}</div>
              </div>
            </div>
          </header>

          {/* Controls Bar */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
              <input
                type="text"
                placeholder="Search by name or contact number..."
                className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border border-outline-variant/30 rounded-full font-body text-sm focus:outline-none focus:border-primary/50 transition-all text-primary"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              />
            </div>

            {/* Event Filter */}
            <div className="relative">
              <select
                className="w-full px-4 py-4 bg-surface-container-lowest border border-outline-variant/30 rounded-full font-label text-[10px] uppercase tracking-widest text-on-surface-variant appearance-none focus:outline-none focus:border-primary/50 transition-all cursor-pointer"
                value={eventFilter}
                onChange={(e) => { setEventFilter(e.target.value); setCurrentPage(1); }}
              >
                <option value="all">Everywhere</option>
                {uniqueEvents.map(evt => (
                  <option key={evt} value={evt}>{evt}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">filter_list</span>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                className="w-full px-4 py-4 bg-surface-container-lowest border border-outline-variant/30 rounded-full font-label text-[10px] uppercase tracking-widest text-on-surface-variant appearance-none focus:outline-none focus:border-primary/50 transition-all cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="date-desc">Latest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="alpha-asc">Alphabetical (A-Z)</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">sort_by_alpha</span>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-surface-container-lowest shadow-2xl rounded-sm overflow-hidden border border-outline-variant/20">
            {loading ? (
              <div className="py-40 text-center space-y-4">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Syncing Registry...</p>
              </div>
            ) : error ? (
              <div className="py-40 text-center text-secondary space-y-4">
                <span className="material-symbols-outlined text-4xl">error</span>
                <p className="font-label text-[10px] uppercase tracking-[0.2em]">{error}</p>
              </div>
            ) : filteredRsvps.length === 0 ? (
              <div className="py-40 text-center text-on-surface-variant space-y-4">
                <span className="material-symbols-outlined text-4xl">search_off</span>
                <p className="font-body italic text-lg text-surface-dim">No matching guests found.</p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-outline-variant/30">
                        <th className="p-6 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Entry Date</th>
                        <th className="p-6 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Guest Name</th>
                        <th className="p-6 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">The Celebration</th>
                        <th className="p-6 font-label text-[10px] uppercase tracking-widest text-on-surface-variant text-center">Count</th>
                        <th className="p-6 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Contact info</th>
                        <th className="p-6 font-label text-[10px] uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                      {paginatedRsvps.map((rsvp, idx) => (
                        <tr key={idx} className="hover:bg-surface-container/30 transition-colors group/row">
                          <td className="p-6 font-body text-xs text-on-surface-variant font-medium">
                            {new Date(rsvp.timestamp).toLocaleDateString()}
                          </td>
                          <td className="p-6">
                            <div className="font-headline text-xl text-primary group-hover/row:translate-x-1 transition-transform">{rsvp.fullName}</div>
                          </td>
                          <td className="p-6">
                              <div className="flex flex-wrap gap-2">
                                {rsvp.event.split(" | ").map((evt, eIdx) => (
                                  <span key={eIdx} className={`px-3 py-1 font-label text-[9px] uppercase tracking-widest rounded-full border ${
                                    evt.includes('Attending') 
                                      ? 'bg-primary/5 text-primary border-primary/20' 
                                      : 'bg-secondary/5 text-secondary border-secondary/10 opacity-70'
                                  }`}>
                                    {evt}
                                  </span>
                                ))}
                              </div>
                          </td>
                          <td className="p-6 text-center">
                            <div className="font-headline text-2xl text-secondary">{rsvp.guestCount}</div>
                          </td>
                          <td className="p-6 space-y-1">
                            <div className="font-body text-xs text-on-surface-variant font-semibold">
                              {rsvp.contactNumber || "No Number"}
                            </div>
                            <div className="font-body text-[11px] text-on-surface-variant opacity-60 italic">
                              {rsvp.email}
                            </div>
                          </td>
                          <td className="p-6 text-right">
                            {confirmDelete === rsvp.timestamp ? (
                              <div className="flex items-center justify-end gap-2 animate-in fade-in slide-in-from-right-2">
                                <button
                                  onClick={() => setConfirmDelete(null)}
                                  className="px-3 py-1 font-label text-[9px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                                  disabled={isDeleting === rsvp.timestamp}
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={() => handleDelete(rsvp.timestamp)}
                                  className="px-3 py-1 bg-secondary text-on-secondary font-label text-[9px] uppercase tracking-widest rounded-full shadow-sm hover:scale-105 transition-all"
                                  disabled={isDeleting === rsvp.timestamp}
                                >
                                  {isDeleting === rsvp.timestamp ? 'Deleting...' : 'Confirm'}
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setConfirmDelete(rsvp.timestamp)}
                                className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary/5 rounded-full transition-all group/delete"
                                title="Delete Entry"
                              >
                                <span className="material-symbols-outlined text-lg group-hover/delete:scale-110 transition-transform">delete</span>
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Footer */}
                <div className="p-6 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-6 bg-surface-container-low/30">
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Showing {startIndex + 1} - {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} Entries
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => prev - 1)}
                      className="p-2 text-primary disabled:opacity-30 hover:bg-primary/5 rounded-full transition-all"
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 rounded-full font-label text-[10px] transition-all ${
                            currentPage === page 
                              ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' 
                              : 'text-on-surface-variant hover:bg-primary/5'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => prev + 1)}
                      className="p-2 text-primary disabled:opacity-30 hover:bg-primary/5 rounded-full transition-all"
                    >
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 text-center">
              <p className="font-body text-xs text-on-surface-variant opacity-50 italic">
                All data is fetched in real-time from the Neha Karthik 2026 Registry.
              </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
