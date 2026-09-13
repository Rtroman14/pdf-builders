import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { InvestmentRanges } from "@/components/investment-ranges";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Investment & Project Costs | PDF Builders",
    description:
        "Realistic investment ranges for decks, patios, covered outdoor living, and complete backyard transformations in Central Ohio. Honest guidance, no surprises.",
};

export default function InvestmentPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="What does an outdoor living project cost?"
                subheading="We believe in being upfront about investment so you can plan with confidence. Here's an honest look at what different projects typically involve."
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <InvestmentRanges />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Let's find the right project for your budget."
                        subheading={defaultConfig.ctaDescription}
                    />
                </Section>
            </div>
        </div>
    );
}
