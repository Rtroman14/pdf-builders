import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Reviews } from "@/components/reviews";
import { Card } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { GetQuoteButton } from "@/components/get-quote-button";
import { CircleCheckBig } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services-data";
import { defaultConfig } from "@/lib/default-config";

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return {
        title: `${service.name} | PDF Builders`,
        description: service.short,
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

    return (
        <div className="flex flex-col">
            <PageHero
                title={service.name}
                subheading={service.short}
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
                secondaryButton={{ label: "View Our Work", href: "/projects" }}
            />

            {/* Overview */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                {service.name} in Central Ohio
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.intro}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                                {service.highlights.map((h) => (
                                    <div key={h} className="flex items-start gap-3">
                                        <CircleCheckBig className="size-5 text-primary shrink-0 mt-0.5" />
                                        <span className="font-medium">{h}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton className="rounded-full" />
                            </div>
                        </div>
                        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border">
                            <ImagePlaceholder label={`${service.name} photo`} className="rounded-2xl" />
                        </div>
                    </div>
                </Section>
            </div>

            {/* Reviews */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Reviews />
                </Section>
            </div>

            {/* Related services */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Explore more of what we build
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {related.map((s) => (
                                <Link key={s.slug} href={`/services/${s.slug}`}>
                                    <Card className="p-0 overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                                        <div className="relative aspect-16/10 w-full">
                                            <ImagePlaceholder label={s.name} />
                                        </div>
                                        <div className="p-6 space-y-2">
                                            <h3 className="text-xl font-bold">{s.name}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {s.short}
                                            </p>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            {/* CTA */}
            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Planning something similar?"
                        subheading={defaultConfig.ctaDescription}
                    />
                </Section>
            </div>
        </div>
    );
}
