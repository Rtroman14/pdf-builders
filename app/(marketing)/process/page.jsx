import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { ConsultDesignBuild } from "@/components/consult-design-build";
import {
    ChatBubbleLeftRightIcon,
    PencilSquareIcon,
    Squares2X2Icon,
    DocumentTextIcon,
    WrenchScrewdriverIcon,
    CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Our Process | PDF Builders — Consult. Design. Build.",
    description:
        "How PDF Builders takes your backyard from an idea to a finished outdoor living space: consultation, design, selections, estimate, production, and final walkthrough.",
};

const steps = [
    {
        icon: ChatBubbleLeftRightIcon,
        title: "Start Your Project",
        description:
            "It begins with our questionnaire. Telling us how you want to use the space, what you'd like to change, your timeline, and your investment range lets us come prepared — and helps us make sure we're the right fit.",
    },
    {
        icon: PencilSquareIcon,
        title: "Consultation & Design",
        description:
            "We take time to understand your goals, your home, and your property, then develop the project around them — including 3D design when appropriate — so you can see the vision before construction begins.",
    },
    {
        icon: Squares2X2Icon,
        title: "Material Selections",
        description:
            "We walk through decking, pavers, railing, lighting, and finishes together, with the cost of each decision in front of you.",
    },
    {
        icon: DocumentTextIcon,
        title: "Detailed Estimate",
        description:
            "You receive a clear, detailed estimate for the project — no vague numbers that change later.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Production",
        description:
            "Our production team takes the project from permits through construction, keeping you informed at every phase with dedicated production management.",
    },
    {
        icon: CheckBadgeIcon,
        title: "Final Walkthrough",
        description:
            "We complete a final walkthrough together so the finished backyard meets the standard we put our name on.",
    },
];

export default function ProcessPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Consult. Design. Build."
                subheading="Great outdoor spaces are designed first, then built. Here's exactly how we take your backyard from an idea to a space you'll use every day."
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <ConsultDesignBuild />
                </Section>
            </div>

            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-5xl">
                    <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Step by step
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            From the first conversation to your finished backyard.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.title} className="flex gap-6 items-start">
                                    <div className="flex flex-col items-center shrink-0">
                                        <div className="inline-flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary">
                                            <Icon className="size-7" />
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="w-px flex-1 min-h-12 bg-border mt-2" />
                                        )}
                                    </div>
                                    <div className="pb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-bold text-primary/50">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <h3 className="text-2xl font-bold">{step.title}</h3>
                                        </div>
                                        <p className="mt-2 text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Section>
            </div>

            <div className="pb-24 sm:pb-32 pt-24 sm:pt-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to start the conversation?"
                        subheading={defaultConfig.ctaDescription}
                    />
                </Section>
            </div>
        </div>
    );
}
