/**
 * Project case studies. Each becomes a page at /projects/[slug].
 * Structure follows Brandon's "From Idea to Backyard" blueprint:
 * Goal -> Design -> Build -> Result -> Homeowner quote.
 * All media are placeholders until real project photos/renderings arrive.
 */
export const projects = [
    {
        slug: "shawnee-hills-outdoor-living-transformation",
        title: "Complete Outdoor Living Transformation",
        location: "Shawnee Hills, Ohio",
        summary:
            "Deckorators decking, a covered structure, privacy wall, TV wall, Unilock patio, outdoor kitchen with granite counters, a gas fire pit, and low-voltage lighting.",
        tags: [
            "Composite Deck",
            "Covered Structure",
            "Outdoor Kitchen",
            "Paver Patio",
            "Fire Feature",
            "Lighting",
        ],
        beforeImage: "/projects/placeholder-before.jpg",
        designImage: "/projects/placeholder-3d-design.jpg",
        afterImage: "/projects/placeholder-transformation.jpg",
        gallery: [
            "/projects/placeholder-transformation.jpg",
            "/projects/placeholder-outdoor-kitchen.jpg",
            "/projects/placeholder-fire.jpg",
        ],
        goal: "The homeowners wanted a backyard they could actually live in — a space to cook, gather around a fire, and entertain, all connected under one cohesive design instead of a patchwork of separate projects.",
        design: "Working together through our design phase, we developed a plan that tied a raised composite deck to a ground-level paver patio, anchored by a covered structure with a TV wall and a full outdoor kitchen. A privacy wall and low-voltage lighting completed the vision, rendered in 3D so the homeowners could see it before we broke ground.",
        build: [
            "Deckorators composite decking",
            "Covered structure with finished ceiling",
            "Privacy wall and TV wall",
            "Unilock paver patio",
            "Outdoor kitchen with granite countertops",
            "Gas fire pit",
            "Low-voltage lighting throughout",
        ],
        result: "A single, seamless outdoor living space the family uses year-round — proof of what one team managing the entire project can accomplish.",
        quote: {
            body: "They took our vague idea and turned it into a backyard we never want to leave. One team, one plan, and they handled everything.",
            name: "Cole & Family",
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
        beforeImage: "/projects/placeholder-before.jpg",
        designImage: "/projects/placeholder-3d-design.jpg",
        afterImage: "/projects/placeholder-deck.jpg",
        gallery: [
            "/projects/placeholder-deck.jpg",
            "/projects/placeholder-lighting.jpg",
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
    {
        slug: "dublin-paver-patio-fire-pit",
        title: "Paver Patio & Fire Pit",
        location: "Dublin, Ohio",
        summary:
            "A Unilock paver patio with a built-in gas fire pit, seat walls, and coordinated landscape lighting.",
        tags: ["Paver Patio", "Fire Feature", "Seat Walls", "Lighting"],
        beforeImage: "/projects/placeholder-before.jpg",
        designImage: "/projects/placeholder-3d-design.jpg",
        afterImage: "/projects/placeholder-patio.jpg",
        gallery: [
            "/projects/placeholder-patio.jpg",
            "/projects/placeholder-fire.jpg",
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
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
