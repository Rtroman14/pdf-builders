import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { projects } from "@/lib/projects-data";
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Link key={project.slug} href={`/projects/${project.slug}`}>
                                <Card className="p-0 overflow-hidden h-full group hover:shadow-lg transition-all duration-300">
                                    <div className="relative aspect-4/3 w-full">
                                        <ImagePlaceholder label={project.title} />
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <div>
                                            <h3 className="text-xl font-bold">{project.title}</h3>
                                            <p className="text-sm text-primary font-medium">
                                                {project.location}
                                            </p>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {project.summary}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs bg-secondary px-2 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary pt-1">
                                            View Project
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
