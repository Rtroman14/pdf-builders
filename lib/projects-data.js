/**
 * Project case studies. Each becomes a page at /projects/[slug].
 * Structure follows Brandon's "From Idea to Backyard" blueprint:
 * Goal -> Design -> Build -> Result -> Homeowner quote.
 * A null image renders a placeholder until that photo/rendering exists.
 */
export const projects = [
    {
        slug: "dublin-paver-patio-fire-pit",
        title: "Paver Patio & Fire Pit",
        location: "Dublin, Ohio",
        summary:
            "A Unilock paver patio with a built-in gas fire pit, seat walls, and coordinated landscape lighting.",
        tags: ["Paver Patio", "Fire Feature", "Seat Walls", "Lighting"],
        beforeImage: null,
        designImage: "/project-photos/paver-patios--3d-design-patio-fire-pit-seat-wall.webp",
        afterImage: "/project-photos/fire-features--round-fire-pit-curved-seat-wall-under-deck.webp",
        gallery: [
            "/project-photos/fire-features--round-fire-pit-curved-seat-wall-under-deck.webp",
            "/project-photos/paver-patios--dark-paver-patio-fire-pit-seat-wall-white-stairs.webp",
        ],
        goal: "This family wanted a gathering space for evenings outside — somewhere to relax around a fire without the maintenance of a wood structure.",
        design: "We laid out a Unilock paver patio with a built-in gas fire pit as the centerpiece, wrapped by seat walls for casual seating and finished with warm landscape lighting.",
        build: [
            "Unilock paver patio",
            "Built-in gas fire pit",
            "Seat walls",
            "Landscape lighting",
        ],
        result: "A durable, low-maintenance patio that has become the family's favorite spot from spring through fall.",
        quote: {
            body: "We're out here almost every night now. The fire pit and seat walls make it feel like an outdoor room.",
            name: "David P.",
        },
        featured: true,
    },
    {
        slug: "westerville-composite-deck",
        title: "Composite Deck & Privacy Wall",
        location: "Westerville, Ohio",
        summary:
            "A low-maintenance composite deck with a privacy wall, aluminum railing, and integrated low-voltage lighting.",
        tags: ["Composite Deck", "Privacy Wall", "Aluminum Railing", "Lighting"],
        beforeImage: null,
        designImage: null,
        afterImage: "/project-photos/custom-decks--composite-deck-privacy-wall-paver-landing.webp",
        gallery: [
            "/project-photos/custom-decks--composite-deck-privacy-wall-paver-landing.webp",
            "/project-photos/custom-decks--aerial-composite-deck-privacy-panels-black-railing.webp",
        ],
        goal: "The homeowners had an aging wood deck that had seen better days and wanted a low-maintenance replacement with more privacy from neighboring homes.",
        design: "We designed a composite deck sized to the home's footprint, added a privacy wall along the exposed side, and integrated low-voltage lighting into the steps and railing so the space stays usable after dark.",
        build: [
            "Composite decking",
            "Privacy wall",
            "Aluminum railing",
            "Low-voltage step and railing lighting",
        ],
        result: "A clean, modern deck the homeowners can enjoy without the upkeep of their old wood deck.",
        quote: {
            body: "The new deck looks better than we imagined and we never have to stain it. The lighting at night is the perfect touch.",
            name: "The Andersons",
        },
        featured: true,
    },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
