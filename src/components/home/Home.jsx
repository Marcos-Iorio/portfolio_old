import React from 'react'
import styles from './home.module.scss'

import {Link} from 'react-router-dom'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiTailwindcss, SiSass, SiMysql, SiMongodb, SiGithub, SiWordpress } from "react-icons/si";
import {BsArrowRight} from 'react-icons/bs'

import { useMediaQuery } from 'react-responsive'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
                    <div className={styles.personal_info}>
                        <p>
                            <span>Age: </span>22
                        </p>
                        <p>
                            <span>Location: </span> Buenos Aires, Argentina.
                        </p>
                        <p>
                            <span>E-mail: </span> marcossiorio@gmail.com
                        </p>

                    </div>
                </div>
                <div className={styles.about}>
                    <h3 className={styles.about_title}>About <span>me</span></h3>
                    <p className={styles.about_info}>I am a proactive person who likes to work in teams,
                        I like the frontend and I am learning the latest technologies such as React, Express, Typescript and Mongo, my favourite language is javascript,
                        I studied and graduated as a systems analyst. Since last year i've been working as a web developer making and mantaining websites in Vtex and Wordpress. <br />
                        I would love to expand my knowledge and learn new technologies. <br/>
                        
                    </p>
                    {!isTabletOrMobile ? <Link to="/contact-me" className={styles.contact}>Let's talk!</Link> : <a href="#contact-me" className={styles.contact}>Let's talk</a>}
                </div>
                <div className={styles.techs}>
                    <h3 className={styles.tech_title}><span>Technologies</span></h3>
                        <ul className={styles.tech_list}>
                            <li className={styles.tech_icons}><SiHtml5/></li>
                            <li className={styles.tech_icons}><SiCss3/></li>
                            <li className={styles.tech_icons}><SiTailwindcss/></li>
                            <li className={styles.tech_icons}><SiSass/></li>
                            <li className={styles.tech_icons}><SiJavascript/></li>
                            <li className={styles.tech_icons}><SiReact/></li>
                            <li className={styles.tech_icons}><SiNodedotjs/></li>
                            <li className={styles.tech_icons}><SiMysql/></li>
                            <li className={styles.tech_icons}><SiMongodb/></li>
                            <li className={styles.tech_icons}><SiGithub/></li>
                            <li className={styles.tech_icons}><SiWordpress/></li>
                            <li className={styles.tech_icons}>Vtex</li>
                        </ul>
                        <Link to='/resume'>
                            <div className={styles.circle}>
                                <BsArrowRight className={styles.next_section}/>   
                            </div>
                        </Link> 
                </div>
            </div>
        </main>
    );
}

export default Home;