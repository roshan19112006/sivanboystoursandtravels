import React, { useState } from 'react';
import { MessageCircle, Phone, BedDouble, Compass, Send } from 'lucide-react';
import { 
  DISPLAY_PHONE, 
  createWhatsAppUrl, 
  buildTravelEnquiryMessage, 
  buildRoomEnquiryMessage 
} from '../utils/whatsapp';
import JsonLd from '../components/JsonLd';

export default function EnquiryPage() {
  const [activeTab, setActiveTab] = useState('travel');

  const [tName, setTName] = useState('');
  const [tDate, setTDate] = useState('');
  const [tPassengers, setTPassengers] = useState('4');
  const [tDestination, setTDestination] = useState('Rameswaram Sightseeing & Dhanushkodi');
  const [tVehicle, setTVehicle] = useState('AC Sedan');
  const [tNotes, setTNotes] = useState('');

  const [rName, setRName] = useState('');
  const [rCheckIn, setRCheckIn] = useState('');
  const [rCheckOut, setRCheckOut] = useState('');
  const [rGuests, setRGuests] = useState('2');
  const [rType, setRType] = useState('AC Room near Temple');
  const [rNotes, setRNotes] = useState('');

  const handleTravelSubmit = (e) => {
    e.preventDefault();
    const msg = buildTravelEnquiryMessage({
      name: tName,
      travelDate: tDate,
      passengers: tPassengers,
      destination: tDestination,
      vehicleType: tVehicle,
      notes: tNotes
    });
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    const msg = buildRoomEnquiryMessage({
      name: rName,
      checkIn: rCheckIn,
      checkOut: rCheckOut,
      guests: rGuests,
      roomType: rType,
      notes: rNotes
    });
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      <JsonLd type="LocalBusiness" />

      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#F8FAFC] py-12 text-center px-4 border-b border-sky-100">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Fast WhatsApp Assistance</span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Booking &amp; Enquiry</h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Submit your itinerary details or room requirements. We respond immediately with transparent pricing.
          </p>
        </div>
      </section>

      {/* Tabs & Form Container */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex rounded-xl bg-sky-100/70 p-1.5 mb-8 border border-sky-200 shadow-inner">
          <button
            onClick={() => setActiveTab('travel')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'travel' 
                ? 'bg-sky-600 text-white shadow-md' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Tour &amp; Taxi Enquiry</span>
          </button>
          <button
            onClick={() => setActiveTab('room')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'room' 
                ? 'bg-sky-600 text-white shadow-md' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BedDouble className="w-4 h-4" />
            <span>Room &amp; Stay Enquiry</span>
          </button>
        </div>

        {/* Travel Form */}
        {activeTab === 'travel' ? (
          <form onSubmit={handleTravelSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={tName}
                  onChange={(e) => setTName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Date of Travel</label>
                <input
                  type="date"
                  required
                  value={tDate}
                  onChange={(e) => setTDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Number of Passengers</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  required
                  value={tPassengers}
                  onChange={(e) => setTPassengers(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Vehicle</label>
                <select
                  value={tVehicle}
                  onChange={(e) => setTVehicle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
                >
                  <option value="AC Sedan (Dzire / Etios)">AC Sedan (Dzire / Etios) - 4 Seats</option>
                  <option value="Toyota Innova / Crysta">Toyota Innova / Crysta - 7 Seats</option>
                  <option value="Tempo Traveller 12-14 Seats">Tempo Traveller 12-14 Seats</option>
                  <option value="Tempo Traveller 18-20 Seats">Tempo Traveller 18-20 Seats</option>
                  <option value="Mini Coach / Tourist Bus">Mini Coach / Tourist Bus</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Destination / Plan</label>
              <select
                value={tDestination}
                onChange={(e) => setTDestination(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
              >
                <option value="Rameswaram Sightseeing & Dhanushkodi">Rameswaram Sightseeing &amp; Dhanushkodi</option>
                <option value="Rameswaram + Madurai Meenakshi Amman">Rameswaram + Madurai Meenakshi Amman</option>
                <option value="Rameswaram + Kanyakumari">Rameswaram + Kanyakumari</option>
                <option value="Rameswaram + Kodaikanal">Rameswaram + Kodaikanal</option>
                <option value="Tamil Nadu Navagraha & Temple Circuit">Tamil Nadu Navagraha &amp; Temple Circuit</option>
                <option value="Tirupati / Andhra Pradesh Tour">Tirupati / Andhra Pradesh Tour</option>
                <option value="Custom Outstation Tour">Custom Outstation Tour</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Additional Notes / Pickup Point</label>
              <textarea
                rows={3}
                placeholder="E.g., Pickup from Rameswaram Railway Station at 6 AM, 4 adults and 1 child"
                value={tNotes}
                onChange={(e) => setTNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Travel Enquiry via WhatsApp</span>
            </button>
          </form>
        ) : (
          /* Room Form */
          <form onSubmit={handleRoomSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={rName}
                  onChange={(e) => setRName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Number of Guests</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  required
                  value={rGuests}
                  onChange={(e) => setRGuests(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Check-in Date</label>
                <input
                  type="date"
                  required
                  value={rCheckIn}
                  onChange={(e) => setRCheckIn(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Check-out Date</label>
                <input
                  type="date"
                  required
                  value={rCheckOut}
                  onChange={(e) => setRCheckOut(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Accommodation Preference</label>
              <select
                value={rType}
                onChange={(e) => setRType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
              >
                <option value="AC Room near Temple">AC Room near Ramanathaswamy Temple</option>
                <option value="Non-AC Budget Room">Non-AC Budget Room</option>
                <option value="Deluxe Family Suite">Deluxe Family Suite</option>
                <option value="Group Dormitory / Bhavan">Group Dormitory / Bhavan</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Special Requirements</label>
              <textarea
                rows={3}
                placeholder="E.g., Need ground floor room for elderly parents, early morning check-in"
                value={rNotes}
                onChange={(e) => setRNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:ring-2 focus:ring-sky-500 focus:bg-white focus:outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Room Enquiry via WhatsApp</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
