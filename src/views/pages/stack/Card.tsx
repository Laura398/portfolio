import { Tooltip } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { useTranslation } from "react-i18next";

export default function RowCard(props: {
  item: { title: string; logos: { title: string; logo: string }[] };
}) {
  const { t } = useTranslation();

  const title =
    props.item.title.toLowerCase() === "database"
      ? t("stack-database")
      : props.item.title.toLowerCase();

  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      id="row-card"
      sx={{ backgroundColor: "rgba(91, 128, 174, 0.471)" }}
    >
      <CardContent id={props.item.title.toLowerCase()} className="stack-logos">
        {props.item.logos.map((logo, index) => {
          return (
            <Tooltip
              title={logo.title}
              key={index}
              variant="plain"
              enterTouchDelay={0}
            >
              <img src={logo.logo} alt={title} />
            </Tooltip>
          );
        })}
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: "vertical-rl",
          justifyContent: "center",
          fontSize: "xs",
          fontWeight: "xl",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderLeft: "1px solid",
          borderColor: "divider",
        }}
      >
        {title.toUpperCase()}
      </CardOverflow>
    </Card>
  );
}
