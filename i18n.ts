import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

async function initI18n() {
    await i18n
        .use(Backend)
        .use(initReactI18next)
        .init({
            lng: localStorage.getItem("lang") || "fr",
            fallbackLng: 'fr',
            debug: false,
            interpolation: {
                escapeValue: false,
            },
            backend: {
                loadPath: "/locales/{{lng}}/translation.json",
            },
        });
}

initI18n();

export default i18n;