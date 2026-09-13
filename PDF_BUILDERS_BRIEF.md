# PDF Builders — Website Brief (V1)

Consolidated requirements for the new PDF Builders website, from Brandon's emails, the three reference sites, and Ryan's V1 scope.

## Business
- **Company:** PDF Builders, LLC — "Patio · Deck · Fence Builders"
- **What they do:** Custom decks, patios, and complete outdoor living spaces
- **Market:** Central Ohio (Columbus area), based in New Albany
- **Contact:** (614) 937-9000 · mobile (614) 843-2442 · brandon@pdfbuilders.com · 39 East Main St Suite 119, New Albany, OH 43054
- **Socials:** facebook.com/patiodeckfence · twitter.com/PDFBuilders · tiktok @pdf.builders

## Brand direction & goal
- Clean, professional, **higher-end/premium** feel — not busy or generic.
- Sell the **complete backyard transformation**, not individual services. The homeowner is the subject of the copy.
- Core message: **CONSULT · DESIGN · BUILD** (design comes before construction).
- Must **build trust, showcase quality, educate, and convert** the right visitors into qualified leads.
- Photography should look bright, clean, crisp, consistent (enhance later; authentic).

## Family narrative (About)
- **Family-owned, father-and-son** business (Brandon + son Donovan).
- Decades of outdoor-living experience; ran a prior outdoor-living company ~10 yrs in the 2000s, relaunched as PDF Builders in 2016. *(Kept light — '08-crash detail intentionally omitted.)*
- Emphasize **honesty** and **loyal / repeat customers** as the trust throughline.
- Family photos (Brandon, Donovan, family) — placeholders for now.
- Uses Brandon's "Trust Is the Foundation of Every Great Project" copy.

## Reference sites (what to borrow)
- **Peachtree Decks & Porches** — premium look; design positioned as part of the product; "see it before we build it" / 3D design.
- **Dutchmen Decks** — clean, simple guided journey; clear CTAs; city pages.
- **All Decked Out (513)** — questionnaire *is* the primary CTA; education/blog content; owner walkthrough videos; FAQ.

## Information architecture
Nav: **Projects · Services · Our Process · About · Reviews · Resources · Start Your Project (CTA)**
- Homepage, Services overview + per-service pages, Process, About, Reviews, Projects (case studies), Resources (articles), Service Areas + per-city pages, Investment.

## Homepage sections (in order)
1. Hero — "Your Backyard. Designed Around You. Built to Last." + Start Your Project / View Our Work
2. Trust bar — A+ BBB · Techo-Bloc Pro · Unilock · TimberTech · Deckorators · Everlast
3. Consult · Design · Build
4. "What Do You Want to Build?" tiles + large Complete Backyard Transformations tile
5. From Idea to Backyard — Before → 3D Design → Completed
6. Owner video (Brandon/Donovan) — placeholder
7. Reviews
8. Why PDF Builders — "One Team. The Complete Backyard." + family-owned / honesty / repeat customers
9. Investment education teaser
10. Start Your Project CTA

## Services (each is its own SEO landing page)
Composite Decks · Paver Patios · Covered Outdoor Living · Screen Rooms · Pergolas & Pavilions · Outdoor Kitchens · Fireplaces & Fire Pits · Fencing · Landscape Lighting · **Complete Backyard Transformations**

## Credentials (footer + trust bar)
A+ BBB · Techo-Bloc Pro · Unilock Authorized Contractor · TimberTech · Deckorators · Everlast Professional Installer. *(Brandon to supply official logos + exact names.)*

## Start Your Project questionnaire (V1 = chatbot)
For V1 the multi-step questionnaire is handled by Brandon's **AI chatbot** (`c7231e21-5db0-460c-95a9-ad8670a9d6b9`). Every primary CTA triggers the chatbot. Intended fields (for the future native form / chatbot flow), adapted from All Decked Out — PDF does more pavers, less stamped concrete, and **no repairs**:
- Contact: name(s) of decision-makers, address, email, phone
- What are you interested in? (Composite Deck, Paver Patio, Covered Structure, Screen Room, Outdoor Kitchen, Fireplace/Fire Pit, Fence, Lighting, Complete Backyard Transformation)
- How you use the space now / what you'd like to change
- Ideal completion timeline
- Investment range (provide ranges, not a blank box)
- Existing-backyard photos + inspiration photos (upload)
- **How did you hear about PDF Builders?** (Google, Facebook, Instagram, Referral, Previous Customer, Yard Sign/Truck, Home Show, Other)

## Investment ranges (PLACEHOLDER — set from real JobTread numbers)
- Paver Patio: starting ~$10,000+
- Composite Deck: $30,000–$80,000+
- Covered Outdoor Living: $60,000–$150,000+
- Complete Backyard Transformations: $110,000–$180,000+

## Local SEO city pages
Westerville · Dublin · Powell · Delaware · New Albany · Upper Arlington · Hilliard (real projects/testimonials per city over time — not filler).

## Resources (starter articles)
Pavers vs. Concrete · Composite vs. Pressure-Treated Wood · Paver Patio Cost in Columbus · What Happens During a Consultation (expand over time).

## Post-launch / ongoing
Site won't be perfect on day one. Content is **data-driven** (`lib/*-data.js`) so Brandon can keep sending project photos, videos, testimonials, certifications, city content, and real pricing to drop in after launch. Placeholders are used for all imagery/logos until real assets arrive.

## V1 build notes
- Built on the existing Next.js 16 / React 19 / Tailwind template.
- CTA → chatbot via widget embed in `app/(marketing)/layout.jsx` + `postMessage` (`components/get-quote-button.jsx`, `lib/chatbot-utils.js`).
- Native contact form retained on `/contact` as a secondary path.
- `app/(demo)/*` (Google-Places demo) is not part of this deliverable.
