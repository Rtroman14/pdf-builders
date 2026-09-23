/**
 * Educational "Outdoor Living Resources" articles at /resources/[slug].
 * These answer questions homeowners already type into Google and each ends
 * with a Start Your Project CTA. Content is starter copy to be expanded.
 */
export const resources = [
    {
        slug: "pavers-vs-concrete",
        title: "Pavers vs. Concrete: Which Is Better for Your Patio?",
        excerpt:
            "Both can look great, but they age very differently. Here's how to decide between pavers and poured concrete for your Central Ohio patio.",
        category: "Patios",
        readTime: "5 min read",
        image: "/project-photos/paver-patios--gray-paver-patio-dark-border.webp",
        body: [
            "One of the first decisions homeowners face when planning a patio is the material: interlocking pavers or poured concrete. Both have their place, but they behave very differently over time — especially through Ohio's freeze-thaw winters.",
            "Poured concrete is typically less expensive up front and offers a clean, continuous surface. Its main drawback is cracking. As the ground shifts and freezes, large slabs crack in ways that are difficult to repair invisibly.",
            "Pavers cost more initially but are engineered to move with the ground. Because they're individual units set on a compacted base, they flex instead of cracking, and any single paver can be lifted and reset if needed. Premium systems from Unilock and Techo-Bloc also offer a depth of texture and color that's hard to match with concrete.",
            "For most of the outdoor living projects we build, we recommend pavers — the long-term durability and appearance justify the investment. But the right answer depends on your goals, your site, and your budget, which is exactly what we walk through during a consultation.",
        ],
    },
    {
        slug: "composite-decking-vs-wood",
        title: "Composite Decking vs. Pressure-Treated Wood",
        excerpt:
            "Composite costs more up front but eliminates staining, sealing, and rot. Here's how the two compare over the life of a deck.",
        category: "Decks",
        readTime: "6 min read",
        image: "/project-photos/custom-decks--aerial-gray-composite-deck-white-black-railing.webp",
        body: [
            "When homeowners plan a new deck, the biggest material decision is composite versus pressure-treated wood. The right choice comes down to how much maintenance you want to take on over the life of the deck.",
            "Pressure-treated wood is the most affordable option to build. The trade-off is ongoing maintenance: to keep it looking good and prevent rot, it needs cleaning, staining, or sealing every one to three years. Even then, wood eventually warps, splinters, and fades.",
            "Composite decking from brands like TimberTech and Deckorators costs more to install but eliminates nearly all of that upkeep. There's no staining or sealing — just occasional cleaning — and quality composite resists fading, staining, scratching, and rot for decades.",
            "Over a 15–20 year span, composite often costs less when you factor in the time and money spent maintaining wood. For most of our clients who want to enjoy their deck rather than maintain it, composite is the better long-term value.",
        ],
    },
    {
        slug: "paver-patio-cost-columbus",
        title: "How Much Does a Paver Patio Cost in Columbus?",
        excerpt:
            "A realistic look at what drives the cost of a paver patio in Central Ohio — and why the cheapest bid usually costs more in the end.",
        category: "Investment",
        readTime: "5 min read",
        image: "/project-photos/paver-patios--gray-paver-patio-fire-pit-grill-station.webp",
        body: [
            "It's the question everyone wants answered first, and the honest response is: it depends on the size, the materials, and the site. But we believe in being upfront about investment so you can plan.",
            "The biggest cost drivers are square footage, the paver system you choose, and site conditions — things like grading, drainage, access to the backyard, and any walls or steps required to make the space usable.",
            "Add-ons like seat walls, fire features, and lighting also affect the total. A simple patio is a very different project from a patio with a built-in fire pit and surrounding seat walls.",
            "The lowest bid is often the most expensive in the long run. A patio built on an inadequate base will settle and heave, and fixing it costs far more than doing it right the first time. During your consultation, we'll give you a realistic investment range based on your actual project — not a lowball number that changes later.",
        ],
    },
    {
        slug: "what-happens-during-a-consultation",
        title: "What Happens During an Outdoor Living Consultation?",
        excerpt:
            "Walk through exactly what to expect when you start a project with PDF Builders — from the first conversation to a design you can see before we build.",
        category: "Process",
        readTime: "4 min read",
        image: "/project-photos/custom-decks--3d-design-elevated-deck-patio-fire-pit.webp",
        body: [
            "Starting a backyard project can feel overwhelming, so here's exactly what the process looks like when you work with PDF Builders.",
            "It begins with the questionnaire. Telling us how you want to use the space, what you'd like to change, your timeline, and your investment range lets us come to the conversation prepared — and helps us make sure we're the right fit for your project.",
            "Next is the consultation and design. We take time to understand your goals, your home, and your property, then develop the project around them — including 3D design when appropriate, so you can see the vision before construction begins.",
            "From there we move into selections, a detailed estimate, and — once you're ready — production. Our team handles permits, inspections, and scheduling, and keeps you informed through every phase until the final walkthrough.",
        ],
    },
];

export const getResourceBySlug = (slug) => resources.find((r) => r.slug === slug);
