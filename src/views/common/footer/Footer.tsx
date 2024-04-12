import { useTranslation } from 'react-i18next';
import './Footer.scss';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            © Laura Mathieu - 2024 - {t("allRightsReserved")}
        </footer>
    )
}