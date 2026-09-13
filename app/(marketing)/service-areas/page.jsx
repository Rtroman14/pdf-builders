import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { cities } from "@/lib/cities-data";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Service Areas | PDF Builders — Serving Central Ohio",
    description:
        "PDF Builders designs and builds decks, patios, and outdoor living spaces across Central Ohio, including Westerville, Dublin, Powell, Delaware, New Albany, Upper Arlington, and Hilliard.",
};

export default function ServiceAreasPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Serving Central Ohio"
                subheading="From our home base in New Albany, PDF Builders designs and builds outdoor living spaces for homeowners across the Columbus area."
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Areas we proudly serve
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We build throughout Central Ohio. Find your community below.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {cities.map((city) => (
                                <Link key={city.slug} href={`/service-areas/${city.slug}`}>
                                    <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                                        <div className="space-y-4">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                                    {city.name}
                                                </h3>
                                                <MapPinIcon className="w-6 h-6 text-primary shrink-0" />
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {city.blurb}
                                            </p>
                                            <div className="pt-4 border-t">
                                                <p className="text-sm font-semibold mb-2">
                                                    Neighborhoods:
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {city.neighborhoods.map((n) => (
                                                        <span
                                                            key={n}
                                                            className="text-xs bg-secondary px-2 py-1 rounded-full"
                                                        >
                                                            {n}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
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
