import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { useTranslation } from "react-i18next";
import LanguageIcon from '@mui/icons-material/Language';
import { useMediaQuery } from "@mui/material";

const countries = [
    {
        code: "en",
        name: "English",
    },
    {
        code: "fr",
        name: "Français",
    },
];

export default function LanguageSelector () {
    const { i18n } = useTranslation();

    const isDesktop = useMediaQuery("(min-width:600px)");

    const flag =
    i18n.language === "en"
      ? "/assets/flags/uk.png"
      : "/assets/flags/france.png";

    return (
        <Dropdown>
            {/* <MenuButton variant="soft" sx={{margin: 0, padding: "0 10px", '&:hover': {
                        backgroundColor: "#61dafb", color: "white"
                    }}}>
                <LanguageIcon />
            </MenuButton> */}
            <MenuButton variant="plain" sx={{color: "white"}}>
                {isDesktop && (i18n.language === "en" ? "English" : "Français")}
                {isDesktop ? 
                    <img src={flag} width="25" style={{ marginLeft: "10px" }} /> :
                    <img src={flag} width="25" />
                }
            </MenuButton>
            <Menu>
                {countries.map((lng) => {
                    return (
                        <MenuItem key={lng.code} onClick={() => {
                            i18n.changeLanguage(lng.code);
                            localStorage.setItem("lang", lng.code);
                        }}>{lng.name}</MenuItem>
                    );
                })}
            </Menu>
        </Dropdown>
    );
};