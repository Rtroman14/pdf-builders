import { GetQuoteButton } from "@/components/get-quote-button";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function OwnerVideo() {
    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border shadow-lg">
                <ImagePlaceholder label="Owner walkthrough video" video className="rounded-2xl" />
            </div>

            <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Meet the team
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    The people behind your project.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    A backyard transformation is a real investment in your home. Before you trust
                    anyone with it, you should know who you're working with. Brandon and Donovan walk
                    you through exactly how PDF Builders approaches a project — from the first
                    conversation and design through material selections, production, and your
                    finished backyard.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    We're a family-owned business, and we treat every project like it's going in our
                    own backyard.
                </p>
                <GetQuoteButton className="rounded-full" />
            </div>
        </div>
    );
}
