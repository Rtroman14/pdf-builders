import Image from "next/image";
import { cn } from "@/lib/utils";
import { PhotoIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

/**
 * Renders a photo when `src` is provided, otherwise a tasteful gradient block
 * with a label so the layout reads as intentional until real media arrives.
 */
export function ImagePlaceholder({
    src,
    alt,
    label = "Photo coming soon",
    video = false,
    sizes = "(min-width: 1024px) 50vw, 100vw",
    priority = false,
    className,
}) {
    if (src) {
        return (
            <Image
                src={src}
                alt={alt || label}
                fill
                sizes={sizes}
                priority={priority}
                className={cn("object-cover", className)}
            />
        );
    }

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
