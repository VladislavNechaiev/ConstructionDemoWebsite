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
    Grid
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            title: t("services.items.turnkey.title"),
            icon: <Home className="w-8 h-8 text-luxury-gold" />,
            description: t("services.items.turnkey.desc"),
            className: "md:col-span-2 md:row-span-2 bg-luxury-charcoal",
        },
        {
            title: t("services.items.design.title"),
            icon: <Ruler className="w-6 h-6 text-luxury-gold" />,
            description: t("services.items.design.desc"),
            className: "md:col-span-1 bg-neutral-900",
        },
        {
            title: t("services.items.plumbing.title"),
            icon: <Droplet className="w-6 h-6 text-luxury-gold" />,
            description: t("services.items.plumbing.desc"),
            className: "md:col-span-1 bg-neutral-900",
        },
        {
            title: t("services.items.electric.title"),
            icon: <Zap className="w-6 h-6 text-luxury-gold" />,
            description: t("services.items.electric.desc"),
            className: "md:col-span-1 bg-neutral-900",
        },
        {
            title: t("services.items.handyman.title"),
            icon: <Hammer className="w-6 h-6 text-luxury-gold" />,
            description: t("services.items.handyman.desc"),
            className: "md:col-span-1 bg-neutral-900",
        },
        {
            title: t("services.items.tiling.title"),
            icon: <Grid className="w-6 h-6 text-luxury-gold" />,
            description: t("services.items.tiling.desc"),
            className: "md:col-span-1 bg-neutral-900",
        },
        {
            title: t("services.items.painting.title"),
            icon: <PaintBucket className="w-6 h-6 text-luxury-gold" />,
            description: t("services.items.painting.desc"),
            className: "md:col-span-1 bg-neutral-900",
        },
    ];

    return (
        <section id="services" className="py-24 bg-luxury-black text-luxury-light">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-luxury-gold mb-4">{t("services.title")}</h2>
                    <p className="text-gray-400">{t("services.subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.1)" }}
                            className={`p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-luxury-gold/30 transition-all duration-300 ${service.className}`}
                        >
                            <div className="mb-4">{service.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                                <p className="text-sm text-gray-400 leading-snug">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
