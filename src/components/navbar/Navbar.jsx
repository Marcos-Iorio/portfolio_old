import React, {useRef, useState} from 'react'
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom'

import { AiOutlineMenu } from "react-icons/ai";
import { MdClear } from "react-icons/md";

import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const openMenuMobile = useRef(null);
    const [open, isOpen] = useState(false);

    const openMenu = () =>{
        if(open === false){
            isOpen(true);
        }else{
            isOpen(false);
        }
    }

    if(!isTabletOrMobile){
        return(
            <div className={styles.navbar_wrapper}>
                <nav className={styles.navbar}>
                    <ul className={styles.items_list}>
                        <li><NavLink to="/" className={({isActive}) =>( isActive ? styles.active : styles.item)} >About me</NavLink></li>
                        <li><NavLink to="/resume" className={({isActive}) =>( isActive ? styles.active : styles.item)} >Resume</NavLink></li>
                        <li><NavLink to="/portfolio" className={({isActive}) =>( isActive ? styles.active : styles.item)} >Portfolio</NavLink></li>
                        <li><NavLink to="/contact-me" className={({isActive}) =>( isActive ? styles.active : styles.item)} >Contact me</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }else{
        return(
            <div className={styles.navbar_wrapper}>
                <nav className={styles.navbar}>
                <AiOutlineMenu onClick={openMenu} className={styles.open_menu} />
                    <div ref={openMenuMobile} className={open ? styles.open : styles.closed}>
                        <MdClear className={styles.close_menu} onClick={openMenu}/>
                        <ul className={styles.items_list}>
                            <li><a href="#about" className={styles.item} onClick={openMenu} >About me</a></li>
                            <li><a href="#resume" className={styles.item} onClick={openMenu}>Resume</a></li>
                            <li><a href="#portfolio" className={styles.item} onClick={openMenu}>Portfolio</a></li>
                            <li><a href="#contact-me" className={styles.item} onClick={openMenu}>Contact me</a></li>
                            <div className={styles.madeBy}>Made by Marcos Iorio</div>
                        </ul>
                        
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;