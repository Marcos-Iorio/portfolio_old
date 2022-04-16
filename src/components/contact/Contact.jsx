import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from './contact.module.scss';


const Contact = () =>{
    return(
        <div className={styles.contact_container}>
            <div className={styles.title}>
                <span>Reach me!</span>
            </div>
            <form action="" className={styles.form_container}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Your name :)"/>
                <label htmlFor="mail">Mail</label>
                <input type="mail" name="mail" id="" placeholder="example@123.com"/>
                <label htmlFor="message">Message</label>
                <textarea name="message" cols="30" rows="7" placeholder="Your message..."></textarea>
                <button className={styles.contact}>Send</button>
                <div className={styles.or_linkedin}>
                    <p>Or</p>
                    <a href="https://www.linkedin.com/in/marcos-ignacio-iorio-93a31a191/" target="_blank"><BsLinkedin/></a>
                </div>
            </form>
            
        </div>

    );

}

export default Contact;