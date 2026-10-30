"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, BedDouble, Search, CheckCircle2, Phone, X } from "lucide-react";
import { HOTEL_INFO, ROOMS_DATA } from "@/data/content";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("2026-10-29");
  const [checkOut, setCheckOut] = useState("2026-10-30");
  const [guests, setGuests] = useState("2 Adults");
  const [selectedRoom, setSelectedRoom] = useState("Any Available Room");
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div id="booking-bar" className="relative z-30 -mt-12 sm:-mt-16 mb-16 sm:mb-24 px-4 sm:px-6">
      <div className="max-w-[1140px] mx-auto">
        {/* Desktop & Tablet Booking Bar */}
        <div className="bg-[#FDFBF5] rounded-2xl md:rounded-full border border-[#4A2E22]/15 shadow-xl p-3 sm:p-4 transition-all">
          <form
            onSubmit={handleSubmit}
            className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 items-center gap-2 lg:gap-4"
          >
            {/* Check-in Date */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#FBF5E9] transition-colors border-r border-[#4A2E22]/10 last:border-0">
              <Calendar className="w-5 h-5 text-[#B8893B] shrink-0" />
              <div className="text-left w-full">
                <label
                  htmlFor="checkInInput"
                  className="block text-[0.6875rem] uppercase tracking-wider text-[#B8893B] font-semibold"
                >
                  Check-in
                </label>
                <input
                  id="checkInInput"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-sm font-medium text-[#4A2E22] focus:outline-none w-full cursor-pointer"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#FBF5E9] transition-colors border-r border-[#4A2E22]/10 last:border-0">
              <Calendar className="w-5 h-5 text-[#B8893B] shrink-0" />
              <div className="text-left w-full">
                <label
                  htmlFor="checkOutInput"
                  className="block text-[0.6875rem] uppercase tracking-wider text-[#B8893B] font-semibold"
                >
                  Check-out
                </label>
                <input
                  id="checkOutInput"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-sm font-medium text-[#4A2E22] focus:outline-none w-full cursor-pointer"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#FBF5E9] transition-colors border-r border-[#4A2E22]/10 last:border-0">
              <Users className="w-5 h-5 text-[#B8893B] shrink-0" />
              <div className="text-left w-full">
                <label
                  htmlFor="guestsSelect"
                  className="block text-[0.6875rem] uppercase tracking-wider text-[#B8893B] font-semibold"
                >
                  Guests
                </label>
                <select
                  id="guestsSelect"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-sm font-medium text-[#4A2E22] focus:outline-none w-full cursor-pointer"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="Family / 4+ Guests">Family (4+ Guests)</option>
                </select>
              </div>
            </div>

            {/* Room Category */}
            <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#FBF5E9] transition-colors border-r border-[#4A2E22]/10 last:border-0">
              <BedDouble className="w-5 h-5 text-[#B8893B] shrink-0" />
              <div className="text-left w-full">
                <label
                  htmlFor="roomSelect"
                  className="block text-[0.6875rem] uppercase tracking-wider text-[#B8893B] font-semibold"
                >
                  Room Tier
                </label>
                <select
                  id="roomSelect"
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="bg-transparent text-sm font-medium text-[#4A2E22] focus:outline-none w-full cursor-pointer"
                >
                  <option value="Any Available Room">Any Available Room</option>
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.name}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Check Availability Gold Pill */}
            <div className="flex justify-end pl-2">
              <button
                type="submit"
                className="btn-primary w-full !py-3.5 !px-6 text-sm font-medium shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <Search className="w-4 h-4" />
                <span>Check Availability</span>
              </button>
            </div>
          </form>

          {/* Mobile Collapsed / Expandable View */}
          <div className="md:hidden">
            {!mobileExpanded ? (
              <div className="flex items-center justify-between gap-3 p-1">
                <div className="text-left pl-2">
                  <p className="text-xs uppercase tracking-wider text-[#B8893B] font-medium">
                    Reserve Your Stay
                  </p>
                  <p className="text-sm font-medium text-[#4A2E22]">
                    Nedumbassery, Kochi
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileExpanded(true)}
                  className="btn-primary !py-2.5 !px-5 text-xs font-medium"
                >
                  Book Now
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div className="flex justify-between items-center pb-2 border-b border-[#4A2E22]/10">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#B8893B]">
                    Stay Details
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(false)}
                    className="text-xs text-[#6B5A4E] underline"
                  >
                    Minimize
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#FBF5E9] p-2.5 rounded-xl border border-[#4A2E22]/10">
                    <label className="block text-[0.625rem] uppercase text-[#B8893B]">Check-in</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-[#4A2E22]"
                    />
                  </div>
                  <div className="bg-[#FBF5E9] p-2.5 rounded-xl border border-[#4A2E22]/10">
                    <label className="block text-[0.625rem] uppercase text-[#B8893B]">Check-out</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-[#4A2E22]"
                    />
                  </div>
                </div>

                <div className="bg-[#FBF5E9] p-2.5 rounded-xl border border-[#4A2E22]/10">
                  <label className="block text-[0.625rem] uppercase text-[#B8893B]">Guests & Rooms</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent text-xs font-medium text-[#4A2E22]"
                  >
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                    <option value="3 Adults">3 Adults</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full py-3 text-xs font-medium">
                  Check Availability
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Availability Confirmation Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-[#FDFBF5] rounded-2xl border border-[#4A2E22]/15 shadow-2xl p-6 sm:p-8 text-[#4A2E22]"
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#4A2E22]/70 hover:text-[#4A2E22] rounded-full hover:bg-[#FBF5E9]"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#B8893B]/15 flex items-center justify-center text-[#B8893B]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="eyebrow">Direct Booking Guarantee</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight">Availability Verified</h3>
                </div>
              </div>

              <div className="bg-[#FBF5E9] rounded-xl p-4 mb-6 border border-[#4A2E22]/10 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B5A4E]">Check-in Date:</span>
                  <span className="font-medium">{checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B5A4E]">Check-out Date:</span>
                  <span className="font-medium">{checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B5A4E]">Party:</span>
                  <span className="font-medium">{guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B5A4E]">Preferred Tier:</span>
                  <span className="font-medium">{selectedRoom}</span>
                </div>
              </div>

              <p className="text-xs text-[#6B5A4E] mb-6 leading-relaxed">
                Rooms are currently open for your requested dates. For immediate guaranteed airport transit confirmation, airport shuttle coordination, or corporate group inquiries, connect directly with our 24/7 reservations team:
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, "")}`}
                  className="btn-secondary text-xs sm:text-sm text-center flex-1 py-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {HOTEL_INFO.contact.phone}</span>
                </a>
                <a
                  href={HOTEL_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs sm:text-sm text-center flex-1 py-3"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
