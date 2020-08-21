import React, {useState} from 'react';
import axios from "axios";

function ContactForm() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://test.test/send", {name, email, message})
            .then(response => console.log(response)).catch(e => alert(e.message));
        resetForm();
    }

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="contact">
            <div className="contact-header">
                Contact
            </div>
            <div className="contact-divider"/>
            <div className="contact-content">
                <div className="contact-text">
                    <p>Cras feugiat tortor vitae ultrices euismod. Aliquam mollis urna, Cras feugiat tortor vitae
                        ultrices euismod. Aliquam mollis urna Cras feugiat tortor vitae ultrices euismod.</p>
                    <p>Cras feugiat tortor vitae ultrices euismod. Aliquam mollis urna, Cras feugiat tortor vitae
                        ultrices euismod. Aliquam mollis urna Cras feugiat tortor vitae ultrices euismod. </p>
                    <p>Cras feugiat tortor vitae ultrices euismod. Aliquam mollis urna, Cras feugiat tortor vitae
                        ultrices euismod. Aliquam mollis urna Cras feugiat tortor vitae ultrices euismod. </p>
                </div>
                <div className="contact-form">
                    <form onSubmit={e => handleSubmit(e)}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={name}
                               onChange={e => setName(e.target.value)}/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="subject">Message</label>
                        <textarea id="message" name="message" wrap={"off"} rows={4} value={message}
                                  onChange={e => setMessage(e.target.value)}/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
