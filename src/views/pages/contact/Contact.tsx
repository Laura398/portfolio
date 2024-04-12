import emailjs from '@emailjs/browser';
import { AspectRatio, Box, Button, Card, CardContent, Input, Sheet, Snackbar, SnackbarProps, Stack, Textarea, Typography } from "@mui/joy";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

export default function Contact () {
    const { t } = useTranslation();
    const form = useRef();
    const [user_firstname, setUser_firstname] = useState('');
    const [user_lastname, setUser_lastname] = useState('');
    const [user_email, setUser_email] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState<SnackbarProps['color']>('neutral');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const changeFirstname = (e: any) => {
        setUser_firstname(e.target.value);
    }

    const changeLastname = (e: any) => {
        setUser_lastname(e.target.value);
    }

    const changeObject = (e: any) => {
        setObject(e.target.value);
    }

    const changeEmail = (e: any) => {
        setUser_email(e.target.value);
    }

    const changeMessage = (e: any) => {
        setMessage(e.target.value);
    }

    const sendEmailFromContact = async (e: any) => {
        e.preventDefault();
    
        try {
            console.log(form);
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const templateParams = {
                user_firstname: user_firstname,
                user_lastname: user_lastname,
                user_email: user_email,
                object: object,
                message: message,
            };

            console.log(serviceId, templateId, publicKey);
            
            console.log(templateParams);
            
            
            await emailjs.send('service_5ztaqm8', 'template_vjnbbme', templateParams, {
                publicKey: 'K25ttedof_dROy5SB',
            })
            
            setColor('success');
            const mailSent = t('mailSent');
            setSnackbarMessage(mailSent);
            setOpen(true);
            setUser_firstname('');
            setUser_lastname('');
            setUser_email('');
            setObject('');
            setMessage('');
        } catch (error) {
            setColor('danger');
            const mailNotSent = t('mailError');
            setSnackbarMessage(mailNotSent);
            setOpen(true);
            console.log('FAILED...', error);
        }
    };

    const sendMail = () => {
        window.location.href = "mailto:laura.mathieu@protonmail.com";
    }

    const goToLinkedIn = () => {
        const languageCode = localStorage.getItem("lang");
        if (languageCode === "fr") {
            window.open("https://www.linkedin.com/in/laura-mathieu-lm", "_blank");
        } else {
            window.open("https://www.linkedin.com/in/laura-mathieu-lm/?locale=en_US", "_blank");
        }
    }

    const goToGithub = () => {
        window.open("https://github.com/Laura398", "_blank");
    }

    return (
        <div id="contact">
            <h1>
                {t('contactMe')}
            </h1>
            <Stack direction={{sm: "column", md: "row"}} justifyContent="center" alignItems="center">
                <div className="contact-container">
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Card
                            orientation="horizontal"
                            sx={{
                                width: '90%',
                                flexWrap: 'wrap',
                                resize: 'horizontal',
                                backgroundColor: "rgba(91, 128, 174, 0.471)",
                            }}
                        >
                            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
                                <img
                                    src="/assets/photo.png"
                                    loading="lazy"
                                    alt="avatar montrant un pingoun, d'un style de dessin réaliste mais mignon, dans une salle informatique"
                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography fontSize="xl" fontWeight="lg" textColor="#61dafb">
                                    Laura Mathieu
                                </Typography>
                                <Typography level="body-sm" fontWeight="lg" textColor="white">
                                    {t('title')}
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
                                        <Typography fontWeight="lg" textColor="white">3 {t('years')}</Typography>
                                    </div>
                                    <div>
                                        <Typography level="body-xs" fontWeight="lg" textColor="#61dafb">
                                            {t('projects')}
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
                                            {t('ILiveIn')}
                                        </Typography>
                                        <Typography fontWeight="lg" textColor="white">{t('Toulouse')}</Typography>
                                    </div>
                                    {/* <div>
                                        <Typography level="body-xs" fontWeight="lg" textColor="#61dafb">
                                            {t('callMeAt')}
                                        </Typography>
                                        <Typography fontWeight="lg" textColor="white">{t('phone')}</Typography>
                                    </div> */}
                                    <div>
                                        <Typography level="body-xs" fontWeight="lg" textColor="#61dafb">
                                            {t('sendMeAnEmail')}
                                        </Typography>
                                        <Typography
                                            fontWeight="lg"
                                            sx={{ cursor: 'pointer', textDecoration: 'underline', color: "white"}}
                                            onClick={sendMail}
                                        >
                                            laura.mathieu@protonmail.com
                                        </Typography>
                                    </div>
                                </Sheet>
                                <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                                    <Button variant="outlined" color="neutral" onClick={goToGithub} sx={{color: "white", "&:hover": {
                                                color: "black",
                                            }}}>
                                        {t('seeGitHub')}
                                    </Button>
                                    <Button variant="solid" color="primary" onClick={goToLinkedIn} sx={{backgroundColor: "#61dafb", color: "black", "&:hover": {
                                                backgroundColor: "white",
                                            }}}>
                                        {t('seeLinkedIn')}
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
                <div className="contact-container">
                    <Box
                        sx={{
                            width: {sm: "100%", md: "100%"},
                        }}
                    >
                        <Card
                            orientation="vertical"
                            sx={{
                                width: '90%',
                                flexWrap: 'wrap',
                                resize: 'vertical',
                                backgroundColor: "rgba(91, 128, 174, 0.471)",
                            }}
                        >
                            <Typography fontSize="xl" fontWeight="lg" textColor="#61dafb" sx={{marginTop: "20px"}}>
                                {t('contactForm')}
                            </Typography>
                            <CardContent sx={{marginY: "20px"}}>
                                <form
                                    onSubmit={sendEmailFromContact}
                                >
                                    <Stack spacing={2}>
                                        <Stack spacing={2} direction={{ sm: "column", md: "row" }} justifyContent="space-between">
                                            <Input fullWidth placeholder={t('firstname')} required onChange={changeFirstname} value={user_firstname} />
                                            <Input fullWidth placeholder={t('lastname')} required onChange={changeLastname} value={user_lastname} sx={{ marginTop: "15px"}} />
                                        </Stack>
                                        <Input placeholder={t('email')} required onChange={changeEmail} type="email" value={user_email} />
                                        <Input placeholder={t('object')} required onChange={changeObject} value={object} />
                                        <Textarea minRows={4} placeholder={t('message')} required onChange={changeMessage} value={message} />
                                        <Button type="submit" variant="solid" color="primary" sx={{
                                            backgroundColor: "#61dafb",
                                            color: "black",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            }
                                            }}>{t('submit')}</Button>
                                    </Stack>
                                </form>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
            </Stack>
            <Snackbar
                autoHideDuration={4000}
                sx={{
                    position: "fixed",
                    bottom: 32,
                    right: 32,
                    zIndex: 5000,
                }}
                open={open}
                variant="soft"
                color={color}
                onClose={(_event, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setOpen(false);
                }}
            >
                {snackbarMessage}
            </Snackbar>
        </div>    
    )
}