"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type SanityFaq = {
    _id: string;
    questionRu: string;
    questionHe: string;
    answerRu: string;
    answerHe: string;
    order?: number;
};

export default function FAQ({ sanityFaqs }: { sanityFaqs?: SanityFaq[] }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t, language } = useLanguage();

    const faqs = sanityFaqs && sanityFaqs.length > 0
        ? sanityFaqs.map(f => ({
            question: language === "he" ? f.questionHe : f.questionRu,
            answer: language === "he" ? f.answerHe : f.answerRu,
        }))
        : [0, 1, 2, 3].map(i => ({
            question: t(`faq.items.${i}.q`),
            answer: t(`faq.items.${i}.a`),
        }));

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-12 text-center">
                    {t("faq.title")}
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-slate-200 overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-xl font-medium transition-colors ${activeIndex === index ? 'text-teal-600' : 'text-slate-900 group-hover:text-teal-600'}`}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                    className="text-teal-600"
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
                                        <p className="pb-6 text-slate-500 leading-relaxed">{faq.answer}</p>
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

