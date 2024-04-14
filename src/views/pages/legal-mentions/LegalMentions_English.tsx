import { Box, Typography } from "@mui/joy";

export default function LegalMentions_English() {
    return (
        <Box width={{sm: "95%", md: "50%"}} margin="auto" textAlign="justify">
            <Typography textColor="white">
                In accordance with the provisions of law n° 2004-575 of June 21, 2004 for confidence in the digital economy, users of the Laura Mathieu - Portfolio website are informed of the identity of the various parties involved in its creation and monitoring.
            </Typography>
            <Typography mt={4} textColor="white" level="h3">
                Site edition:
            </Typography> 
            <Typography textColor="white">
                This site, accessible at the URL https://www.portfolio.lauramathieu.com/, is edited by Laura Mathieu, residing at avenue Etienne Billieres 31300 Toulouse, of French (France) nationality, born on 02/05/1995.
            </Typography>
            <Typography mt={4} textColor="white" level="h3">
                <strong>Hosting</strong>:
            </Typography>
            <Typography textColor="white">
                The Site is hosted by the company OVH SAS, located 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1, (telephone contact or email: 1007).
            </Typography>
            <Typography mt={4} textColor="white" level="h3">
                <strong>Publishing manager</strong>:
            </Typography>
            <Typography textColor="white">
                Laura Mathieu
            </Typography>
            <Typography mt={4} textColor="white" level="h3">
                <strong>Contact us</strong>:
            </Typography>
            <Typography textColor="white">
                By phone: +33683794378<br />
                By email: laura.mathieu@protonmail.com
            </Typography>
            <Typography mt={4} textColor="white" level="h3">
                <strong>Personal data</strong>:
            </Typography>
            <Typography textColor="white">
                Personal data refers to any information concerning an identified or identifiable natural person (data subject). An identifiable person is a person who can be identified, directly or indirectly, in particular by reference to a name, an identification number or one or more specific elements specific to his physical, physiological, genetic, psychological, economic, cultural or social identity.
            </Typography>
            <Typography textColor="white">
                Personal information may be collected when browsing the site, in particular via the contact form. The information collected is in no way transmitted to third parties and is used only in the context of the commercial relationship between the user and Laura Mathieu.
            </Typography>
            <Typography mt={4} textColor="white" level="h3">
                The personal data collected is as follows:
            </Typography>
            <Typography textColor="white">
                First and last name<br />
                Email address
            </Typography>
            <Typography mt={4} textColor="white" level="h3">
                <strong>Applicable law</strong>:
            </Typography>
            <Typography textColor="white">
                This site is subject to French law.
            </Typography>
        </Box>
    )
}