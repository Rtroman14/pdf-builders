import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { projects } from "@/lib/projects-data";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function Transformations() {
    const featured = projects.find((p) => p.featured) || projects[0];
    if (!featured) return null;

    const steps = [
        { label: "Before", image: featured.beforeImage, badge: "Before" },
        { label: "3D Design", image: featured.designImage, badge: "3D Design" },
        { label: "Completed", image: featured.afterImage, badge: "Completed" },
    ];

    return (
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    From idea to backyard
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    See the whole journey, not just the finished photo.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Every project starts as a conversation and a design before it's ever built.
                    Here's one from idea to finished backyard.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                {steps.map((step, index) => (
                    <div key={step.label} className="relative">
                        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border">
                            <ImagePlaceholder label={step.badge} className="rounded-2xl" />
                            <span className="absolute top-3 left-3 rounded-full bg-black/70 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                                {step.badge}
                            </span>
                        </div>
                        {index < steps.length - 1 && (
                            <ArrowLongRightIcon className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 size-8 text-primary z-10" />
                        )}
                    </div>
                ))}
            </div>

            <div className="max-w-3xl mx-auto text-center space-y-2">
                <h3 className="text-2xl font-bold">{featured.title}</h3>
                <p className="text-muted-foreground">{featured.location}</p>
                <p className="text-muted-foreground leading-relaxed">{featured.summary}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full">
                    <Link href={`/projects/${featured.slug}`}>
                        View This Project
                        <ArrowRightIcon className="size-4" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                    <Link href="/projects">View All Projects</Link>
                </Button>
            </div>
        </div>
    );
}
