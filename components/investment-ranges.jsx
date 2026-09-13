import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { investmentIntro, investmentRanges, investmentDisclaimer } from "@/lib/investment-data";

/**
 * Investment education. `teaser` renders a condensed homepage version with a
 * link to the full /investment page.
 */
export function InvestmentRanges({ teaser = false }) {
    const ranges = teaser ? investmentRanges.slice(0, 4) : investmentRanges;

    return (
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Investment
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    What does an outdoor living project cost?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {investmentIntro}
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ranges.map((item) => (
                    <Card key={item.category} className="p-6 flex flex-col">
                        <h3 className="text-lg font-bold">{item.category}</h3>
                        <p className="mt-2 text-2xl font-bold text-primary">{item.range}</p>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                        </p>
                    </Card>
                ))}
            </div>

            <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
                {investmentDisclaimer}
            </p>

            {teaser && (
                <div className="flex justify-center">
                    <Button asChild size="lg" variant="outline" className="rounded-full">
                        <Link href="/investment">See Investment Ranges</Link>
                    </Button>
                </div>
            )}
        </div>
    );
}
