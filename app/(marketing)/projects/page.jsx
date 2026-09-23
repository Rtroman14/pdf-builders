import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { ProjectGallery } from "@/components/project-gallery";
import { galleryCategories, getGalleryPhotos } from "@/lib/gallery-data";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Our Work | PDF Builders Outdoor Living Projects",
    description:
        "Browse completed decks, patios, and complete backyard transformations by PDF Builders across Central Ohio — from idea to finished backyard.",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="From idea to backyard"
                subheading="Every project starts as a conversation and a design before it's ever built. Explore some of the outdoor living spaces we've created across Central Ohio."
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <ProjectGallery photos={getGalleryPhotos()} categories={galleryCategories} />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA title={defaultConfig.ctaTitle} subheading={defaultConfig.ctaDescription} />
                </Section>
            </div>
        </div>
    );
}
