import React, {useRef, useState} from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";

import party, { confetti } from "party-js";
import emailjs from '@emailjs/browser';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from './contact.module.scss';

const Contact = () =>{

    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();
    const user_name = useRef();
    const user_mail = useRef();
    const message = useRef();
    const resultMessage = useRef();

    const sendButton = useRef();

    const sendMail = (e) =>{
        e.preventDefault();

        const envs = {
            service: import.meta.env.VITE_SERVICE_ID,
            template: import.meta.env.VITE_TEMPLATE_ID,
            public_key: import.meta.env.VITE_PUBLIC_KEY,
        }
        
        emailjs.init(envs.public_key);

        const templateParams = {
            to_name: 'Marcos Iorio',
            from_name: user_name.current.value,
            reply_to: user_mail.current.value,
            message: message.current.value
        }

        if((user_name.current.value === '' || user_name.current.value === undefined) || (user_mail.current.value === '' || user_mail.current.value === undefined) || (message.current.value === '' || message.current.value === undefined)){
            resultMessage.current.textContent = "Please, fill the form";
            setTimeout(() =>{
                resultMessage.current.remove()
            }, 5000)
        }else{
            setIsLoading(true);
            emailjs.send(envs.service, envs.template, templateParams)
            .then((result) => {
                if(result.text === 'OK'){
                    sendButton.current.value = "Thank you"
                    party.confetti(sendButton.current);
                    setTimeout(() => {
                        sendButton.current.value = "Send"
                        setIsLoading(false);
                    }, 5000)
                }
                form.current.reset()
            }, (error) => {
                resultMessage.current.textContent('An error has ocurred please contact me via Mail: marcossiorio@gmail.com')
                console.log(error);
                setTimeout(() =>{
                    resultMessage.current.remove()
                }, 5000)
            });
            
        }
    }

    return(
        <main>
            <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>Contact me - Marcos Iorio</title>
                    <meta name="description" content="Contact me sending a e-mail o throught Linkedin" />
                </Helmet>
            </HelmetProvider>
            <div className={styles.contact_container} id="contact-me">
                <div className={styles.title}>
                    <span>Reach me!</span>
                </div>
                <form action="" className={styles.form_container} onSubmit={sendMail} ref={form}>
                    <label htmlFor="name">Name*</label>
                        <input type="text" name="user_name" placeholder="Your name :)" ref={user_name} required/>
                    <label htmlFor="mail">Mail*</label>
                        <input type="mail" name="user_mail" id="" placeholder="example@123.com" ref={user_mail} required/>
                    <label htmlFor="message">Message*</label>
                        <textarea name="message" cols="30" rows="7" placeholder="Your message..." ref={message} required></textarea>
                    <div ref={resultMessage} style={{color: 'red', fontSize: '20px', fontWeight:'500'}}></div>
                    <input
                        type="submit"
                        ref={sendButton}
                        className={styles.contact}
                        value={!isLoading ? 'Send' : 'Sending...'}>
                    </input>
                    <div id="confettiParticle"></div>
                    <div className={styles.or_linkedin}>
                        <p>Or</p>
                        <a href="https://www.linkedin.com/in/marcos-ignacio-iorio-93a31a191/" target="_blank"><BsLinkedin/></a>
                    </div>
                </form>
            </div>
        </main>
        

    );

}

export default Contact;