export const PHONE_NUMBER = "8838478024";
export const PHONE_NUMBER_INTL = "+918838478024";
export const DISPLAY_PHONE = "8838478024";
export const EMAIL_ADDRESS = "sivanboystravelsrmm@gmail.com";
export const OWNER_NAME = "R Ramesh";
export const ESTABLISHED_YEAR = "2005";
export const BUSINESS_NAME = "Sivan Boys Tours & Travels";
export const LOCATION = "Rameswaram, Ramanathapuram District, Tamil Nadu, India";

export function createWhatsAppUrl(message) {
  const cleanPhone = "91" + PHONE_NUMBER;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message.trim())}`;
}

export function buildTravelEnquiryMessage({ name, travelDate, passengers, destination, vehicleType, notes }) {
  return `Hello Sivan Boys Tours & Travels,
I would like to enquire about a travel service from Rameswaram.

• Name: ${name || 'Traveller'}
• Travel Date: ${travelDate || 'Flexible'}
• Number of Passengers: ${passengers || 'Not specified'}
• Destination / Tour: ${destination || 'Rameswaram Sightseeing'}
• Preferred Vehicle: ${vehicleType || 'Any suitable vehicle'}
• Additional Details: ${notes || 'Please share available options & itinerary.'}

Kindly provide details at your earliest convenience. Thank you!`;
}

export function buildRoomEnquiryMessage({ name, checkIn, checkOut, guests, roomType, notes }) {
  return `Hello Sivan Boys Tours & Travels,
I would like to enquire regarding Room / Accommodation Assistance in Rameswaram.

• Name: ${name || 'Traveller'}
• Check-in Date: ${checkIn || 'Not specified'}
• Check-out Date: ${checkOut || 'Not specified'}
• Number of Guests: ${guests || 'Not specified'}
• Room Preference: ${roomType || 'Standard AC / Non-AC'}
• Requirements: ${notes || 'Near Ramanathaswamy Temple / Accessible stay.'}

Please let me know availability and assistance options.`;
}

export function buildQuickPackageEnquiry(packageName) {
  return `Hello Sivan Boys Tours & Travels,
I am interested in your ${packageName} from Rameswaram.
Please provide the complete itinerary, recommended vehicle options, and availability.`;
}

export function buildVehicleEnquiry(vehicleTitle) {
  return `Hello Sivan Boys Tours & Travels,
I would like to enquire about hiring the ${vehicleTitle} for our travel from Rameswaram.
Please share availability and details.`;
}
