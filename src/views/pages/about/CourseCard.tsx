import { Avatar, Card, CardContent, Chip, Divider, Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";

export default function CourseCard() {
  const { t } = useTranslation();

  return (
    <Card className="about-card">
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar
          src="/assets/infos.png"
          sx={{
            "--Avatar-size": "8rem",
            border: "1px solid white",
            marginTop: "10px",
          }}
        />
        <Chip
          size="md"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: "3px solid",
            borderColor: "background.surface",
            backgroundColor: "#61dafb",
          }}
        >
          EXP
        </Chip>
        <Typography
          level="h2"
          textColor="#61dafb"
          sx={{ padding: 0, margin: 0 }}
        >
          {t("course")}
        </Typography>
        <CardContent className="about-card-main-content">
          <CardContent>
            <Divider className="about-divider">
              <Typography
                className="about-typo"
                level="body-lg"
                textColor="black"
              >
                💼 {t("experience")}
              </Typography>
            </Divider>
            <Typography
              className="about-typo"
              level="body-lg"
              textColor="white"
            >
              <b>{t("exp1Title")}</b> - {t("exp1Text")}
            </Typography>
          </CardContent>
          <CardContent>
            <Divider className="about-divider">
              <Typography
                className="about-typo"
                level="body-lg"
                textColor="black"
              >
                📚 {t("certifications")}
              </Typography>
            </Divider>
            <Typography
              className="about-typo"
              level="body-lg"
              textColor="white"
            >
              <b>{t("certif1Title")}</b> - {t("certif1Text")}
            </Typography>
            <Typography
              className="about-typo"
              level="body-lg"
              textColor="white"
            >
              <b>{t("certif2Title")}</b> - {t("certif2Text")}
            </Typography>
          </CardContent>
        </CardContent>
      </CardContent>
    </Card>
  );
}
