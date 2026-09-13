import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { StarIcon } from "@heroicons/react/24/solid";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Reviews | What Central Ohio Homeowners Say About PDF Builders",
    description:
        "Read what Central Ohio homeowners say about their decks, patios, and outdoor living spaces from PDF Builders.",
};

export default function ReviewsPage() {
    const reviews = defaultConfig.reviews;

    return (
        <div className="flex flex-col">
            <PageHero
                title="What Central Ohio homeowners are saying"
                subheading="Much of our work comes from repeat customers and their referrals. Here's what homeowners say about working with our family."
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <Card key={index} className="p-6 flex flex-col">
                                <div className="flex gap-0.5 mb-3">
                                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                                        <StarIcon key={i} className="size-5 text-yellow-500" />
                                    ))}
                                </div>
                                <blockquote className="text-muted-foreground leading-relaxed flex-1">
                                    "{review.body}"
                                </blockquote>
                                <div className="mt-4 pt-4 border-t">
                                    <p className="font-semibold">{review.name}</p>
                                    {review.location && (
                                        <p className="text-sm text-muted-foreground">
                                            {review.location}
                                        </p>
                                    )}
                                </div>
                            </Card>
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
