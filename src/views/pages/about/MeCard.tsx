import { Avatar, Card, CardContent, Chip, Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";

export default function MeCard() {
    const { t } = useTranslation();

    return (
        <Card className="about-card">
            <CardContent sx={{ alignItems: 'center', textAlign: 'center', padding: "10px" }}>
                <Avatar src="/assets/avatar2.jpeg" sx={{ '--Avatar-size': '8rem', border: "1px solid white" }} />
                <Chip
                size="md"
                variant="soft"
                color="primary"
                sx={{
                    mt: -1,
                    mb: 1,
                    border: '3px solid',
                    borderColor: 'background.surface',
                    backgroundColor: "#61dafb",
                }}
                >
                    PRO
                </Chip>
                <Typography level="h2" textColor='#61dafb'>{t("aboutMe")}</Typography>
                <Typography level="body-lg" sx={{ maxWidth: '95%' }} textColor='white'>
                    {t("aboutMeText")}
                </Typography>
            </CardContent>
        </Card>
    );
}