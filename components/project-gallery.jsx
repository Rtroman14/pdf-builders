"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export function ProjectGallery({ photos, categories }) {
    const [filter, setFilter] = useState("all");
    const [active, setActive] = useState(null);

    const available = categories.filter((c) => photos.some((p) => p.category === c.slug));
    const visible = filter === "all" ? photos : photos.filter((p) => p.category === filter);

    useEffect(() => {
        if (!active) return;
        const onKey = (e) => e.key === "Escape" && setActive(null);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [active]);

    const filters = [{ slug: "all", label: "All" }, ...available];

    return (
        <div className="space-y-10">
            <div className="flex flex-wrap justify-center gap-2">
                {filters.map((c) => (
                    <button
                        key={c.slug}
                        type="button"
                        onClick={() => setFilter(c.slug)}
                        aria-pressed={filter === c.slug}
                        className={cn(
                            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                            filter === c.slug
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-card hover:bg-secondary"
                        )}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {visible.map((photo) => (
                    <button
                        key={photo.src}
                        type="button"
                        onClick={() => setActive(photo)}
                        className="group relative aspect-4/3 overflow-hidden rounded-2xl border bg-secondary"
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(min-width: 1024px) 33vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </button>
                ))}
            </div>

            {active && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={active.alt}
                    onClick={() => setActive(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
                >
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={() => setActive(null)}
                        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                    >
                        <XMarkIcon className="size-6" />
                    </button>
                    <div className="relative h-full w-full">
                        <Image
                            src={active.src}
                            alt={active.alt}
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
