import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { CircleCheckBig } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import { defaultConfig } from "@/lib/default-config";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};
    return {
        title: `${project.title} — ${project.location} | PDF Builders`,
        description: project.summary,
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const journey = [
        { image: project.beforeImage, badge: "Before" },
        { image: project.designImage, badge: "3D Design" },
        { image: project.afterImage, badge: "Completed" },
    ];

    return (
        <div className="flex flex-col">
            <PageHero
                title={project.title}
                subheading={`${project.location} — ${project.summary}`}
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
                secondaryButton={{ label: "View All Projects", href: "/projects" }}
            />

            {/* Journey */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            From idea to backyard
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            The journey
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                        {journey.map((step, index) => (
                            <div key={step.badge} className="relative">
                                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border">
                                    <ImagePlaceholder
                                        src={step.image}
                                        alt={`${project.title} — ${step.badge}`}
                                        label={step.badge}
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        className="rounded-2xl"
                                    />
                                    <span className="absolute top-3 left-3 rounded-full bg-black/70 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                                        {step.badge}
                                    </span>
                                </div>
                                {index < journey.length - 1 && (
                                    <ArrowLongRightIcon className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 size-8 text-primary z-10" />
                                )}
                            </div>
                        ))}
                    </div>
                </Section>
            </div>

            {/* Story */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-4xl">
                    <div className="space-y-12">
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">The Client's Goal</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.goal}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">The Design</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.design}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">The Build</h3>
                            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                                {project.build.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CircleCheckBig className="size-5 text-primary shrink-0 mt-0.5" />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">The Result</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.result}
                            </p>
                        </div>
                        {project.quote && (
                            <blockquote className="border-l-4 border-primary pl-6 py-2">
                                <p className="text-xl italic text-foreground leading-relaxed">
                                    "{project.quote.body}"
                                </p>
                                <footer className="mt-3 font-semibold text-muted-foreground">
                                    — {project.quote.name}
                                </footer>
                            </blockquote>
                        )}
                    </div>
                </Section>
            </div>

            {/* CTA */}
            <div className="pb-24 sm:pb-32 pt-24 sm:pt-32">
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
