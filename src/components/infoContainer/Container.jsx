import React from 'react';
import styles from './container.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../home/Home'
import Resume from '../resume/Resume'
import Navbar from '../navbar/Navbar';

import { BsLinkedin, BsGithub } from "react-icons/bs";
import Portfolio from '../portfolio/Portfolio';

const Container = () => {

    const downloadCV = (e) =>{
        e.preventDefault();

    }
    
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
                        <div className={styles.social}>
                            <a href=""><BsLinkedin className={styles.linkedin}/></a>
                            <a href="https://github.com/Marcos-Iorio"><BsGithub className={styles.github}/></a>
                        </div>
                        <a onClick={downloadCV} className={styles.download} >Download CV</a> 
                    </div>
                    <div className={styles.col}>
                        <Routes>
                            <Route exact path='/' element={<Home/>}/>
                            <Route exact path='/resume' element={<Resume/>}/>
                            <Route exact path='/portfolio' element={<Portfolio/>}/>
                        </Routes>
                    
                    </div>
                </div>
        
                
            </div>
        </BrowserRouter>
    );
}

export default Container;