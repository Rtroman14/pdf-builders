import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { services } from "@/lib/services-data";
import { ImagePlaceholder } from "@/components/image-placeholder";

export const Services = ({
    heading = "Everything we build for your backyard",
    subheading = "One team designing and building every element of your outdoor living space.",
}) => {
    return (
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{subheading}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative aspect-16/10 w-full">
                            <ImagePlaceholder
                                src={service.tileImage}
                                label={service.name}
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            />
                        </div>
                        <div className="p-6 space-y-2">
                            <h3 className="text-xl font-bold flex items-center justify-between">
                                {service.name}
                                <ArrowRightIcon className="size-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {service.short}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
