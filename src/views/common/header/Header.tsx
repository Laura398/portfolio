import { useEffect, useState } from 'react';
import './Header.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import MailIcon from '@mui/icons-material/Mail';
import { getCurrentDimension } from '../../../helpers/get-current-dimension';

export default function Header() {
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
                    <img src="assets/logo3.png" alt="Logo" className="logo" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} />
                </a>
            </div>}
            
            {isPhone ?
                <div className="header__menu phone">
                    <a href="#home">
                        <img src="assets/logo3.png" alt="Logo" className="logo" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} />
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
                    <a target="_blank" href="https://www.linkedin.com/in/laura-mathieu-95385a18b">
                        <LinkedInIcon fontSize='large' sx={{ color: "white" }} />
                    </a>
                </div> :
                <div className="header__menu">
                    <a href="#">
                        Home
                    </a>
                    <a href="#about">
                        About
                    </a>
                    <a href="#stack">
                        Stack
                    </a>
                    <a href="#home-portfolio">
                        Portfolio
                    </a>
                    <a href="#contact">
                        Contact
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/laura-mathieu-95385a18b">
                        <LinkedInIcon className="linkedin-icon" fontSize='large' sx={{ color: "white" }} />
                    </a>
                </div>
            }



                {/* <a href="#" className="nav-selected" >
                    {isPhone ? "" : "Home"}
                </a>
                <a href="#about">
                    {isPhone ? <AccountBoxIcon fontSize='large' sx={{ color: "white" }} /> : "About"}
                </a>
                <a href="#stack">
                    {isPhone ? <DataObjectIcon fontSize='large' sx={{ color: "white" }} /> : "Stack"}
                </a>
                <a href="#home-portfolio">
                    {isPhone ? <PermMediaIcon fontSize='large' sx={{ color: "white" }} /> : "Portfolio"}
                </a>
                <a href="#contact">
                    {isPhone ? <PermContactCalendarIcon fontSize='large' sx={{ color: "white" }} /> : "Contact"}
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/laura-mathieu-95385a18b"><LinkedInIcon className="linkedin-icon" fontSize='large' sx={{ color: "white" }} /></a> */}
        </div>
    )
}