"use client";

import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { defaultConfig } from "@/lib/default-config";
import { services } from "@/lib/services-data";

export function NavBar({
    phoneNumber = defaultConfig.phoneNumber,
    companyName = defaultConfig.companyName,
    cityName = "City",
    placeId = null,
}) {
    const navItems = useMemo(
        () => [
            {
                title: "Projects",
                href: "/projects",
            },
            {
                title: "Services",
                children: [
                    {
                        title: "All Services",
                        href: "/services",
                        description: "Explore everything we design and build for your backyard.",
                    },
                    ...services.map((service) => ({
                        title: service.name,
                        href: `/services/${service.slug}`,
                        description: service.short,
                    })),
                ],
            },
            {
                title: "About",
                href: "/about-us",
            },
        ],
        [cityName]
    );
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    return (
        <motion.nav
            initial={{
                y: -80,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                ease: [0.6, 0.05, 0.1, 0.9],
                duration: 0.8,
            }}
            className="md:max-w-7xl fixed top-4 mx-auto inset-x-0 z-99999 w-[90vw] lg:w-full"
        >
            <div className="w-full">
                {isMobile ? (
                    <MobileNavbar
                        navItems={navItems}
                        phoneNumber={phoneNumber}
                        companyName={companyName}
                        placeId={placeId}
                    />
                ) : (
                    <DesktopNavbar
                        navItems={navItems}
                        phoneNumber={phoneNumber}
                        companyName={companyName}
                        placeId={placeId}
                    />
                )}
            </div>
        </motion.nav>
    );
}
