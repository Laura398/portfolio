import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { useTranslation } from "react-i18next";
import LanguageIcon from '@mui/icons-material/Language';

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

    return (
        <Dropdown>
            <MenuButton variant="soft" sx={{margin: 0, padding: "0 10px", '&:hover': {
                        backgroundColor: "#61dafb", color: "white"
                    }}}>
                <LanguageIcon />
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