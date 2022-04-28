import React from 'react'
import styles from './home.module.scss'

import {Link} from 'react-router-dom'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiTailwindcss, SiSass, SiMysql, SiMongodb, SiGithub, SiWordpress } from "react-icons/si";
import {BsArrowRight} from 'react-icons/bs'

import { useMediaQuery } from 'react-responsive'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from "framer-motion"

const Home = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    //Framer animations
    const personal_container = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.0
          }
        }
    }

    const about_container = {
        hidden: { x: -50, opacity: 0},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration : 0.7
            }
        }
    }

    const techs_container = {
        hidden: {x: 50, opacity: 0},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        }
    }



    return(
        <main>
            <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>About me - Marcos Iorio</title>
                    <meta name="description" content="I am a proactive person who likes to work in teams.." />
                </Helmet>
            </HelmetProvider>
            <div className={styles.home_container} id="about">
                <div className={styles.fWidth_row}>
                    <motion.div className={styles.personal_info} initial="hidden" variants={personal_container} animate="visible">
                        <p>
                            <span>Age: </span>22
                        </p>
                        <p>
                            <span>Location: </span> Buenos Aires, Argentina.
                        </p>
                        <p>
                            <span>E-mail: </span> marcossiorio@gmail.com
                        </p>

                    </motion.div>
                </div>
                <motion.div className={styles.about} initial="hidden" variants={about_container} animate="visible">
                    <h3 className={styles.about_title}>About <span>me</span></h3>
                    <p className={styles.about_info}>I am a proactive person who likes to work in teams.
                        I like frontend and I'm learning the latest technologies such as React, Express, Typescript and Mongo. My favourite language is javascript,
                        I studied and graduated as a systems analyst. Since last year i've been working as a web developer making and mantaining websites in Vtex and Wordpress. <br />
                        I would love to expand my knowledge and learn new technologies. <br/>
                        
                    </p>
                    {!isTabletOrMobile ? <Link to="/contact-me" className={styles.contact}>Let's talk!</Link> : <a href="#contact-me" className={styles.contact}>Let's talk</a>}
                </motion.div>
                <motion.div className={styles.techs} initial="hidden" variants={techs_container} animate="visible">
                    <h3 className={styles.tech_title}><span>Technologies</span></h3>
                        <ul className={styles.tech_list}>
                            <li className={styles.tech_icons}><SiHtml5/><span>HTML5</span></li>
                            <li className={styles.tech_icons}><SiCss3/><span>CSS</span></li>
                            <li className={styles.tech_icons}><SiTailwindcss/><span>Tailwind</span></li>
                            <li className={styles.tech_icons}><SiSass/><span>Sass</span></li>
                            <li className={styles.tech_icons}><SiJavascript/><span>Javascript</span></li>
                            <li className={styles.tech_icons}><SiReact/><span>React</span></li>
                            <li className={styles.tech_icons}><SiNodedotjs/><span>NodeJs</span></li>
                            <li className={styles.tech_icons}><SiMysql/><span>MySQL</span></li>
                            <li className={styles.tech_icons}><SiMongodb/><span>MongoDB</span></li>
                            <li className={styles.tech_icons}><SiGithub/><span>Github</span></li>
                            <li className={styles.tech_icons}><SiWordpress/><span>Wordpress</span></li>
                            <li className={styles.tech_icons}>Vtex</li>
                        </ul>
                        <Link to='/resume'>
                            <div className={styles.circle}>
                                <BsArrowRight className={styles.next_section}/>   
                            </div>
                        </Link> 
                </motion.div>
            </div>
        </main>
    );
}

export default Home;