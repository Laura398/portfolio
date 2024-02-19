import './Header.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <a href="#home">
                    <img src="assets/logo3.png" alt="Logo" className="logo" />
                </a>
            </div>
            <div className="header__menu">
                <a href="#" className="nav-selected">Home</a>
                <a href="#about">About</a>
                <a href="#stack">Stack</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
                <a target="_blank" href="https://www.linkedin.com/in/laura-mathieu-95385a18b"><LinkedInIcon className="linkedin-icon" fontSize='large' sx={{ color: "white" }} /></a>
            </div>
        </div>
    )
}