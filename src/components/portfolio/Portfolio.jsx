import React from 'react'

import { SiReact, SiTailwindcss, SiSocketdotio, SiMongodb, SiTypescript, SiNodedotjs, SiWordpress} from 'react-icons/si'
import styles from './portfolio.module.scss'

import { Helmet, HelmetProvider } from 'react-helmet-async';

import realTime from '/realtime.png'
import pokemon from '/pokemon.png'
import api from '/api.png'
import ecommerce from '/ecommerce.png'
import sdg from '/sdg.png'
import { motion } from 'framer-motion';

const Portfolio = () => {
    const list = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.1,
            staggerChildren: 0.4
            }
        }
    }
    
    const item = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1
        }
    }

    return(
        <main>
            <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>My projects - Marcos Iorio</title>
                    <meta name="description" content="List of all the projects I've done so far" />
                </Helmet>
            </HelmetProvider>
            <div className={styles.portfolio_container} id="portfolio">
            <h3 className={styles.title}>My projects</h3>
            <motion.ul className={styles.projects_list} variants={list} initial="hidden" animate="visible">
                <motion.li className={styles.project} variants={item}>
                    <div className={styles.project_img}>
                        <div className={styles.project_techs}>
                            <SiReact className={styles.project_icon}/>
                            <SiTailwindcss className={styles.project_icon}/>
                            <SiNodedotjs className={styles.project_icon}/>
                            <SiSocketdotio className={styles.project_icon}/>
                            <SiMongodb className={styles.project_icon}/>
                        </div>
                        <img src={realTime} alt="Real time chat photo" loading='lazy'/>
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>Real time chat app</h1>
                            <p>A real time chat app using React and Tailwind in the front-end and Express and Socket.io in the back, to save all the messages I used MongoDB.</p>
                            <div className={styles.links}>
                                <a href="https://realtime-chat-marcos-iorio.vercel.app/" target="_blank">Demo</a>
                                <a href="https://github.com/Marcos-Iorio/realtime-chat" target="_blank">Repo</a>
                            </div>
                        </div>
                    </div>
                </motion.li>
                <motion.li className={styles.project} variants={item}>
                    <div className={styles.project_img}>
                        <div className={styles.project_techs}>
                            <SiReact className={styles.project_icon}/>
                            <SiTypescript className={styles.project_icon}/>
                        </div> 
                        <img src={pokemon} alt="Pokemon guess challenge photo" loading='lazy'/>   
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>Pokemon Guess</h1>
                            <p>Pokemon guess challenge using React, Typescript and NES.CSS</p>
                            <div className={styles.links}>
                                <a href="https://pokemon-guess-challenge.vercel.app/" target="_blank">Demo</a>
                                <a href="https://github.com/Marcos-Iorio/Pokemon-guess-challenge" target="_blank">Repo</a>
                            </div>
                        </div>
                    </div>
                </motion.li>
                <motion.li className={styles.project} variants={item}>
                    <div className={styles.project_img}>
                        <div className={styles.project_techs}>
                            <SiReact className={styles.project_icon}/>
                            <SiTailwindcss className={styles.project_icon}/>
                        </div> 
                        <img src={ecommerce} alt="Front-end of a ecommerce" loading='lazy'/>  
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>Front-end of Ecommerce</h1>
                            <p>First project using react, I created the front-end of an ecommerce where you search for a product, I used a Intermediate API to retrieve the products data.</p>
                            <div className={styles.links}>
                                {/* <a href="https://pokemon-guess-challenge.vercel.app/">Demo</a> */}
                                <a href="https://github.com/Marcos-Iorio/Ecommerce" target="_blank">Repo</a>
                            </div>
                        </div>
                    </div>
                </motion.li>
                <motion.li className={styles.project} variants={item}>
                    <div className={styles.project_img}>
                        <div className={styles.project_techs}>
                            <SiNodedotjs className={styles.project_icon}/>
                            <SiTypescript className={styles.project_icon}/>
                        </div>
                        <img src={api} alt="Illustration of a API" loading='lazy'/>   
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>Intermediate API</h1>
                            <p>Intermediate API that retrieves data from another API using Express and Typescript</p>
                            <div className={styles.links}>
                                {/* <a href="https://pokemon-guess-challenge.vercel.app/">Demo</a> */}
                                <a href="https://github.com/Marcos-Iorio/api-intermedia" target="_blank">Repo</a>
                            </div>
                        </div>
                    </div>
                </motion.li>
                <motion.li className={styles.project} variants={item}>
                    <div className={styles.project_img}>
                        <div className={styles.project_techs}>
                            <SiWordpress className={styles.project_icon}/>
                        </div>
                        <img src={sdg} alt="Photo of SGD homepage" loading='lazy'/>   
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>SDG</h1>
                            <p>Webpage made with Wordpress for a client of Ireland</p>
                            <div className={styles.links}>
                                {/* <a href="https://pokemon-guess-challenge.vercel.app/">Demo</a> */}
                                <a href="https://sdg-hub.co/" target="_blank">Web page</a>
                            </div>
                        </div>
                    </div>
                </motion.li>
            </motion.ul>
        </div>
        </main>
        
    );
}

export default Portfolio