import React, {useState} from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import Home from '../home/Home'
import Contact from '../contact/Contact'
import Portfolio from '../portfolio/Portfolio'
import Navbar from '../navbar/Navbar'
import styles from './container.module.scss'
import Resume from '../resume/Resume'


import cvEs from './CV-Marcos-Iorio.pdf'
import cvEn from './CV_Marcos-Iorio-en.pdf'


import { useMediaQuery } from 'react-responsive'

const Container = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [modal, setModal] = useState(false);

    const downloadCV = (e) =>{
        e.preventDefault();
        if(!modal){
            setModal(true);
        }else{
            setModal(false);
        }
    }
    if(!isTabletOrMobile){
        return(
            <BrowserRouter>
                <Navbar/>
                <div className={styles.container}>
                    <div className={styles.cols}>
                        <div className={styles.col}>
                            <div className={styles.titulo}>
                                <div>Marcos Iorio</div>
                                <p>Software developer</p>
                            </div>
                            <div className={styles.madeBy}>
                                <div className={styles.social}>
                                    <a href="https://www.linkedin.com/in/marcos-ignacio-iorio-93a31a191/" target="_blank"><BsLinkedin className={styles.linkedin}/></a>
                                    <a href="https://github.com/Marcos-Iorio" target="_blank"><BsGithub className={styles.github}/></a>
                                </div>
                                <button onClick={downloadCV} className={styles.download} download>Download CV</button>
                                <p>Made by Marcos Iorio</p>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <Routes>
                                <Route exact path='/' element={<Home/>}/>
                                <Route exact path='/resume' element={<Resume/>}/>
                                <Route exact path='/portfolio' element={<Portfolio/>}/>
                                <Route exact path='/contact-me' element={<Contact/>}/>
                            </Routes>
                        </div>
                    </div>
                    {modal ?
                        <div className={styles.modal_background}>
                        <div className={styles.modal}>
                            <div className={styles.modal_body}>
                                <div className={styles.close}>
                                    <button onClick={downloadCV}>
                                        X
                                    </button>
                                    <div style={{textAlign: 'center', fontSize: '20px', padding: '10px'}}>Select the language:</div>
                                </div>
                                
                                <div className={styles.buttons}>
                                    
                                    <a href={cvEn} target="_blank">English</a>
                                    <a href={cvEs} target="_blank">Spanish</a>
                                </div>
                                
                            </div>   
                        </div>
                    </div> : ''}    
                </div>
            </BrowserRouter>
        );
    }else{
        return(
            <BrowserRouter>
                <div className={styles.wrapper}>
                    <Navbar/>
                    <div className={styles.container}>
                        <div className={styles.titulo}>
                            <div>Marcos Iorio</div>
                            <p>Software developer</p>
                        </div>
                        <div className={styles.madeBy}>
                            <div className={styles.social}>
                                <a href="https://www.linkedin.com/in/marcos-ignacio-iorio-93a31a191/" target="_blank"><BsLinkedin className={styles.linkedin}/></a>
                                <a href="https://github.com/Marcos-Iorio" target="_blank"><BsGithub className={styles.github}/></a>
                            </div>
                            <button onClick={downloadCV} className={styles.download} download>Download CV</button>
                        </div>
                                <Home/>
                                <Resume/>
                                <Portfolio/>
                                <Contact/>
                        {modal ?
                            <div className={styles.modal_background}>
                                <div className={styles.modal}>
                                    <div className={styles.modal_body}>
                                        <div className={styles.close}>
                                            <button onClick={downloadCV}>
                                                X
                                            </button>
                                            <div style={{textAlign: 'center', fontSize: '20px', padding: '10px'}}>Select the language:</div>
                                        </div>
                                        
                                        <div className={styles.buttons}>
                                            
                                            <a href="../../../assets/curriculum/CV_Marcos-Iorio-en.pdf" target="_blank">English</a>
                                            <a href="../../../assets/curriculum/CV-Marcos-Iorio.pdf" target="_blank">Spanish</a>
                                        </div>
                                    </div>   
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Container;