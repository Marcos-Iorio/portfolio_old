import React from 'react'
import styles from './resume.module.scss'
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'

import { Helmet, HelmetProvider } from 'react-helmet-async';

import webCertificate from '/coderhouse.jpeg'

const Resume = () => {

    return(
        <main>
            <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>Resume - Marcos Iorio</title>
                    <meta name="description" content="My education, and my experience working in IT" />
                </Helmet>
            </HelmetProvider>
            <div className={styles.education_container} id="resume">
            <div className={styles.title}>
                <Link to='/portfolio'>
                    <span className={styles.next_section}>Portfolio<BsArrowRight/></span>
                </Link>
                <span>Education</span>
            </div> 
            <ul className={styles.education_list}>
                <li className={styles.item}>
                    <p>2004-2017</p><br/>
                    <span>High school degree in Social Science.</span>
                    <p>Colegio Parroquial PIO XII.<br />
                        A bilingual school.
                    </p>
                </li>
                <li className={styles.item}>
                    <p>2019-2021</p><br/>
                    <span>System Analyst.</span>
                    <p>
                        Instituto Tecnólogico Beltrán. <br/>
                        I've learned the fundamentals of programming in languages like C and OOP in JAVA,
                        I've also learned CRUD and API with Slim in PHP, MySQL and Angular.
                    </p>
                </li>
                <li className={styles.item}>
                    <p>2021</p><br/>
                    <span>Web Development in CorderHouse.</span>
                    <p>I learned HTML, CSS, SASS, GITHUB.</p>
                    <a href={webCertificate} target="_blank">Certificate</a>
                </li>
                <li className={styles.item}>
                    <p>2021</p><br/>
                    <span>Modern Javascript in Udemy.</span>
                    <p>I've learned the basics of Javascript and the latest standards too, like Destructuring, Array Method, Arrow Function, Prototypes, Polyfiling.</p>
                </li>
            </ul>
            <div className={styles.title}>
                <span>Experience</span>
            </div>
            <ul className={styles.experience_list}>
                <li className={styles.item}>
                    <p>2021-PRESENT</p><br/>
                    <span>Web developer in Lund Marketing.</span>
                    <p>I create and mantain websites in Wordpress and Vtex, I improved a lot my CSS skills and I've learn about analytics and SEO.</p>
                    <a href="https://lundmarketing.io/" target="_blank">Website</a>
                </li>
            </ul>
        </div>
        </main>
        
    );

}

export default Resume;