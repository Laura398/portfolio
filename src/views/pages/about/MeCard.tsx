import { Avatar, Card, CardContent, Chip, Typography } from "@mui/joy";

export default function MeCard() {
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
                <Typography level="h2" textColor='#61dafb'>About Me</Typography>
                <Typography level="body-lg" sx={{ maxWidth: '95%' }} textColor='white'>
                    I'm Laura Mathieu, a web developer based in France. 
                    I'm currently a student at the school Ynov Informatique in Toulouse, 
                    studying web development. I'm passionate about using technology to solve 
                    problems and improve the world around us. I'm currently seeking opportunities
                        to work on projects that make a positive impact on the world.
                </Typography>
            </CardContent>
        </Card>
    );
}