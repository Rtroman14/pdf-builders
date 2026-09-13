import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { services } from "@/lib/services-data";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function BuildTiles() {
    const tileServices = services.filter((s) => s.featured && !s.isTransformation);
    const transformation = services.find((s) => s.isTransformation);

    return (
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    What do you want to build?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    From a single deck to an entire outdoor living space, explore what's possible
                    for your backyard.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {tileServices.map((service) => (
                    <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group relative aspect-4/5 rounded-2xl overflow-hidden"
                    >
                        <ImagePlaceholder label={service.name} className="rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
                            <h3 className="text-lg font-semibold text-white leading-tight">
                                {service.name}
                            </h3>
                            <ArrowRightIcon className="size-4 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                        </div>
                    </Link>
                ))}
            </div>

            {transformation && (
                <Link
                    href={`/services/${transformation.slug}`}
                    className="group relative block h-64 sm:h-80 rounded-2xl overflow-hidden"
                >
                    <ImagePlaceholder label="Complete Backyard Transformations" className="rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                    <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12 max-w-2xl">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white">
                            Complete Backyard Transformations
                        </h3>
                        <p className="mt-3 text-neutral-200 leading-relaxed">
                            {transformation.short}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-white font-semibold">
                            Explore transformations
                            <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </Link>
            )}
        </div>
    );
}
