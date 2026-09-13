import { GetQuoteButton } from "@/components/get-quote-button";
import { ImagePlaceholder } from "@/components/image-placeholder";
import {
    UsersIcon,
    PencilSquareIcon,
    ShieldCheckIcon,
    SparklesIcon,
    ClipboardDocumentCheckIcon,
    HandThumbUpIcon,
} from "@heroicons/react/24/outline";

const differentiators = [
    {
        icon: UsersIcon,
        title: "One Team. The Complete Backyard.",
        description:
            "Deck, patio, covered structure, outdoor kitchen, fire features, lighting, and fence — designed and managed by one contractor, not five.",
    },
    {
        icon: PencilSquareIcon,
        title: "Designed Before We Build",
        description:
            "You see the project and work through selections before construction begins — no surprises once the crew arrives.",
    },
    {
        icon: SparklesIcon,
        title: "Premium Materials",
        description:
            "Unilock, Techo-Bloc, TimberTech, and Deckorators — materials chosen to last and to look good doing it.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Built Beyond the Minimum",
        description:
            "We build to a standard we're proud to put our family name on, not just to code.",
    },
    {
        icon: ClipboardDocumentCheckIcon,
        title: "Dedicated Production Management",
        description:
            "Once your project enters production, you know exactly who's communicating with you and when.",
    },
    {
        icon: HandThumbUpIcon,
        title: "Permits & Inspections Handled",
        description:
            "PDF Builders manages the permitting and inspection process from start to finish.",
    },
];

export const WhyChooseUs = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Why PDF Builders
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        A family business built on honest work.
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        PDF Builders is a family-owned company, and it shows in how we work. So much
                        of what we build comes from repeat clients and their referrals — homeowners
                        who trusted us once, saw the difference, and called us back. That only
                        happens when you're honest, you do it right, and you stand behind your work.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {differentiators.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="space-y-2">
                                <div className="inline-flex items-center justify-center size-11 rounded-lg bg-primary/10 text-primary">
                                    <Icon className="size-6" />
                                </div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8">
                    <GetQuoteButton className="rounded-full" />
                </div>
            </div>

            <div className="relative">
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden">
                    <ImagePlaceholder label="Family / team photo" className="rounded-2xl" />
                </div>

                <div className="absolute bottom-8 left-8 sm:bottom-12 sm:-left-12 bg-primary text-white p-8 rounded-xl shadow-xl max-w-xs">
                    <div className="text-4xl font-bold mb-1">Family Owned</div>
                    <div className="text-white/80 font-medium">
                        Built on honesty & loyal repeat customers
                    </div>
                </div>
            </div>
        </div>
    );
};
