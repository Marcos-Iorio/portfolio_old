import React from 'react'
import styles from './resume.module.scss'

const Resume = () => {

    return(
        <div className={styles.education_container}>
            <div className={styles.title}>
                <span>Education & Experience</span>
            </div> 
            <div className={styles.left_col}>
                <div className={styles.school}>
                    2004-2017 <br />
                    <span>High school degree in Social Science.</span>
                    <p>Colegio Parroquial PIO XII.<br />
                        A bilingual school.
                    </p>
                </div>
                <div className={styles.job}>
                    2021-PRESENT <br/>
                    <span>Working as Web developer in Lund Marketing.</span>
                    <p>I create and mantain websites in Wordpress and Vtex, i improved a lot my css skills and i've learn about analytics and SEO.</p>
                </div>
            </div>
            <div>
                <div className={styles.line_time}>
                </div>
            </div>
            <div className={styles.right_col}>
                <div className={styles.university}>
                    2019-2021 <br />
                    <span>Degree in System Analyst.</span>
                    <p>
                        Instituto Tecnológico Beltrán.<br />
                        Here I've learned the fundamentals of programming in languages like C and OOP in JAVA, also I learned CRUD and API with Slim in PHP, MySQL and Angular.
                    </p>
                </div>
                <div className={styles.course}>
                    2021 <br />
                    <span>Web Development in CorderHouse.</span>
                    <p>I learn HTML, CSS, SASS, GITHUB.</p>
                </div>
                <div className={styles.course}>
                    2021 <br />
                    <span>Modern Javascript in Udemy.</span>
                    <p>I've learned the basics of Javascript and the last standards too like Destructuring, Array Method, Arrow Function, Prototypes, Polyfiling.</p>

                </div>
            </div>

        </div>
    );

}

export default Resume;