"use client";

import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GetQuoteButton } from "@/components/get-quote-button";
import { Button } from "@/components/ui/button";
import { GoogleReviewsBadge } from "@/components/google-reviews-badge";

export function Hero({ title, subheading, className }) {
    return (
        <div className={cn("w-full flex flex-col items-center text-center", className)}>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="relative z-10 mb-6"
            >
                <GoogleReviewsBadge />
            </motion.div>

            <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.1 }}
                className="text-5xl tracking-tight lg:text-7xl font-semibold relative z-10 text-white max-w-5xl"
            >
                <Balancer>{title}</Balancer>
            </motion.h1>

            <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl relative z-10 text-neutral-200 max-w-2xl"
            >
                <Balancer>{subheading}</Balancer>
            </motion.p>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
                className="mt-8 relative z-10 flex flex-col sm:flex-row items-center gap-4"
            >
                <GetQuoteButton className="rounded-full" />
                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-transparent text-white border-white/40 hover:bg-white hover:text-black"
                >
                    <Link href="/projects">View Our Work</Link>
                </Button>
            </motion.div>
        </div>
    );
}
