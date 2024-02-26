import { Avatar, Card, CardContent, Chip, Divider, Typography } from "@mui/joy";

export default function CourseCard() {
    return (
        <Card className="about-card">
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar src="/assets/infos.png" sx={{ '--Avatar-size': '8rem', border: "1px solid white", marginTop: "10px" }} />
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
                        EXP
                    </Chip>
                <Typography level="h2" textColor='#61dafb' sx={{padding: 0, margin: 0}}>Course</Typography>
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
            </CardContent>
        </Card>
    )
}