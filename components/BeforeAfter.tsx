"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function BeforeAfter() {
    const { t } = useLanguage();

    return (
        <section id="before-after" className="py-24 bg-white text-slate-600">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-teal-600">
                        {t("beforeAfter.title")}
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        {t("beforeAfter.subtitle")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
                >
                    <ReactCompareSlider
                        itemOne={
                            <ReactCompareSliderImage
                                src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=2070&auto=format&fit=crop"
                                alt="Before"
                            />
                        }
                        itemTwo={
                            <ReactCompareSliderImage
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
                                alt="After"
                            />
                        }
                        style={{ height: '600px', width: '100%' }}
                        handle={
                            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-20 cursor-ew-resize">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        }
                    />
                </motion.div>

                <div className="flex justify-center mt-6 gap-8 text-sm text-gray-500 font-mono uppercase tracking-widest">
                    <span>{t("beforeAfter.before")}</span>
                    <span>{t("beforeAfter.after")}</span>
                </div>
            </div>
        </section>
    );
}

