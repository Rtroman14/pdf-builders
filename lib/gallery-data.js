import fs from "node:fs";
import path from "node:path";

/**
 * Project photos live in /public/project-photos as `category--description.ext`.
 * Categories are listed in display order.
 */
export const galleryCategories = [
    { slug: "backyard-transformations", label: "Backyard Transformations" },
    { slug: "paver-patios", label: "Paver Patios" },
    { slug: "custom-decks", label: "Decks" },
    { slug: "fencing", label: "Fencing" },
    { slug: "pergolas-pavilions", label: "Pergolas & Pavilions" },
    { slug: "fire-features", label: "Fire Features" },
    { slug: "outdoor-kitchens", label: "Outdoor Kitchens" },
    { slug: "landscaping", label: "Landscaping" },
    { slug: "covered-outdoor-living", label: "Covered Outdoor Living" },
    { slug: "screen-rooms", label: "Screen Rooms" },
];

// Duplicates, renderings, and detail shots that don't read well in a grid.
const excluded = new Set([
    "backyard-transformations--3d-design-vs-completed-elevated-deck-patio.webp",
    "custom-decks--3d-design-elevated-deck-patio-fire-pit.webp",
    "paver-patios--3d-design-patio-fire-pit-seat-wall.webp",
    "custom-decks--composite-stair-landing-detail.webp",
    "paver-patios--tumbled-paver-patio-circle-inlay-closeup.webp",
    "covered-outdoor-living--gable-porch-cover-cedar-posts-stone-bases-2.webp",
    "custom-decks--elevated-wood-deck-stairs-black-balusters-2.webp",
    "fencing--horizontal-wood-privacy-screen-2.webp",
]);

const toAlt = (description) => {
    const text = description.replace(/-/g, " ");
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getGalleryPhotos = () => {
    const dir = path.join(process.cwd(), "public/project-photos");
    const order = galleryCategories.map((c) => c.slug);

    return fs
        .readdirSync(dir)
        .filter((file) => /\.(webp|jpe?g|png)$/i.test(file) && !excluded.has(file))
        .map((file) => {
            const [category, description] = file.replace(/\.\w+$/, "").split("--");
            return { src: `/project-photos/${file}`, category, alt: toAlt(description) };
        })
        .filter((photo) => order.includes(photo.category))
        .sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
};
