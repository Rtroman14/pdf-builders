import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChatBubbleLeftRightIcon, PencilSquareIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const steps = [
    {
        icon: ChatBubbleLeftRightIcon,
        title: "Consult",
        description:
            "We start by understanding how you want to use your backyard, your priorities, your investment range, and what you'd like the finished space to become.",
    },
    {
        icon: PencilSquareIcon,
        title: "Design",
        description:
            "Our team develops the project around your home, property, and goals — including 3D design when appropriate — so you can see the vision before construction begins.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Build",
        description:
            "Our production team takes the project from plans and permits through construction and a final walkthrough.",
    },
];

export function ConsultDesignBuild() {
    return (
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    How we work
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Consult. Design. Build.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Great outdoor spaces aren't just constructed — they're designed first. Here's
                    how we take your backyard from an idea to a finished space you'll use every day.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div key={step.title} className="relative space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="inline-flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary">
                                    <Icon className="size-7" />
                                </div>
                                <span className="text-5xl font-bold text-primary/15">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center">
                <Button asChild size="lg" className="rounded-full">
                    <Link href="/process">See How Our Process Works</Link>
                </Button>
            </div>
        </div>
    );
}
