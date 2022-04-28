import React from 'react'
import styles from './resume.module.scss'
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

import webCertificate from '/coderhouse.jpeg'

const Resume = () => {

    const list = {
        hidden: { opacity: 1, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
            delayChildren: 0.1,
            staggerChildren: 0.4
            }
        }
    }
    
    const item = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    }

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
            <motion.ul className={styles.education_list} variants={list} initial="hidden" animate="visible">
                <motion.li className={styles.item} variants={item}>
                    <p>2004-2017</p><br/>
                    <span>High school degree in Social Science.</span>
                    <p>Colegio Parroquial PIO XII.<br />
                        A bilingual school.
                    </p>
                </motion.li>
                <motion.li className={styles.item} variants={item}>
                    <p>2019-2021</p><br/>
                    <span>System Analyst.</span>
                    <p>
                        Instituto Tecnólogico Beltrán. <br/>
                        I've learned the fundamentals of programming in languages like C and OOP in JAVA,
                        I've also learned CRUD and API with Slim in PHP, MySQL and Angular.
                    </p>
                </motion.li>
                <motion.li className={styles.item} variants={item}>
                    <p>2021</p><br/>
                    <span>Web Development in CoderHouse.</span>
                    <p>I learned HTML, CSS, SASS, GITHUB.</p>
                    <a href={webCertificate} target="_blank">Certificate</a>
                </motion.li>
                <motion.li className={styles.item} variants={item}>
                    <p>2021</p><br/>
                    <span>Modern Javascript in Udemy.</span>
                    <p>I've learned the basics of Javascript and the latest standards too, like Destructuring, Array Method, Arrow Function, Prototypes, Polyfiling.</p>
                </motion.li>
            </motion.ul>
            <div className={styles.title}>
                <span>Experience</span>
            </div>
            <motion.ul className={styles.experience_list} variants={list} initial="hidden" animate="visible">
                <motion.li className={styles.item} variants={item}>
                    <p>2021-PRESENT</p><br/>
                    <span>Web developer in Lund Marketing.</span>
                    <p>I create and mantain websites in Wordpress and Vtex, I improved a lot my CSS skills and I've learn about analytics and SEO.</p>
                    <a href="https://lundmarketing.io/" target="_blank">Website</a>
                </motion.li>
            </motion.ul>
        </div>
        </main>
        
    );

}

export default Resume;