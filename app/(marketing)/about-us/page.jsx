import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { GetQuoteButton } from "@/components/get-quote-button";
import { Credentials } from "@/components/credentials";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { HeartIcon, HandRaisedIcon, UsersIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "About PDF Builders | A Family-Owned Outdoor Living Builder",
    description:
        "PDF Builders is a family-owned, father-and-son outdoor living company in Central Ohio, built on honest work, quality craftsmanship, and loyal repeat customers.",
};

const values = [
    {
        icon: HandRaisedIcon,
        title: "Honesty",
        description:
            "Straight answers about design, materials, and investment — even when it's not what's easiest to sell.",
    },
    {
        icon: HeartIcon,
        title: "Family-Owned",
        description:
            "A father-and-son business that treats your home the way we'd treat our own.",
    },
    {
        icon: UsersIcon,
        title: "Loyal Customers",
        description:
            "So much of our work comes from repeat clients and their referrals — the truest measure of trust.",
    },
    {
        icon: SparklesIcon,
        title: "Craftsmanship",
        description:
            "Premium materials and a standard we're proud to put our family name on.",
    },
];

const team = [
    {
        name: "Brandon Mechtly",
        title: "Owner",
        description:
            "Brandon has spent decades in outdoor living and leads every project with a hands-on, honest approach.",
        label: "Brandon",
    },
    {
        name: "Donovan",
        title: "Design & Production",
        description:
            "Donovan helps homeowners turn an idea into a design and carries it through to a finished backyard.",
        label: "Donovan",
    },
    {
        name: "The PDF Builders Family",
        title: "Our Crew",
        description:
            "A team that takes pride in doing it right the first time and standing behind the work.",
        label: "Family & crew",
    },
];

export default function AboutUsPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="A family business, built on honest work."
                subheading="PDF Builders is a family-owned, father-and-son company designing and building outdoor living spaces across Central Ohio."
                primaryButton={{
                    label: "Start Your Project",
                    message: defaultConfig.startProjectMessage,
                }}
                secondaryButton={{ label: "View Our Work", href: "/projects" }}
            />

            {/* Our Story */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    PDF Builders is a family-owned, father-and-son business. Brandon
                                    has spent much of his career building outdoor living spaces — he
                                    ran an outdoor living company for about a decade in the 2000s
                                    before relaunching as PDF Builders in 2016.
                                </p>
                                <p>
                                    Working alongside his son, he's built the company around
                                    something simple: do honest work, build it right, and take care
                                    of people. That's why so much of what we do comes from repeat
                                    customers and the neighbors they refer to us.
                                </p>
                                <p>
                                    We're intentional about who we work with, and we treat every
                                    backyard like it's going in behind our own home.
                                </p>
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton className="rounded-full" />
                            </div>
                        </div>
                        <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border">
                            <ImagePlaceholder label="Brandon & family" className="rounded-2xl" />
                        </div>
                    </div>
                </Section>
            </div>

            {/* Trust copy */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-4xl">
                    <div className="space-y-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Trust is the foundation of every great project.
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-left">
                            <p>
                                The most successful outdoor living projects share one thing in
                                common: a strong partnership between homeowner and builder. When
                                clients trust our expertise, engage openly in the process, and
                                prioritize lasting quality, the result is always something worth
                                being proud of.
                            </p>
                            <p>
                                Our best relationships are with homeowners who value craftsmanship,
                                clear communication, and the kind of professionalism a major home
                                investment deserves. They understand that building a premium outdoor
                                space isn't about cutting corners or chasing the lowest bid — it's
                                about doing it right the first time.
                            </p>
                            <p>
                                We may not be the right fit for everyone, and that's okay. But when
                                trust, respect, and a shared commitment to quality come together,
                                that's when extraordinary outdoor spaces come to life.
                            </p>
                            <p className="font-semibold text-foreground">
                                That's what we do at PDF Builders — we design and build spaces made
                                for the way you live outdoors.
                            </p>
                        </div>
                    </div>
                </Section>
            </div>

            {/* Values */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                What we stand for
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value) => {
                                const Icon = value.icon;
                                return (
                                    <Card
                                        key={value.title}
                                        className="p-8 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="space-y-4 text-center">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold">{value.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </Section>
            </div>

            {/* Team */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                                The family behind the work
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Photos coming soon — Brandon, Donovan, and the PDF Builders family.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {team.map((member) => (
                                <Card key={member.name} className="p-0 overflow-hidden">
                                    <div className="aspect-4/5 w-full overflow-hidden">
                                        <ImagePlaceholder label={member.label} />
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-primary font-semibold">{member.title}</p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {member.description}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            {/* Credentials */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Credentials &amp; certifications
                        </h2>
                        <Credentials variant="light" />
                    </div>
                </Section>
            </div>

            {/* CTA */}
            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA title={defaultConfig.ctaTitle} subheading={defaultConfig.ctaDescription} />
                </Section>
            </div>
        </div>
    );
}
