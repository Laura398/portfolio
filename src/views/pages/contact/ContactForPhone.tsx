import { AspectRatio, Box, Button, Card, CardContent, Sheet, Typography } from "@mui/joy";

export default function ContactForPhone() {
    const sendMail = () => {
        window.location.href = "mailto:laura.mathieu398@gmail.com";
    }

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/laura-mathieu-95385a18b", "_blank");
    }

    const goToGithub = () => {
        window.open("https://github.com/Laura398", "_blank");
    }

    return (
        <Box
            sx={{
                width: "auto",
            }}
        >
            <Card
                orientation="horizontal"
                sx={{
                    width: '100%',
                    flexWrap: 'wrap',
                    resize: 'horizontal',
                }}
            >
                <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
                    <img
                        src="/assets/avatar2.jpeg"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <CardContent>
                    <Typography fontSize="xl" fontWeight="lg">
                        Laura Mathieu
                    </Typography>
                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                        FullStack Web Developer
                    </Typography>
                    <Sheet
                        sx={{
                        bgcolor: 'background.level1',
                        borderRadius: 'sm',
                        p: 1.5,
                        my: 1.5,
                        display: 'flex',
                        gap: 2,
                        '& > div': { flex: 1 },
                        }}
                    >
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Experience
                            </Typography>
                            <Typography fontWeight="lg">3 years</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Projects
                            </Typography>
                            <Typography fontWeight="lg">5+</Typography>
                        </div>
                    </Sheet>
                    <Sheet
                        sx={{
                        bgcolor: 'background.level1',
                        borderRadius: 'sm',
                        p: 1.5,
                        my: 1.5,
                        gap: 2,
                        }}
                    >
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                I live in
                            </Typography>
                            <Typography fontWeight="lg">Toulouse</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                You can call me at
                            </Typography>
                            <Typography fontWeight="lg">0683794378</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Or send me an email at
                            </Typography>
                            <Typography
                                fontWeight="lg"
                                sx={{ cursor: 'pointer', textDecoration: 'underline'}}
                                onClick={sendMail}
                            >
                                laura.mathieu398@gmail.com
                            </Typography>
                        </div>
                    </Sheet>
                    <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                        <Button variant="outlined" color="neutral" onClick={goToGithub}>
                            Voir sur GitHub
                        </Button>
                        <Button variant="solid" color="primary" onClick={goToLinkedIn}>
                            Voir sur LinkedIn
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}