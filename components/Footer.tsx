"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-200 py-12 text-slate-500">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">BUILDART CONSTRUCTION</h2>
                        <p className="max-w-sm mb-6">
                            {t("footer.desc")}
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-slate-900 transition-colors cursor-pointer">
                                FB
                            </div>
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-slate-900 transition-colors cursor-pointer">
                                IG
                            </div>
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-slate-900 transition-colors cursor-pointer">
                                WA
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-sm">{t("nav.services")}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>{t("services.items.turnkey.title")}</li>
                            <li>{t("services.items.plumbing.title")}</li>
                            <li>{t("services.items.design.title")}</li>
                            <li>{t("services.items.handyman.title")}</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-sm">{t("nav.contact")}</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-teal-600 font-bold">555-0123</li>
                            <li>{t("hero.title_highlight")}</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 text-center text-xs text-gray-600">
                    <p>Â© {year} {t("footer.rights")}</p>
                </div>
            </div>
        </footer>
    );
}

