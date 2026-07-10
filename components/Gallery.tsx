"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type SanityProject = {
    _id: string;
    titleRu?: string;
    titleHe?: string;
    imageUrl: string;
    category?: string;
    order?: number;
};

const fallbackProjects = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    "https://images.unsplash.com/photo-1600210491892-03d54cc0d578",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfe1",
];

export default function Gallery({ sanityProjects }: { sanityProjects?: SanityProject[] }) {
    const { t, language } = useLanguage();

    const projects = sanityProjects && sanityProjects.length > 0
        ? sanityProjects.map(p => ({
            src: p.imageUrl,
            title: language === "he" ? (p.titleHe || p.titleRu || "") : (p.titleRu || p.titleHe || ""),
        }))
        : fallbackProjects.map((src, i) => ({
            src: `${src}?q=80&w=800&auto=format&fit=crop`,
            title: `Project ${i + 1}`,
        }));

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-12 text-center">
                    {t("gallery.title")} <span className="text-teal-600">{t("gallery.title_highlight")}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-square group overflow-hidden rounded-xl cursor-pointer"
                        >
                            <img
                                src={project.src}
                                alt={project.title || `Project ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-teal-600 border border-teal-500 px-6 py-2 rounded-full font-mono uppercase tracking-widest text-sm">
                                    {t("gallery.view")}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

