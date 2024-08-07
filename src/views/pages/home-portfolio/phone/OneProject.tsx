import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";
import { useTranslation } from "react-i18next";
import { Project } from "../../../../interfaces/types";
import { useState } from "react";
import ResponsiveModal from "../../../../components/modal/Modal";

export default function OneProject(props: { project: Project }) {
  const { t } = useTranslation();
  const { project } = props;

  const [open, setOpen] = useState(false);

  const type2 = t(project.type2);

  const goTo = () => {
    if (project.mobile) setOpen(true);
    else window.open(project.link, "_blank");
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: 320,
          margin: "auto",
          backgroundColor: "rgba(91, 128, 174, 0.471)",
        }}
        onClick={goTo}
      >
        <CardOverflow sx={{ borderBottom: "1px solid white" }}>
          <AspectRatio ratio="2">
            <img src={project.image} loading="lazy" alt={project.name} />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md" textColor="#61dafb">
            {project.name}
          </Typography>
          <Typography level="body-sm" textColor="white">
            {type2}
          </Typography>
        </CardContent>
      </Card>
      <ResponsiveModal
          open={open}
          setOpen={setOpen}
          link={project.link}
          app={project.app}
        />
    </>
  );
}
