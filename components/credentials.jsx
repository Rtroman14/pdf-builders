import { credentials } from "@/lib/credentials-data";
import { cn } from "@/lib/utils";

/**
 * Credentials shown as clean text badges. Brandon is gathering the official
 * logos — once provided, swap these pills for the logo images.
 */
export function Credentials({ className, variant = "bar" }) {
    return (
        <div
            className={cn(
                "flex flex-wrap items-center justify-center gap-x-4 gap-y-3",
                className
            )}
        >
            {credentials.map((c) => (
                <div
                    key={c.name}
                    className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium",
                        variant === "bar"
                            ? "border-white/25 bg-white/10 text-white backdrop-blur-sm"
                            : "border-border bg-card text-foreground"
                    )}
                    title={c.name}
                >
                    {c.short}
                </div>
            ))}
        </div>
    );
}
