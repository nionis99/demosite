import React from 'react';

function Contact(props) {

    const { contactRef } = props;

    return (
        <div className="contact" ref={contactRef}>
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
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                    <label htmlFor="subject">Message</label>
                    <textarea id="message" name="message" wrap={"off"} rows={4}/>
                    <input type="submit" onClick={() => alert("Not available")} value="Send"/>
                </div>
            </div>
        </div>
    );
}

export default Contact;
