import "./Contact.scss";
import ContactForPhone from "./ContactForPhone";

export default function Contact () {

    return (
        <div id="contact">
            <h1>Contact me</h1>
            <div id="contact-container">
                <ContactForPhone /> 
            </div>
        </div>    
    )
}