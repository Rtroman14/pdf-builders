import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { resources, getResourceBySlug } from "@/lib/resources-data";
import { defaultConfig } from "@/lib/default-config";

export function generateStaticParams() {
    return resources.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = getResourceBySlug(slug);
    if (!article) return {};
    return {
        title: `${article.title} | PDF Builders`,
        description: article.excerpt,
    };
}

export default async function ResourcePage({ params }) {
    const { slug } = await params;
    const article = getResourceBySlug(slug);
    if (!article) notFound();

    const more = resources.filter((r) => r.slug !== article.slug).slice(0, 3);

    return (
        <div className="flex flex-col">
            <PageHero title={article.title} subheading={article.excerpt} />

            <div className="py-24 sm:py-32">
                <Section className="max-w-3xl">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                        <span className="font-semibold text-primary uppercase tracking-wide">
                            {article.category}
                        </span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                    </div>
                    <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border mb-10">
                        <ImagePlaceholder label={article.category} className="rounded-2xl" />
                    </div>
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        {article.body.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </Section>
            </div>

            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
                            More resources
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {more.map((r) => (
                                <Link key={r.slug} href={`/resources/${r.slug}`}>
                                    <Card className="p-0 overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                                        <div className="relative aspect-16/10 w-full">
                                            <ImagePlaceholder label={r.category} />
                                        </div>
                                        <div className="p-6 space-y-2">
                                            <h3 className="text-lg font-bold leading-snug">
                                                {r.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {r.excerpt}
                                            </p>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            <div className="pb-24 sm:pb-32 pt-24 sm:pt-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Planning a project?"
                        subheading={defaultConfig.ctaDescription}
                    />
                </Section>
            </div>
        </div>
    );
}
