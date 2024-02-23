import { AspectRatio, Card, CardContent, CardOverflow, Typography } from "@mui/joy";
import { Project } from "../../../interfaces/types";

export default function OneProject(props: {project: Project}) {
    const {project} = props;
    
    const goTo = () => {
        window.open(project.link, "_blank");
    }
    
    return (
        <Card variant="outlined" sx={{ width: 320, margin: "auto" }} onClick={goTo}>
            <CardOverflow>
                <AspectRatio ratio="2">
                <img
                    src={project.image}
                    loading="lazy"
                    alt=""
                />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="title-md">{project.name}</Typography>
                <Typography level="body-sm">{project.type}</Typography>
                <Typography level="body-sm">{project.dates}</Typography>
            </CardContent>
        </Card>
    )
}