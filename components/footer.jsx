import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { defaultConfig } from "@/lib/default-config";
import { services } from "@/lib/services-data";
import { credentials } from "@/lib/credentials-data";
import { FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

export const Footer = ({
    companyName = defaultConfig.companyName,
    phoneNumber = defaultConfig.phoneNumber,
    address = defaultConfig.address,
    email = defaultConfig.email,
    placeId = null,
}) => {
    const getHref = (href) => (placeId ? `/${placeId}${href}` : href);

    const footerServices = services.slice(0, 6).map((s) => ({
        name: s.name,
        href: `/services/${s.slug}`,
    }));

    const quickLinks = [
        { name: "Projects", href: "/projects" },
        { name: "Our Process", href: "/process" },
        { name: "About", href: "/about-us" },
        { name: "Reviews", href: "/reviews" },
        { name: "Resources", href: "/resources" },
        { name: "Service Areas", href: "/service-areas" },
        { name: "Investment", href: "/investment" },
        { name: "Contact", href: "/contact" },
    ];

    const socials = [
        { name: "Facebook", href: defaultConfig.socials.facebook, icon: FaFacebook },
        { name: "TikTok", href: defaultConfig.socials.tiktok, icon: FaTiktok },
        { name: "X", href: defaultConfig.socials.twitter, icon: FaXTwitter },
    ];

    return (
        <footer className="relative max-w-7xl mx-auto">
            <div className="border-t border-neutral-100 relative bg-white">
                {/* Credentials row */}
                <div className="border-b border-neutral-100 px-8 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        {credentials.map((c) => (
                            <span
                                key={c.name}
                                className="text-xs font-medium text-muted-foreground border rounded-full px-3 py-1"
                                title={c.name}
                            >
                                {c.short}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="mb-2">
                            <Logo companyName={companyName} />
                            <p className="text-xs text-muted-foreground mt-1 px-2">
                                {defaultConfig.tagline}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="size-6" />
                                </Link>
                            ))}
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {companyName} is a family-owned outdoor living company designing and
                            building custom decks, patios, and complete backyard transformations
                            throughout {defaultConfig.region}.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerServices.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={getHref(service.href)}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                            Explore
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={getHref(link.href)}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                            Contact Info
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="size-5 text-muted-foreground shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm">{address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiPhone className="size-5 text-muted-foreground shrink-0" />
                                <a
                                    href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    {phoneNumber}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="size-5 text-muted-foreground shrink-0" />
                                <a
                                    href={`mailto:${email}`}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    {email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright Row */}
                <div className="border-t border-muted p-6 text-center text-sm text-muted-foreground">
                    <p>
                        Copyright &copy; {new Date().getFullYear()} {companyName}. All rights
                        reserved. | Website designed by{" "}
                        <a
                            href="https://roofera.ai?utm_source=client_website&utm_medium=footer&utm_campaign=branding"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity logo-font"
                        >
                            <span className="text-black">Roof</span>
                            <span style={{ color: "#3DCF8E" }}>Era</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
