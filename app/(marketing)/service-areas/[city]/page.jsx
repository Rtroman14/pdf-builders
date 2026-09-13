import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { Reviews } from "@/components/reviews";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { cities, getCityBySlug } from "@/lib/cities-data";
import { services } from "@/lib/services-data";
import { defaultConfig } from "@/lib/default-config";

export function generateStaticParams() {
    return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);
    if (!city) return {};
    return {
        title: `${city.title} | PDF Builders`,
        description: `${city.blurb} Custom decks, patios, and complete outdoor living spaces in ${city.name}, Ohio.`,
    };
}

export default async function CityPage({ params }) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);
    if (!city) notFound();

    const featuredServices = services.filter((s) => s.featured).slice(0, 6);

    return (
        <div className="flex flex-col">
            <PageHero
                title={city.title}
                subheading={`${city.blurb} We design and build outdoor living spaces throughout ${city.name} and the surrounding Central Ohio communities.`}
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
                secondaryButton={{ label: "View Our Work", href: "/projects" }}
            />

            {/* Intro */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Your {city.name} outdoor living contractor
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                As a family-owned builder based nearby in New Albany, we know {city.name}{" "}
                                homes and neighborhoods. From custom decks and paver patios to
                                complete backyard transformations, we design and build outdoor
                                spaces made for the way you live.
                            </p>
                            <div className="pt-2">
                                <p className="text-sm font-semibold mb-2">
                                    Neighborhoods we serve in {city.name}:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {city.neighborhoods.map((n) => (
                                        <span
                                            key={n}
                                            className="text-sm bg-secondary px-3 py-1 rounded-full inline-flex items-center gap-1"
                                        >
                                            <MapPinIcon className="size-3.5 text-primary" />
                                            {n}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border">
                            <ImagePlaceholder label={`${city.name} project`} className="rounded-2xl" />
                        </div>
                    </div>
                </Section>
            </div>

            {/* Services */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                What we build in {city.name}
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredServices.map((service) => (
                                <Link key={service.slug} href={`/services/${service.slug}`}>
                                    <Card className="p-6 h-full group hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-xl font-bold flex items-center justify-between">
                                            {service.name}
                                            <ArrowRightIcon className="size-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                            {service.short}
                                        </p>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            {/* Reviews */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Reviews />
                </Section>
            </div>

            {/* CTA */}
            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title={`Ready to transform your ${city.name} backyard?`}
                        subheading={defaultConfig.ctaDescription}
                    />
                </Section>
            </div>
        </div>
    );
}
