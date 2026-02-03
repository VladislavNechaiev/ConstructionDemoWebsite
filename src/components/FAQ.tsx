"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useLanguage();

    const faqs = [0, 1, 2, 3].map(i => ({
        question: t(`faq.items.${i}.q`),
        answer: t(`faq.items.${i}.a`)
    }));

    return (
        <section id="faq" className="py-24 bg-luxury-charcoal">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12 text-center">
                    {t("faq.title")}
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-white/10 overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-xl font-medium transition-colors ${activeIndex === index ? 'text-luxury-gold' : 'text-white group-hover:text-luxury-gold'}`}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                    className="text-luxury-gold"
                                >
                                    <Plus className="w-6 h-6" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="pb-6 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
