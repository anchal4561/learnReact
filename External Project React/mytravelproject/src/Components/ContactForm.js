import "./ContactFormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(){
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8shdjdg'
    , 'template_zrb54s2', form.current, 
    'FNdalw61AeBboDfyw')
      e.target.reset()
  };
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input name="name" placeholder="Name"/>
                <input name="email" placeholder="Email"/>
                <input name="subject" placeholder="Subject"/>
                <textarea  name="message" placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )

}
export default ContactForm;