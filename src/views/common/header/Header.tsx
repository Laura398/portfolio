import { useEffect, useState } from 'react';
import './Header.scss';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import MailIcon from '@mui/icons-material/Mail';
import { getCurrentDimension } from '../../../helpers/get-current-dimension';
import LanguageSelector from '../language-selector/LanguageSelector';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation();
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [isPhone, setIsPhone] = useState(screenSize.width < 768);

    useEffect(() => {
        const updateDimension = () => {
            const { width } = getCurrentDimension();
            setScreenSize(getCurrentDimension())
            setIsPhone(width < 768)
        }
        window.addEventListener('resize', updateDimension);

        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <div className="header">
            {!isPhone &&
            <div className="header__logo">
                <a href="#home">
                    <img src="assets/avatar.png" alt="Logo" className="logo" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} />
                </a>
            </div>}
            
            {isPhone ?
                <div className="header__menu phone">
                    <a href="#home">
                        <img src="assets/avatar.png" alt="Logo" className="logo" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} />
                    </a>
                    <a href="#about">
                        <AccountBoxIcon id="about-id" className="header-icons" fontSize='large' sx={{ color: "white" }} />
                    </a>
                    <a href="#stack">
                        <DataObjectIcon id="stack-id" className="header-icons" fontSize='large' sx={{ color: "white" }} />
                    </a>
                    <a href="#home-portfolio">
                        <PermMediaIcon id="portfolio-id" className="header-icons" fontSize='large' sx={{ color: "white" }} />
                    </a>
                    <a href="#contact">
                        <MailIcon id="contact-id" className="header-icons" fontSize='large' sx={{ color: "white" }} />
                    </a>
                    <LanguageSelector />
                </div> :
                <div className="header__menu">
                    <a href="#">
                        {t("home")}
                    </a>
                    <a href="#about">
                        {t("about")}
                    </a>
                    <a href="#stack">
                        {t("stack")}
                    </a>
                    <a href="#home-portfolio">
                        {t("portfolio")}
                    </a>
                    <a href="#contact">
                        {t("contact")}
                    </a>
                    <LanguageSelector />
                </div>
            }
        </div>
    )
}