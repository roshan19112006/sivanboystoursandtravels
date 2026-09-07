# Sivan Boys Tours & Travels — Official Production Website

> **Established in 2005** | Owner: **R Ramesh** | Location: **Rameswaram, Tamil Nadu, India**  
> Phone & WhatsApp: **8838478024** | Email: **sivanboystravelsrmm@gmail.com**

---

## 🌟 Production Ready & Vercel Deployable
This website is built with **React**, **Vite**, **Tailwind CSS**, and **React Router DOM**. It is fully configured for deployment on **Vercel** with client-side routing rewrites (`vercel.json`), zero build errors, rich Local/Geo SEO, structured JSON-LD schemas, and an open GitHub asset management architecture.

---

## 📸 How to Add New Gallery Images (GitHub Workflow)

This gallery architecture is specifically built so you can **add images directly through GitHub without touching complex React components or needing any third-party database / CMS**.

### Step-by-Step Instructions:

1. **Add Your Image File**:
   - Save your image (preferably `.webp` or `.jpg`/`.png`) in the appropriate category folder under `public/images/gallery/`:
     - `public/images/gallery/rameswaram/`
     - `public/images/gallery/tamil-nadu/`
     - `public/images/gallery/andhra-pradesh/`
     - `public/images/gallery/kerala/`
     - `public/images/gallery/karnataka/`
     - `public/images/gallery/temples/`
     - `public/images/gallery/pilgrimage/`
     - `public/images/gallery/vehicles/`
     - `public/images/gallery/rooms/`
     - `public/images/gallery/tour-moments/`
   - Example filename: `pamban-bridge-sunset.webp`

2. **Register the Image in `src/data/galleryData.js`**:
   Open `src/data/galleryData.js` and add a new item into the `galleryData` array:
   ```javascript
   {
     id: "rameswaram-pamban-sunset-01",
     src: "/images/gallery/rameswaram/pamban-bridge-sunset.webp",
     title: "Pamban Bridge Sunset",
     category: "Rameswaram", // Choose category matching the filter bar
     alt: "Sunset view over Pamban Sea Bridge in Rameswaram Tamil Nadu",
     location: "Pamban, Rameswaram",
     featured: false // Set to true if you want it shown on the homepage preview
   },
   ```

3. **Commit & Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add new Pamban sunset photo to gallery"
   git push origin main
   ```

4. **Vercel Auto-Deployment**:
   Vercel will immediately detect the push, rebuild, and publish your new photo live on the website within seconds. No database, Cloudinary, or external image subscription required!

---

## 🚀 Local Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🗺️ Key Routes
- `/`: Homepage (Hero, Trust metrics, Core Services, Popular Packages, Rameswaram Highlights, Vehicles Preview, Travel Destinations, Gallery Preview, Why Choose Us, FAQs, Travel Enquiry CTA, Room Enquiry CTA, Contact)
- `/gallery`: Filterable Gallery with Lightbox modal and smooth category filtering
- `/packages`: Complete tour packages directory
- `/packages/rameswaram`: Dedicated Rameswaram sightseeing & temple route
- `/packages/andhra-pradesh`: Tirupati & Srisailam pilgrimage
- `/packages/kanchipuram`: Kanchipuram temple & silk tour
- `/packages/kumbakonam`: Kumbakonam Navagraha tour
- `/packages/kodaikanal`: Kodaikanal hill getaway
- `/packages/madurai`: Madurai Meenakshi Amman tour
- `/packages/kanyakumari`: Kanyakumari triple sea confluence tour
- `/packages/kerala`: Kovalam, Poovar & Kerala beach tour
- `/packages/other-state-tours`: Custom South India outstation packages
- `/vehicles`: Detailed vehicle fleet (Sedan, SUV, 7 Seater, 12 Seater, Tempo Traveller, Tourist Van, Buses)
- `/faq`: Comprehensive AEO / FAQ page
- `/enquiry`: Separate tabs for Travel Enquiry and Room Enquiry
- `/about`: Agency heritage since 2005
- `/contact`: Direct contact details, WhatsApp, and phone links

---

## 🔍 SEO & AEO Optimization Summary
- **Local Business JSON-LD**: Embedded schema for `LocalBusiness` and `TravelAgency` containing business name, telephone, email, city (Rameswaram), state (Tamil Nadu), country (IN), and founding year (2005).
- **FAQPage JSON-LD**: Embedded schema on the FAQ page for Answer Engine Optimization.
- **Sitemap & Robots**: Full `sitemap.xml` and `robots.txt` in `public/`.
- **Open Graph & Twitter Cards**: Full social sharing metadata with responsive preview images.
- **No Keyword Stuffing**: High-intent search terms naturally embedded across titles, H1s, body copy, and FAQ accordions.
