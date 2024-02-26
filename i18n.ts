import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

i18n
.use(Backend)
.use(initReactI18next)
.init({
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: await import("./public/locales/en/translation.json"),
        },
        fr: {
            translation: await import("./public/locales/fr/translation.json"),
        },
    },
});

export default i18n;