import { cn } from "@/lib/utils";
import { PhotoIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

/**
 * Reusable placeholder for imagery that will be supplied later.
 * Renders a tasteful gradient block with a label so the layout reads as
 * intentional until real photos/videos are dropped in.
 */
export function ImagePlaceholder({ label = "Photo coming soon", video = false, className }) {
    const Icon = video ? PlayCircleIcon : PhotoIcon;
    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden bg-gradient-to-br from-neutral-200 via-neutral-100 to-secondary flex items-center justify-center",
                className
            )}
        >
            <div className="flex flex-col items-center gap-2 text-neutral-400 px-4 text-center">
                <Icon className="size-10" />
                <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
            </div>
        </div>
    );
}
