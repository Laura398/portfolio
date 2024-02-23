import { useEffect, useState } from "react";
import "./Contact.scss";
import { getCurrentDimension } from "../../../helpers/get-current-dimension";
import ContactForPhone from "./ContactForPhone";
import ContactForDesktop from "./ContactForDesktop";

export default function Contact () {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [isPhone, setIsPhone] = useState(screenSize.width < 768);

    useEffect(() => {
        const updateDimension = () => {
            const { width } = getCurrentDimension();
            setScreenSize(getCurrentDimension())
            setIsPhone(width < 768)
        }
        window.addEventListener('resize', updateDimension);

        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <div id="contact">
            <h1>Contact me</h1>
            <div id="contact-container">
                {isPhone ? <ContactForPhone /> : <ContactForDesktop />}
            </div>
        </div>    
    )
}