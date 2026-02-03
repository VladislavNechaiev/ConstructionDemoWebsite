"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CalBooking() {
    const { t, language } = useLanguage();

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "styles": { "branding": { "brandColor": "#d4af37" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section id="booking" className="py-24 bg-luxury-black bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-luxury-charcoal p-8 md:p-12 rounded-3xl border border-luxury-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                            {t("contact.title")}
                        </h2>
                        <p className="text-gray-400">
                            {t("contact.subtitle")}
                        </p>
                    </div>

                    <div className="w-full h-[600px] bg-white rounded-2xl overflow-hidden">
                        <iframe
                            src="https://cal.com/vlad-k-w00a9z/15min"
                            style={{ width: "100%", height: "100%", border: "none" }}
                            title="Book a consultation"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
