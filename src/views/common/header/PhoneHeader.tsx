import { Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Header.scss";
import "./PhoneHeader.scss";
import { Link } from "react-router-dom";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PhoneHeader() {
    const [expand, setExpand] = React.useState(false);
    const toggleAcordion = () => {
        setExpand((prev) => !prev);
    };

    const closeAccordion = () => {
        setExpand(false);
    };

    return (
      <Accordion id="accordion" expanded={expand}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize='large' sx={{ color: 'white', marginTop: '10px' }} onClick={toggleAcordion} />}
          id="icon"
        >
            <Link to="/" onClick={closeAccordion} className="logo">
                <img src="assets/logo3.png" alt="logo" className="logo" />
            </Link>
        </AccordionSummary>
        <AccordionDetails id="accordion-details">
            <Button><a href="#" className='button' onClick={toggleAcordion}>Home</a></Button>
            <Button><a href="#about" className='button' onClick={toggleAcordion}>About</a></Button>
            <Button><a href="#stack" className='button' onClick={toggleAcordion}>Stack</a></Button>
            <Button><a href="#home-portfolio" className='button' onClick={toggleAcordion}>Portfolio</a></Button>
            <Button><a href="#contact" className='button' onClick={toggleAcordion}>Contact</a></Button>
            <Button id="header-fb">
              <a target="_blank" href="https://www.linkedin.com/in/laura-mathieu-95385a18b"><LinkedInIcon className="linkedin-icon" fontSize='large' sx={{ color: "#61dafb" }} /></a>
            </Button>
        </AccordionDetails>
      </Accordion>
    )
}