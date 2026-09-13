import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Credentials } from "@/components/credentials";
import { ConsultDesignBuild } from "@/components/consult-design-build";
import { BuildTiles } from "@/components/build-tiles";
import { Transformations } from "@/components/transformations";
import { OwnerVideo } from "@/components/owner-video";
import { Reviews } from "@/components/reviews";
import { WhyChooseUs } from "@/components/why-choose-us";
import { InvestmentRanges } from "@/components/investment-ranges";
import { CTA } from "@/components/cta";
import { defaultConfig } from "@/lib/default-config";

export default function Home({ config = defaultConfig }) {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <div className="relative min-h-[95vh] sm:min-h-[90vh] lg:min-h-[88vh] w-full flex items-center justify-center overflow-hidden py-28 sm:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-[oklch(0.3_0.05_62)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
                <Section className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-12">
                    <Hero title={config.heroTitle} subheading={config.heroDescription} />
                    <div className="w-full">
                        <p className="text-center text-xs uppercase tracking-[0.25em] text-white/60 mb-4">
                            Trusted &amp; Certified
                        </p>
                        <Credentials variant="bar" />
                    </div>
                </Section>
            </div>

            {/* Consult | Design | Build */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <ConsultDesignBuild />
                </Section>
            </div>

            {/* What do you want to build? */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <BuildTiles />
                </Section>
            </div>

            {/* From Idea to Backyard */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Transformations />
                </Section>
            </div>

            {/* Owner video */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <OwnerVideo />
                </Section>
            </div>

            {/* Reviews */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Reviews reviews={config.reviews} />
                </Section>
            </div>

            {/* Why PDF Builders */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <WhyChooseUs />
                </Section>
            </div>

            {/* Investment education teaser */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <InvestmentRanges teaser />
                </Section>
            </div>

            {/* CTA */}
            <div className="pb-24 sm:pb-32">
                <CTA
                    title={config.ctaTitle}
                    subheading={config.ctaDescription}
                    phoneNumber={config.phoneNumber}
                />
            </div>
        </div>
    );
}
