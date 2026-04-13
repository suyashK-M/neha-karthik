"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { submitRSVP, checkDuplicateRSVP, checkInvitation } from "./actions";

const EVENT_INFO: Record<string, { date: string; time?: string; location: string }> = {
  "Devara Samradhane": { date: "July 6th", time: "9:00 AM onwards", location: "Ekadanta Mandira" },
  "Devara Samaradhane": { date: "July 6th", time: "9:00 AM onwards", location: "Ekadanta Mandira" },
  "Welcome Lunch": { date: "July 10th", location: "Zinnia, Sheraton" },
  "Sangeet & Afterparty": { date: "July 10th", location: "Scarlet Ballroom" },
  "Mehendi followed by Lunch": { date: "July 11th", location: "Party Lawn" },
  "Varapuje": { date: "July 11th", location: "Zinnia" },
  "Wedding": { date: "July 12th", location: "Convention Center" },
  "Reception": { date: "July 12th", location: "Scarlet Ballroom" }
};

export default function RSVP() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "duplicate">("idle");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [invitedEvents, setInvitedEvents] = useState<string[] | null>(null);
  const [lookupMessage, setLookupMessage] = useState<string | null>(null);
  const [eventResponses, setEventResponses] = useState<Record<string, 'attending' | 'declined'>>({});
  const [generalAttendance, setGeneralAttendance] = useState<'attending' | 'declined'>('attending');
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    dietaryChoice: "no",
    dietaryDetails: "",
    allergiesChoice: "no",
    allergiesDetails: "",
    accessibilityChoice: "no",
    accessibilityDetails: "",
    hasAdditionalGuests: "no",
    additionalGuests: [] as { id: string; firstName: string; lastName: string }[]
  });

  const handleLookup = async (identifier: string) => {
    if (!identifier || identifier.length < 5) return;
    
    setIsVerifying(true);
    setLookupMessage(null);
    try {
      // 1. Build a list of variants to try, in priority order
      const isPhone = !identifier.includes('@');
      const variants: string[] = [];

      if (isPhone) {
        const digitsOnly = identifier.replace(/\D/g, '');
        const last10 = digitsOnly.slice(-10);
        // Try all relevant formats — stop at first match
        if (digitsOnly) variants.push(digitsOnly);
        if (last10 && last10 !== digitsOnly) variants.push(last10);
        if (last10.length === 10) {
          variants.push(`91${last10}`);  // e.g. 919902001470
          variants.push(`+91${last10}`); // e.g. +919902001470
        }
      } else {
        variants.push(identifier);
      }

      // 2. Try each variant until we get a match
      let result = { success: false, found: false, invitedEvents: [] as string[] };
      for (const q of variants) {
        const attempt = await checkInvitation(q);
        if (attempt.success && attempt.found) {
          result = attempt;
          break;
        }
        if (attempt.success) result = attempt; // keep last valid response
      }

      if (result.success && result.found) {
        if ((result as any).alreadyRSVPd) {
          setStatus("duplicate");
          return;
        }
        setInvitedEvents(result.invitedEvents);
        setLookupMessage("Invitation found!");
        
        // Initialize all as attending by default
        const initialResponses: Record<string, 'attending' | 'declined'> = {};
        result.invitedEvents.forEach((evt: string) => {
          initialResponses[evt] = 'attending';
        });
        setEventResponses(initialResponses);
      } else if (result.success && !result.found) {
        setInvitedEvents(null);
        setLookupMessage("We couldn't find an invitation for this info. Please check your details or contact us.");
      }
    } catch (error) {
      console.error("Lookup error:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  // Auto-lookup with debounce (Contact Number Only)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.contactNumber && formData.contactNumber.length >= 10) {
        handleLookup(formData.contactNumber);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [formData.contactNumber]);

  const addGuest = () => {
    setFormData(prev => ({
      ...prev,
      additionalGuests: [
        ...prev.additionalGuests,
        { id: Math.random().toString(36).substr(2, 9), firstName: "", lastName: "" }
      ]
    }));
  };

  const removeGuest = (id: string) => {
    setFormData(prev => ({
      ...prev,
      additionalGuests: prev.additionalGuests.filter(g => g.id !== id)
    }));
  };

  const updateGuest = (id: string, field: "firstName" | "lastName", value: string) => {
    setFormData(prev => ({
      ...prev,
      additionalGuests: prev.additionalGuests.map(g => 
        g.id === id ? { ...g, [field]: value } : g
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Prepare payload
      const restrictions = [
        formData.dietaryChoice === "yes" ? `Dietary: ${formData.dietaryDetails}` : "",
        formData.allergiesChoice === "yes" ? `Allergies: ${formData.allergiesDetails}` : "",
        formData.accessibilityChoice === "yes" ? `Accessibility: ${formData.accessibilityDetails}` : ""
      ].filter(Boolean).join(" | ");

      const guestNames = formData.additionalGuests
        .map(g => `${g.firstName} ${g.lastName}`.trim())
        .filter(Boolean)
        .join(", ");

      const isGeneralGuest = invitedEvents && invitedEvents.length === 0;
      
      const eventSummary = isGeneralGuest 
        ? `General Attendance: ${generalAttendance === 'attending' ? 'Attending' : 'Declining'}`
        : Object.entries(eventResponses)
            .map(([event, status]) => `${event}: ${status === 'attending' ? 'Attending' : 'Declining'}`)
            .join(" | ");

      const isOverallAttending = isGeneralGuest 
        ? generalAttendance === 'attending'
        : Object.values(eventResponses).some(s => s === 'attending');

      const payload = {
        date: new Date().toLocaleString(),
        event: eventSummary,
        fullName: formData.fullName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        guestCount: isOverallAttending ? (1 + formData.additionalGuests.length).toString() : "0",
        attendance: isOverallAttending ? "attending" : "declined",
        dietary: formData.dietaryChoice === "yes" ? formData.dietaryDetails : "None",
        additionalGuests: guestNames,
        accessibility: formData.accessibilityChoice === "yes" ? formData.accessibilityDetails : "None",
        foodAllergies: formData.allergiesChoice === "yes" ? formData.allergiesDetails : "None"
      };

      // Submit
      const result = await submitRSVP(payload);
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("RSVP Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-32 pb-24 px-6 transition-all duration-1000">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <section className="text-center mb-20">
              <span className="font-label text-secondary text-xs tracking-[0.3em] uppercase">
                July 12, 2026 • Bangalore
              </span>
            <h1 className="font-headline text-6xl md:text-8xl italic text-primary leading-tight">
              Kindly Respond
            </h1>
            <div className="mt-8 flex justify-center items-center gap-4">
              <span className="h-px w-12 bg-outline-variant opacity-30"></span>
              <span className="font-headline text-2xl text-on-surface-variant">Neha & Karthik</span>
              <span className="h-px w-12 bg-outline-variant opacity-30"></span>
            </div>
            
            <button
              onClick={() => setIsItineraryOpen(true)}
              className="mt-12 group flex items-center justify-center gap-3 mx-auto px-8 py-3 bg-surface-container-low border border-outline-variant/30 rounded-full hover:bg-primary/5 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-primary text-lg">event_note</span>
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">See Wedding Schedule</span>
            </button>
          </section>

          {/* RSVP Form Canvas */}
          <div className="bg-surface-container-lowest p-12 md:p-20 shadow-[0_40px_100px_-20px_rgba(51,3,55,0.06)] relative overflow-hidden rounded-sm">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 p-8 text-outline-variant/20 select-none">
              <span className="material-symbols-outlined text-6xl">local_florist</span>
            </div>

            {status === "success" ? (
              <div className="py-20 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="material-symbols-outlined text-primary text-4xl">check</span>
                </div>
                <h2 className="font-headline text-5xl text-primary">Response Received</h2>
                <p className="font-body text-lg text-on-surface-variant italic max-w-md mx-auto">
                  Thank you for sharing your plans with us. We have successfully logged your RSVP and cannot wait to celebrate together!
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="font-label text-[10px] uppercase tracking-widest text-secondary border-b border-secondary pb-1"
                >
                  Add Another Response
                </button>
              </div>
            ) : status === "duplicate" ? (
              <div className="py-20 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="material-symbols-outlined text-secondary text-4xl">inventory_2</span>
                </div>
                <h2 className="font-headline text-5xl text-primary">Already Registered</h2>
                <p className="font-body text-lg text-on-surface-variant italic max-w-md mx-auto">
                  It looks like an RSVP has already been submitted for this contact number. If you need to update your response, please reach out to us directly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="font-label text-[10px] uppercase tracking-widest text-primary border-b border-primary pb-1"
                >
                  Back to Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Name Input */}
                  <div className="group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="input-underline w-full font-headline text-2xl placeholder:text-surface-dim placeholder:italic py-4 text-primary"
                      placeholder="e.g. Inaaya Gupta"
                      type="text"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-underline w-full font-headline text-2xl placeholder:text-surface-dim py-4 text-primary"
                      placeholder="hello@example.com"
                      type="email"
                    />
                  </div>

                  {/* Contact Number Input */}
                  <div className="group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">
                      Contact Number
                    </label>
                    <input
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      className="input-underline w-full font-headline text-2xl placeholder:text-surface-dim py-4 text-primary"
                      placeholder="e.g. +1 555-0123"
                      type="tel"
                    />
                    {isVerifying && formData.contactNumber && (
                      <span className="text-[10px] text-primary animate-pulse mt-1 block uppercase tracking-widest">Verifying Guest info...</span>
                    )}
                  </div>
                </div>

                {lookupMessage && (
                  <div className={`p-4 rounded-sm text-xs font-label tracking-wide uppercase ${invitedEvents && invitedEvents.length > 0 ? 'bg-primary/5 text-primary border border-primary/10' : 'bg-secondary/5 text-secondary border border-secondary/10'}`}>
                    {lookupMessage}
                  </div>
                )}

                {invitedEvents && invitedEvents.length > 0 && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="border-t border-outline-variant/20 pt-12">
                      <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-8 block">
                        Your Personalized Celebrations
                      </label>
                      <div className="space-y-6">
                        {invitedEvents.map(event => (
                          <div key={event} className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container-low/50 hover:bg-surface-container-low rounded-sm transition-all border border-transparent hover:border-primary/10">
                            <div>
                              <div className="flex items-center gap-3">
                                <h4 className="font-headline text-2xl text-primary">{event}</h4>
                                {EVENT_INFO[event] && (
                                  <span className="px-2 py-0.5 bg-primary/5 text-primary text-[9px] font-label uppercase tracking-widest rounded-sm border border-primary/10">
                                    {EVENT_INFO[event].date}
                                  </span>
                                )}
                              </div>
                              <p className="font-body text-xs text-on-surface-variant opacity-70 italic mt-1">
                                {EVENT_INFO[event]?.time ? `${EVENT_INFO[event].time} • ` : ''}
                                {eventResponses[event] === 'attending' ? 'You’re celebrating with us!' : 'You’ll be missed at this one.'}
                              </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-6 md:mt-0 bg-surface md:p-1 rounded-sm md:border border-outline-variant/30">
                              <button
                                type="button"
                                onClick={() => setEventResponses(prev => ({ ...prev, [event]: 'attending' }))}
                                className={`px-6 py-3 md:py-2 rounded-sm font-label text-[10px] uppercase tracking-widest transition-all ${
                                  eventResponses[event] === 'attending' 
                                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' 
                                    : 'text-on-surface-variant hover:bg-primary/5 bg-surface-container-low md:bg-transparent'
                                }`}
                              >
                                Attending
                              </button>
                              <button
                                type="button"
                                onClick={() => setEventResponses(prev => ({ ...prev, [event]: 'declined' }))}
                                className={`px-6 py-3 md:py-2 rounded-sm font-label text-[10px] uppercase tracking-widest transition-all ${
                                  eventResponses[event] === 'declined' 
                                    ? 'bg-secondary text-on-secondary shadow-lg shadow-secondary/20' 
                                    : 'text-on-surface-variant hover:bg-secondary/5 bg-surface-container-low md:bg-transparent'
                                }`}
                              >
                                Declining
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {invitedEvents && invitedEvents.length === 0 && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="border-t border-outline-variant/20 pt-12">
                      <div className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-primary/5 border border-primary/10 rounded-sm">
                        <div className="space-y-2">
                          <h4 className="font-headline text-3xl text-primary">Will you be attending?</h4>
                          <p className="font-body text-sm text-on-surface-variant italic">
                            {generalAttendance === 'attending' ? "We're so excited to have you!" : "We'll miss you!"}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 md:mt-0 bg-surface p-1 rounded-sm border border-outline-variant/20">
                          <button
                            type="button"
                            onClick={() => setGeneralAttendance('attending')}
                            className={`px-10 py-3 md:py-3 rounded-sm font-label text-[10px] uppercase tracking-widest transition-all ${
                              generalAttendance === 'attending' 
                                ? 'bg-primary text-on-primary shadow-xl shadow-primary/20' 
                                : 'text-on-surface-variant hover:bg-primary/5'
                            }`}
                          >
                            Accepting
                          </button>
                          <button
                            type="button"
                            onClick={() => setGeneralAttendance('declined')}
                            className={`px-10 py-3 md:py-3 rounded-sm font-label text-[10px] uppercase tracking-widest transition-all ${
                              generalAttendance === 'declined' 
                                ? 'bg-secondary text-on-secondary shadow-xl shadow-secondary/20' 
                                : 'text-on-surface-variant hover:bg-secondary/5'
                            }`}
                          >
                            Declining
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Conditional Fields: Only show if attending at least one event */}
                {(invitedEvents && invitedEvents.length === 0 ? generalAttendance === 'attending' : Object.values(eventResponses).some(s => s === 'attending')) && (
                  <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-outline-variant/20 pt-12">
                      {/* Dietary Choice */}
                      <div className="group">
                        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">
                          Do you have dietary restrictions and/or food allergies?
                        </label>
                        <select
                          name="dietaryChoice"
                          value={formData.dietaryChoice}
                          onChange={handleChange}
                          className="input-underline w-full font-headline text-2xl py-4 text-primary bg-transparent appearance-none"
                        >
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                        {formData.dietaryChoice === "yes" && (
                          <textarea
                            name="dietaryDetails"
                            value={formData.dietaryDetails}
                            onChange={handleChange}
                            className="input-underline w-full font-body text-base mt-4 placeholder:text-surface-dim py-4 text-on-surface resize-none"
                            placeholder="Please specify your dietary requirements..."
                            rows={2}
                          />
                        )}
                      </div>

                      {/* Other Allergies */}
                      <div className="group">
                        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">
                          Do you have other allergies (non-food related)?
                        </label>
                        <select
                          name="allergiesChoice"
                          value={formData.allergiesChoice}
                          onChange={handleChange}
                          className="input-underline w-full font-headline text-2xl py-4 text-primary bg-transparent appearance-none"
                        >
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                        {formData.allergiesChoice === "yes" && (
                          <textarea
                            name="allergiesDetails"
                            value={formData.allergiesDetails}
                            onChange={handleChange}
                            className="input-underline w-full font-body text-base mt-4 placeholder:text-surface-dim py-4 text-on-surface resize-none"
                            placeholder="Please specify any other allergies..."
                            rows={2}
                          />
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Accessibility Choice */}
                      <div className="group">
                        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">
                          Do you have any accessibility needs?
                        </label>
                        <select
                          name="accessibilityChoice"
                          value={formData.accessibilityChoice}
                          onChange={handleChange}
                          className="input-underline w-full font-headline text-2xl py-4 text-primary bg-transparent appearance-none"
                        >
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                        {formData.accessibilityChoice === "yes" && (
                          <textarea
                            name="accessibilityDetails"
                            value={formData.accessibilityDetails}
                            onChange={handleChange}
                            className="input-underline w-full font-body text-base mt-4 placeholder:text-surface-dim py-4 text-on-surface resize-none"
                            placeholder="Please specify your accessibility needs..."
                            rows={2}
                          />
                        )}
                      </div>

                      {/* Additional Guests Radio */}
                      <div className="group bg-primary/5 p-8 rounded-sm">
                        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-6 block">
                          Are there additional guests in your party?
                        </label>
                        <div className="flex gap-8">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="hasAdditionalGuests"
                              value="yes"
                              checked={formData.hasAdditionalGuests === "yes"}
                              onChange={handleChange}
                              className="w-4 h-4 text-primary border-outline focus:ring-primary appearance-none border rounded-full checked:bg-primary transition-all"
                            />
                            <span className="font-body text-sm">Yes</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="hasAdditionalGuests"
                              value="no"
                              checked={formData.hasAdditionalGuests === "no"}
                              onChange={handleChange}
                              className="w-4 h-4 text-primary border-outline focus:ring-primary appearance-none border rounded-full checked:bg-primary transition-all"
                            />
                            <span className="font-body text-sm">No</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Additional Guests Dynamic List */}
                    {formData.hasAdditionalGuests === "yes" && (
                      <div className="space-y-12 border-t border-outline-variant/20 pt-12 animate-in fade-in slide-in-from-top-4">
                        <h3 className="font-headline text-3xl text-primary italic">Additional Guests</h3>
                        
                        <div className="space-y-8">
                          {formData.additionalGuests.map((guest, index) => (
                            <div key={guest.id} className="flex flex-col md:flex-row gap-6 items-end group/item">
                              <div className="flex-1 space-y-2">
                                <label className="font-label text-[10px] uppercase tracking-widest text-secondary">
                                  Guest {index + 1} First Name
                                </label>
                                <input
                                  value={guest.firstName}
                                  onChange={(e) => updateGuest(guest.id, "firstName", e.target.value)}
                                  className="input-underline w-full font-headline text-xl py-2 text-primary"
                                  placeholder="First Name"
                                  required
                                />
                              </div>
                              <div className="flex-1 space-y-2">
                                <label className="font-label text-[10px] uppercase tracking-widest text-secondary">
                                  Guest {index + 1} Last Name
                                </label>
                                <input
                                  value={guest.lastName}
                                  onChange={(e) => updateGuest(guest.id, "lastName", e.target.value)}
                                  className="input-underline w-full font-headline text-xl py-2 text-primary"
                                  placeholder="Last Name"
                                  required
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => removeGuest(guest.id)}
                                className="p-2 text-secondary hover:text-primary transition-colors mb-2"
                                title="Remove Guest"
                              >
                                <span className="material-symbols-outlined">delete_outline</span>
                              </button>
                            </div>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={addGuest}
                          className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary border border-primary/20 px-6 py-3 rounded-sm hover:bg-primary/5 transition-all"
                        >
                          <span className="material-symbols-outlined text-sm">person_add</span>
                          Add Another Guest
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* CTA Section - Only visible if invitation found */}
                {invitedEvents !== null && (
                  <div className="pt-8 flex flex-col items-center space-y-6">
                    <button
                      disabled={status === "submitting"}
                      className="w-full md:w-auto px-16 py-5 bg-linear-to-r from-primary to-primary-container text-on-primary font-label text-xs uppercase tracking-[0.2em] rounded-sm hover:opacity-95 transition-all shadow-xl shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                    >
                      {status === "submitting" ? "Checking Registry..." : "Confirm Response"}
                    </button>
                    {status === "error" && (
                      <p className="text-secondary font-label text-[10px] uppercase tracking-widest animate-pulse">
                        Something went wrong. Please try again or reach out to us directly.
                      </p>
                    )}
                    <p className="font-headline text-lg italic text-secondary text-center">
                      Please respond by May 15th, 2026
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Asymmetric Editorial Detail */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-4/5 bg-surface-container-low overflow-hidden rounded-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXPvymZxi0khFqvnGlVXmCzdZ764E2QFO2XqzqRMEvImMy5B2dS9LoUD5SoRbVTTDvy_xZRivinpi872dPMll8aAr3O54pTr2C5nTZn9Z4NqopKwv-B6BjGK0E5LhjZCRw2fporY-mvpU9aPfnZZKJb3l-G_5tJLkRKGM0Atir6_DimhOBS0OULW1HymJIR4U8AeipVZihqZ8pV_3J0X1JCewUmonHgB3TM-qHCKO4yBa9RrUdgUjDcnihgFBKcFYeSl8RILQnjQ"
                alt="Elegant wedding table setting"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:-ml-20 z-10 p-10 bg-surface-container-lowest shadow-2xl border-l-4 border-secondary rounded-sm">
              <h3 className="font-headline text-3xl text-primary italic mb-4">A Note on Travel</h3>
              <p className="font-body text-sm leading-relaxed text-on-surface-variant mb-6">
                For our guests traveling from afar, we have curated a special guide for your stay in Bangalore. From heritage walks to the finest filter coffee spots.
              </p>
              <Link
                href="/guide"
                className="inline-block font-label text-[10px] uppercase tracking-widest text-secondary border-b-2 border-secondary pb-1 hover:text-primary hover:border-primary transition-colors"
              >
                Explore the Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Itinerary Modal Overlay */}
      {isItineraryOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-surface/80 backdrop-blur-md animate-in fade-in duration-500">
          <div className="bg-surface-container-lowest w-full max-w-2xl h-[80vh] flex flex-col shadow-2xl rounded-sm border border-outline-variant/30 overflow-hidden relative">
            {/* Modal Header */}
            <div className="p-8 border-b border-outline-variant/10 flex items-center justify-between bg-surface-container-low">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary block mb-1">Wedding Itinerary</span>
                <h3 className="font-headline text-4xl text-primary leading-tight">July 2026</h3>
              </div>
              <button 
                onClick={() => setIsItineraryOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-dim transition-colors group"
              >
                <span className="material-symbols-outlined text-on-surface-variant group-hover:rotate-90 transition-transform">close</span>
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
              {Object.entries(EVENT_INFO).filter(([name]) => name !== "Devara Samaradhane").map(([name, info]) => (
                <div key={name} className="flex gap-8 group/item">
                  <div className="flex flex-col items-center pt-2">
                    <span className="font-headline text-3xl text-secondary leading-none">{info.date.split(' ')[1].replace(/\D/g, '')}</span>
                    <span className="font-label text-[8px] uppercase tracking-tighter opacity-40">{info.date.split(' ')[0]}</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="font-headline text-2xl text-primary group-hover/item:text-secondary transition-colors">{name}</h4>
                    <p className="font-body text-sm text-on-surface-variant italic">{info.time}</p>
                    <div className="flex items-start gap-2 pt-2">
                      <span className="material-symbols-outlined text-[14px] text-secondary/60 mt-0.5">location_on</span>
                      <p className="font-label text-[10px] uppercase tracking-widest opacity-60 leading-relaxed max-w-xs">{info.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-8 bg-surface-container-low border-t border-outline-variant/10 text-center">
              <p className="font-body text-xs text-on-surface-variant opacity-60">Venue details are also available on the <Link href="/events" className="text-secondary border-b border-secondary/30 pb-0.5">Events Page</Link></p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
