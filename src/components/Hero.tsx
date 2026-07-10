"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background - Video Placeholder */}
            <div className="absolute inset-0 z-0 bg-white">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                    poster="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop"
                >
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide mb-6 text-slate-900 drop-shadow-lg">
                        {t("hero.title_prefix")} <span className="text-teal-600">{t("hero.title_highlight")}</span>.
                        <br />
                        {t("hero.title_suffix")}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                        {t("hero.subtitle_1")} <br />
                        <span className="text-teal-600 font-semibold">{t("hero.subtitle_2")}</span>
                    </p>

                    <motion.a
                        href="tel:+9725550123"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-teal-600 text-slate-900 px-8 py-4 rounded-full text-lg font-bold tracking-wide hover:bg-yellow-500 transition-colors shadow-lg shadow-teal-500/30"
                    >
                        <Phone className="w-6 h-6" />
                        {t("hero.cta")}
                    </motion.a>
                </motion.div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
}

