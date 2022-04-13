import React from 'react'

import { SiReact, SiTailwindcss, SiSocketdotio, SiMongodb, SiTypescript, SiNodedotjs} from 'react-icons/si'
import styles from './portfolio.module.scss'

const Portfolio = () => {
    return(
        <div className={styles.portfolio_container}>
            <h3 className={styles.title}>My projects</h3>
            <ul className={styles.projects_list}>
                <li className={styles.project}>
                    <div className={styles.project_img}>
                        <img src="../../../assets/realtime.PNG" alt="Real time chat photo" />
                        <div className={styles.project_techs}>
                            <SiReact className={styles.project_icon}/>
                            <SiTailwindcss className={styles.project_icon}/>
                            <SiNodedotjs className={styles.project_icon}/>
                            <SiSocketdotio className={styles.project_icon}/>
                            <SiMongodb className={styles.project_icon}/>
                        </div>
                        
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>Real time chat app</h1>
                            <p>A real time chat app using React and tailwind in the front-end and Express and Socket.io in the back, to save all the messages I used MongoDB.</p>
                            <div className={styles.links}>
                                <a href="https://realtime-chat-marcos-iorio.vercel.app/">Demo</a>
                                <a href="https://github.com/Marcos-Iorio/realtime-chat">Repo</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.project}>
                    <div className={styles.project_img}>
                        <img src="../../../assets/pokemon.png" alt="Pokemon guess challenge photo" />
                        <div className={styles.project_techs}>
                            <SiReact className={styles.project_icon}/>
                            <SiTypescript className={styles.project_icon}/>
                        </div>   
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>Pokemon Guess</h1>
                            <p>Pokemon guess challenge using React, Typescript and NES.CSS</p>
                            <div className={styles.links}>
                                <a href="https://pokemon-guess-challenge.vercel.app/">Demo</a>
                                <a href="https://github.com/Marcos-Iorio/Pokemon-guess-challenge">Repo</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.project}>
                    <div className={styles.project_img}>
                        <img src="../../../assets/ecommerce.png" alt="Front-end of a ecommerce" />
                        <div className={styles.project_techs}>
                            <SiReact className={styles.project_icon}/>
                            <SiTailwindcss className={styles.project_icon}/>
                        </div>   
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>Front-end of Ecommerce</h1>
                            <p>First project using react, I created the front-end of a ecommerce where you search for a product, I used the Mercado libre's API to retrieve the products data.</p>
                            <div className={styles.links}>
                                {/* <a href="https://pokemon-guess-challenge.vercel.app/">Demo</a> */}
                                <a href="https://github.com/Marcos-Iorio/Ecommerce">Repo</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.project}>
                    <div className={styles.project_img}>
                        <img src="../../../assets/api.png" alt="Illustration of a API" />
                        <div className={styles.project_techs}>
                            <SiNodedotjs className={styles.project_icon}/>
                            <SiTypescript className={styles.project_icon}/>
                        </div>   
                    </div>
                    <div className={styles.project_info_container}>
                        <div className={styles.project_info}>
                            <h1>Intermediate API</h1>
                            <p>Intermediate API that retrieves data from another API using Express and Typescript</p>
                            <div className={styles.links}>
                                {/* <a href="https://pokemon-guess-challenge.vercel.app/">Demo</a> */}
                                <a href="https://github.com/Marcos-Iorio/api-intermedia">Repo</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio