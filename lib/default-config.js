/**
 * Site-wide configuration for PDF Builders.
 * Content here is intentionally easy to update after launch — Brandon can send
 * new reviews, project photos, and details and they drop straight in here.
 */
export const defaultConfig = {
    companyName: "PDF Builders",
    legalName: "PDF Builders, LLC",
    tagline: "Patio · Deck · Fence Builders",
    phoneNumber: "(614) 937-9000",
    mobileNumber: "(614) 843-2442",
    email: "brandon@pdfbuilders.com",
    region: "Central Ohio",
    city: "New Albany",
    state: "OH",
    address: "39 East Main St Suite 119, New Albany, OH 43054",
    hours: [
        { days: "Mon – Fri", time: "8:00 AM – 4:00 PM" },
        { days: "Saturday", time: "8:00 AM – 12:00 PM" },
        { days: "Sunday", time: "Closed" },
    ],
    socials: {
        facebook: "https://facebook.com/patiodeckfence",
        twitter: "https://twitter.com/PDFBuilders",
        tiktok: "https://www.tiktok.com/@pdf.builders",
    },
    rating: 5.0,
    reviewCount: 0,
    // Placeholder reviews — replace with real Google reviews.
    reviews: [
        {
            name: "The Andersons",
            location: "Westerville, OH",
            body: "From the first consultation, Brandon and his team laid out exactly what our backyard could become. The 3D design made the decision easy, and the finished composite deck and paver patio look incredible. Honest, on time, and no surprises.",
            rating: 5,
            img: "https://avatar.vercel.sh/anderson",
        },
        {
            name: "Mark R.",
            location: "Dublin, OH",
            body: "This is the second project PDF Builders has done for us and we wouldn't call anyone else. They treat your home like it's their own and the craftsmanship holds up year after year.",
            rating: 5,
            img: "https://avatar.vercel.sh/markr",
        },
        {
            name: "Jennifer & Cole",
            location: "Powell, OH",
            body: "They managed our entire outdoor living project — deck, covered pavilion, outdoor kitchen, and lighting — as one team. Communication was clear the whole way through and the result is a backyard we use every single evening.",
            rating: 5,
            img: "https://avatar.vercel.sh/jencole",
        },
        {
            name: "The Kellers",
            location: "New Albany, OH",
            body: "What stood out was the honesty. They told us what would last and what wasn't worth the money. A family business that actually stands behind their work.",
            rating: 5,
            img: "https://avatar.vercel.sh/keller",
        },
        {
            name: "David P.",
            location: "Delaware, OH",
            body: "Beautiful paver patio with a fire pit and privacy wall. The crew was respectful, cleaned up every day, and finished when they said they would. Highly recommend.",
            rating: 5,
            img: "https://avatar.vercel.sh/davidp",
        },
        {
            name: "Susan M.",
            location: "Upper Arlington, OH",
            body: "We've referred PDF Builders to three neighbors now. That should tell you everything. Premium materials, thoughtful design, and people you can trust.",
            rating: 5,
            img: "https://avatar.vercel.sh/susanm",
        },
    ],
    // Homepage hero
    heroTitle: "Your Backyard. Designed Around You. Built to Last.",
    heroDescription:
        "Custom decks, patios, and complete outdoor living spaces designed and built throughout Central Ohio.",
    // Primary CTA
    ctaTitle: "Ready to reimagine your backyard?",
    ctaDescription:
        "Tell us about your space and how you want to use it. We'll help you design it, understand the investment, and build it — start to finish.",
    // Message the chatbot receives when a primary CTA is clicked (v1 questionnaire).
    startProjectMessage:
        "Hi! I'd like to start a backyard project. Can you walk me through the questionnaire?",
};
