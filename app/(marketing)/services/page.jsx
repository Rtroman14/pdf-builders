import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Services } from "@/components/services";
import { ConsultDesignBuild } from "@/components/consult-design-build";
import { CTA } from "@/components/cta";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Outdoor Living Services | PDF Builders",
    description:
        "Custom decks, paver patios, covered outdoor living, screen rooms, pergolas, outdoor kitchens, fire features, fencing, lighting, and complete backyard transformations in Central Ohio.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Everything for your outdoor living space"
                subheading="From a single deck to a complete backyard transformation, PDF Builders designs and builds it all — with one team and one plan."
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
                secondaryButton={{ label: "View Our Work", href: "/projects" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Services />
                </Section>
            </div>

            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <ConsultDesignBuild />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32 pt-24 sm:pt-32">
                <CTA title={defaultConfig.ctaTitle} subheading={defaultConfig.ctaDescription} />
            </div>
        </div>
    );
}
