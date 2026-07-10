"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const { language, setLanguage, t } = useLanguage();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { label: t("nav.services"), id: "services" },
        { label: t("nav.beforeAfter"), id: "before-after" },
        { label: t("nav.gallery"), id: "gallery" },
        { label: t("nav.faq"), id: "faq" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200"
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 border-2 border-teal-500 flex items-center justify-center rounded bg-white group-hover:bg-teal-600 transition-colors duration-300">
                        <span className="text-teal-600 font-serif font-bold text-xl group-hover:text-slate-900">I</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-900 font-bold text-lg leading-none tracking-wider">{t("brand.name")}</span>
                        <span className="text-teal-600 text-xs tracking-[0.2em] font-light">{t("brand.sub")}</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors tracking-wide uppercase"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Switcher */}
                    <button
                        onClick={() => setLanguage(language === "ru" ? "he" : "ru")}
                        className="flex items-center gap-1 text-slate-600 hover:text-teal-600 transition-colors uppercase font-mono text-sm"
                    >
                        <Globe className="w-4 h-4" />
                        {language === "ru" ? "HE" : "RU"}
                    </button>

                    <button
                        onClick={() => scrollToSection('booking')}
                        className="flex items-center gap-2 bg-teal-600 text-slate-900 px-5 py-2 rounded-full font-bold hover:bg-white transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        <span>{t("nav.book")}</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setLanguage(language === "ru" ? "he" : "ru")}
                        className="text-slate-600 hover:text-teal-600"
                    >
                        <div className="flex items-center gap-1 font-bold text-sm">
                            <Globe className="w-5 h-5" />
                            {language.toUpperCase()}
                        </div>
                    </button>
                    <button
                        className="text-slate-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden bg-white border-t border-slate-200"
                >
                    <div className="flex flex-col p-6 gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-xl font-medium text-slate-900 hover:text-teal-600 text-left"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('booking')}
                            className="flex items-center justify-center gap-2 bg-teal-600 text-slate-900 px-5 py-4 rounded-lg font-bold w-full"
                        >
                            <Phone className="w-5 h-5" />
                            {t("nav.book")}
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

