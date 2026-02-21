"use client";

import { motion } from "framer-motion";
import {
    Hammer,
    PaintBucket,
    Wrench,
    Zap,
    Droplet,
    Ruler,
    Home,
    Grid,
    type LucideIcon
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, LucideIcon> = {
    Home, Ruler, Droplet, Zap, Hammer, Grid, PaintBucket, Wrench,
};

type SanityService = {
    _id: string;
    titleRu: string;
    titleHe: string;
    descriptionRu: string;
    descriptionHe: string;
    icon?: string;
    order?: number;
};

const fallbackClassNames = [
    "md:col-span-2 md:row-span-2 bg-luxury-charcoal",
    "md:col-span-1 bg-neutral-900",
    "md:col-span-1 bg-neutral-900",
    "md:col-span-1 bg-neutral-900",
    "md:col-span-1 bg-neutral-900",
    "md:col-span-1 bg-neutral-900",
    "md:col-span-1 bg-neutral-900",
];

export default function Services({ sanityServices }: { sanityServices?: SanityService[] }) {
    const { t, language } = useLanguage();

    const hardcodedServices = [
        { title: t("services.items.turnkey.title"), icon: "Home", description: t("services.items.turnkey.desc") },
        { title: t("services.items.design.title"), icon: "Ruler", description: t("services.items.design.desc") },
        { title: t("services.items.plumbing.title"), icon: "Droplet", description: t("services.items.plumbing.desc") },
        { title: t("services.items.electric.title"), icon: "Zap", description: t("services.items.electric.desc") },
        { title: t("services.items.handyman.title"), icon: "Hammer", description: t("services.items.handyman.desc") },
        { title: t("services.items.tiling.title"), icon: "Grid", description: t("services.items.tiling.desc") },
        { title: t("services.items.painting.title"), icon: "PaintBucket", description: t("services.items.painting.desc") },
    ];

    const services = sanityServices && sanityServices.length > 0
        ? sanityServices.map((s, i) => ({
            title: language === "he" ? s.titleHe : s.titleRu,
            icon: s.icon || "Home",
            description: language === "he" ? s.descriptionHe : s.descriptionRu,
            className: fallbackClassNames[i] ?? "md:col-span-1 bg-neutral-900",
        }))
        : hardcodedServices.map((s, i) => ({
            ...s,
            className: fallbackClassNames[i] ?? "md:col-span-1 bg-neutral-900",
        }));

    return (
        <section id="services" className="py-24 bg-luxury-black text-luxury-light">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-luxury-gold mb-4">{t("services.title")}</h2>
                    <p className="text-gray-400">{t("services.subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] ?? Home;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.1)" }}
                                className={`p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-luxury-gold/30 transition-all duration-300 ${service.className}`}
                            >
                                <div className="mb-4">
                                    <IconComponent className="w-8 h-8 text-luxury-gold" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                                    <p className="text-sm text-gray-400 leading-snug">{service.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
