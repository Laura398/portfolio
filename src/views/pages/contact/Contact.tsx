import { AspectRatio, Box, Button, Card, CardContent, Sheet, Typography } from "@mui/joy";
import "./Contact.scss";

export default function Contact () {
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
        <div id="contact">
            <h1>Contact me</h1>
            <div id="contact-container">
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
                            backgroundColor: "rgba(91, 128, 174, 0.471)",
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
                            <Typography fontSize="xl" fontWeight="lg" textColor="#61dafb">
                                Laura Mathieu
                            </Typography>
                            <Typography level="body-sm" fontWeight="lg" textColor="white">
                                FullStack Web Developer
                            </Typography>
                            <Sheet
                                sx={{
                                bgcolor: "rgba(91, 128, 174, 0.471)",
                                border: '1px solid white',
                                borderRadius: 'sm',
                                p: 1.5,
                                my: 1.5,
                                display: 'flex',
                                gap: 2,
                                '& > div': { flex: 1 },
                                }}
                            >
                                <div>
                                    <Typography level="body-xs" fontWeight="lg" textColor="#61dafb">
                                        Experience
                                    </Typography>
                                    <Typography fontWeight="lg" textColor="white">3 years</Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" fontWeight="lg" textColor="#61dafb">
                                        Projects
                                    </Typography>
                                    <Typography fontWeight="lg" textColor="white">5+</Typography>
                                </div>
                            </Sheet>
                            <Sheet
                                sx={{
                                bgcolor: "rgba(91, 128, 174, 0.471)",
                                border: '1px solid white',
                                borderRadius: 'sm',
                                p: 1.5,
                                my: 1.5,
                                gap: 2,
                                }}
                            >
                                <div>
                                    <Typography level="body-xs" fontWeight="lg" textColor="#61dafb">
                                        I live in
                                    </Typography>
                                    <Typography fontWeight="lg" textColor="white">Toulouse</Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" fontWeight="lg" textColor="#61dafb">
                                        You can call me at
                                    </Typography>
                                    <Typography fontWeight="lg" textColor="white">0683794378</Typography>
                                </div>
                                <div>
                                    <Typography level="body-xs" fontWeight="lg" textColor="#61dafb">
                                        Or send me an email at
                                    </Typography>
                                    <Typography
                                        fontWeight="lg"
                                        sx={{ cursor: 'pointer', textDecoration: 'underline', color: "white"}}
                                        onClick={sendMail}
                                    >
                                        laura.mathieu398@gmail.com
                                    </Typography>
                                </div>
                            </Sheet>
                            <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                                <Button variant="outlined" color="neutral" onClick={goToGithub} sx={{color: "white"}}>
                                    See my GitHub
                                </Button>
                                <Button variant="solid" color="primary" onClick={goToLinkedIn} sx={{backgroundColor: "#61dafb", color: "black"}}>
                                    See my LinkedIn
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </div>
        </div>    
    )
}