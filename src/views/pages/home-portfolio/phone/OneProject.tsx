import { AspectRatio, Card, CardContent, CardOverflow, Typography } from "@mui/joy";
import { Project } from "../../../../interfaces/types";
import { useTranslation } from "react-i18next";

export default function OneProject(props: {project: Project}) {
    const { t } = useTranslation();
    const {project} = props;
    
    const type = t(project.type);
    
    const goTo = () => {
        window.open(project.link, "_blank");
    }
    
    return (
        <Card variant="outlined" sx={{ width: 320, margin: "auto", backgroundColor: "rgba(91, 128, 174, 0.471)" }} onClick={goTo}>
            <CardOverflow sx={{borderBottom: "1px solid white"}}>
                <AspectRatio ratio="2">
                <img
                    src={project.image}
                    loading="lazy"
                    alt=""
                />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="title-md" textColor="#61dafb">{project.name}</Typography>
                <Typography level="body-sm" textColor="white">{type}</Typography>
            </CardContent>
        </Card>
    )
}