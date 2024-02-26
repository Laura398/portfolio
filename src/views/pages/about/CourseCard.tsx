import { Avatar, Card, CardContent, Divider, Typography } from "@mui/joy";

export default function CourseCard() {
    return (
        <Card className="about-card">
            <Avatar src="/assets/infos.png" sx={{ '--Avatar-size': '8rem', border: "1px solid white" }} />
            <Typography level="h2" textColor='#61dafb'>Course</Typography>
            <CardContent className="about-card-main-content">
                <CardContent>
                    <Divider className="about-divider">
                        <Typography className="about-typo" level="body-lg"  textColor='black'>
                            💼 Experience
                        </Typography>
                    </Divider>
                    <Typography className="about-typo" level="body-lg"  textColor='white'>
                        <b>3 years apprenticeship</b> in Web Development in Upschool and Ynov Informatique
                    </Typography>
                </CardContent>
                <CardContent>
                    <Divider className="about-divider">
                        <Typography className="about-typo" level="body-lg"  textColor='black'>
                            📚 Certifications
                        </Typography>
                    </Divider>
                    <Typography className="about-typo" level="body-lg" textColor='white'>
                        <b>Masters in Web Development</b> - Ynov Informatiques
                    </Typography>
                    <Typography className="about-typo" level="body-lg"  textColor='white'>
                        <b>RNCP Title Web Developer Level 5</b> - Openclassrooms   
                    </Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}