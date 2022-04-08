import React from 'react'
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className={styles.navbar_wrapper}>
            <nav className={styles.navbar}>
                <ul className={styles.items_list}>
                    <li><NavLink to="/" className={({isActive}) =>( isActive ? styles.active : styles.item)} >About me</NavLink></li>
                    <li><NavLink to="/education" className={({isActive}) =>( isActive ? styles.active : styles.item)} >Education</NavLink></li>
                    <li><NavLink to="/portfolio" className={({isActive}) =>( isActive ? styles.active : styles.item)} >Portfolio</NavLink></li>
                    <li><NavLink to="/Contact" className={({isActive}) =>( isActive ? styles.active : styles.item)} >Contact me</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;