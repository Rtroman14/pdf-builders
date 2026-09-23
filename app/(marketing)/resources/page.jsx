import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { resources } from "@/lib/resources-data";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Outdoor Living Resources | PDF Builders",
    description:
        "Guides and answers to the questions homeowners ask most about decks, patios, materials, cost, and the outdoor living process in Central Ohio.",
};

export default function ResourcesPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Outdoor Living Resources"
                subheading="Straight answers to the questions homeowners actually ask — about materials, cost, permits, and what to expect when you build."
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((article) => (
                            <Link key={article.slug} href={`/resources/${article.slug}`}>
                                <Card className="p-0 overflow-hidden h-full group hover:shadow-lg transition-all duration-300">
                                    <div className="relative aspect-16/10 w-full">
                                        <ImagePlaceholder
                                            src={article.image}
                                            alt={article.title}
                                            label={article.category}
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        />
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span className="font-semibold text-primary uppercase tracking-wide">
                                                {article.category}
                                            </span>
                                            <span>·</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold leading-snug">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary pt-1">
                                            Read More
                                            <ArrowRightIcon className="size-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Card>
                            </Link>
                        ))}
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
