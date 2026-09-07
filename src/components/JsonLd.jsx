import React from 'react';
import { PHONE_NUMBER_INTL, EMAIL_ADDRESS, BUSINESS_NAME } from '../utils/whatsapp';

export default function JsonLd({ type = "LocalBusiness", data = {} }) {
  const baseLocalBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    "name": BUSINESS_NAME,
    "image": "https://sivanboystravels.com/images/gallery/rameswaram/pamban-bridge-01.webp",
    "telephone": PHONE_NUMBER_INTL,
    "email": EMAIL_ADDRESS,
    "founder": {
      "@type": "Person",
      "name": "R Ramesh"
    },
    "foundingDate": "2005",
    "url": "https://sivanboystravels.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rameswaram",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.2876,
      "longitude": 79.3129
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "Place", "name": "Rameswaram" },
      { "@type": "Place", "name": "Ramanathapuram District" },
      { "@type": "Place", "name": "Tamil Nadu" },
      { "@type": "Place", "name": "South India" }
    ],
    "description": "Sivan Boys Tours & Travels, based in Rameswaram since 2005, provides Rameswaram sightseeing, temple pilgrimage tours, outstation taxi, and family & group travel services."
  };

  const jsonContent = type === "FAQPage" ? data : baseLocalBusiness;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonContent) }}
    />
  );
}
