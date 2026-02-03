"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingApproach() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-luxury-charcoal relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                            {t("pricing.title")} <br />
                            <span className="text-luxury-gold">{t("pricing.title_highlight")}</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300">
                            <p>
                                {t("pricing.desc_1")}
                            </p>
                            <p className="border-l-4 border-luxury-gold pl-6 italic text-white font-medium">
                                "{t("pricing.quote")}"
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-luxury-black p-8 md:p-12 rounded-3xl border border-luxury-gold/20 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">{t("pricing.approach_title")}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-luxury-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">{t("pricing.points.1.title")}</h4>
                                    <p className="text-sm text-gray-400">{t("pricing.points.1.desc")}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-luxury-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">{t("pricing.points.2.title")}</h4>
                                    <p className="text-sm text-gray-400">{t("pricing.points.2.desc")}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-luxury-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">{t("pricing.points.3.title")}</h4>
                                    <p className="text-sm text-gray-400">{t("pricing.points.3.desc")}</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
