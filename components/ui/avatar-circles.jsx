"use client";

import { cn } from "@/lib/utils";

export function AvatarCircles({ avatarUrls = [], numPeople, className }) {
    return (
        <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}>
            {avatarUrls.map((avatar, index) => (
                <img
                    key={index}
                    className="size-10 rounded-full border-2 border-white object-cover"
                    src={avatar.imageUrl}
                    width={40}
                    height={40}
                    alt={`Reviewer ${index + 1}`}
                />
            ))}
            {(numPeople ?? 0) > 0 && (
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white">
                    +{numPeople}
                </span>
            )}
        </div>
    );
}
