"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { cn } from "@/lib/utils";

// Replace these with real customer photos when available.
const defaultAvatars = [
    { imageUrl: "https://avatar.vercel.sh/anderson" },
    { imageUrl: "https://avatar.vercel.sh/markr" },
    { imageUrl: "https://avatar.vercel.sh/jencole" },
    { imageUrl: "https://avatar.vercel.sh/keller" },
];

function GoogleWordmark() {
    const letters = [
        { char: "G", color: "#4285F4" },
        { char: "o", color: "#EA4335" },
        { char: "o", color: "#FBBC05" },
        { char: "g", color: "#4285F4" },
        { char: "l", color: "#34A853" },
        { char: "e", color: "#EA4335" },
    ];

    return (
        <span className="font-semibold tracking-tight">
            {letters.map((letter, index) => (
                <span key={index} style={{ color: letter.color }}>
                    {letter.char}
                </span>
            ))}
        </span>
    );
}

export function GoogleReviewsBadge({
    avatars = defaultAvatars,
    label = "Trusted By Central Ohio Homeowners",
    rating = 5,
    className,
}) {
    return (
        <div className={cn("flex items-center justify-center gap-3", className)}>
            <AvatarCircles avatarUrls={avatars} />
            <div className="flex flex-col items-start text-left">
                <p className="text-sm md:text-base font-medium text-white">{label}</p>
                <div className="mt-0.5 flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                        {[...Array(Math.floor(rating))].map((_, i) => (
                            <StarIcon key={i} className="size-4 text-yellow-500" />
                        ))}
                    </div>
                    <span className="text-sm text-white/80">On</span>
                    <GoogleWordmark />
                </div>
            </div>
        </div>
    );
}
