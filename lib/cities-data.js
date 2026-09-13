/**
 * Local SEO market pages at /service-areas/[city].
 * Per Brandon's blueprint these should contain real PDF projects, testimonials,
 * and relevant services per city over time — not duplicated filler. The copy
 * below is a starting point to be enriched with city-specific content.
 */
export const cities = [
    {
        slug: "westerville",
        name: "Westerville",
        title: "Westerville Outdoor Living Contractor",
        blurb: "Custom decks, paver patios, and complete backyard transformations for Westerville homeowners.",
        neighborhoods: ["Uptown Westerville", "Central College", "Highlands", "Spring Grove"],
    },
    {
        slug: "dublin",
        name: "Dublin",
        title: "Dublin Deck & Patio Builder",
        blurb: "Premium outdoor living spaces designed and built for Dublin homes.",
        neighborhoods: ["Historic Dublin", "Muirfield Village", "Ballantrae", "Tartan Fields"],
    },
    {
        slug: "powell",
        name: "Powell",
        title: "Powell Outdoor Living Contractor",
        blurb: "Decks, patios, pergolas, and full backyard projects throughout Powell.",
        neighborhoods: ["Liberty Township", "Golf Village", "Wedgewood", "Seldom Seen"],
    },
    {
        slug: "delaware",
        name: "Delaware",
        title: "Delaware Deck & Patio Builder",
        blurb: "Custom outdoor living spaces built to last for Delaware County homeowners.",
        neighborhoods: ["Downtown Delaware", "Glenross", "Cheshire", "Braumiller"],
    },
    {
        slug: "new-albany",
        name: "New Albany",
        title: "New Albany Outdoor Living Contractor",
        blurb: "Our home base — decks, patios, and complete backyard transformations in New Albany.",
        neighborhoods: ["Village Center", "Ealy Crossing", "Wentworth", "The Preserve"],
    },
    {
        slug: "upper-arlington",
        name: "Upper Arlington",
        title: "Upper Arlington Outdoor Living Contractor",
        blurb: "Higher-end decks, patios, and outdoor living spaces for Upper Arlington homes.",
        neighborhoods: ["Old Arlington", "Golf Course area", "Riverside", "Canterbury"],
    },
    {
        slug: "hilliard",
        name: "Hilliard",
        title: "Hilliard Deck & Patio Builder",
        blurb: "Custom decks and paver patios designed and built for Hilliard homeowners.",
        neighborhoods: ["Old Hilliard", "Heritage Lakes", "Brown Township", "Scioto Darby"],
    },
];

export const getCityBySlug = (slug) => cities.find((c) => c.slug === slug);
