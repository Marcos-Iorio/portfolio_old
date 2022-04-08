import React from 'react'
import TsParticles from "react-tsparticles";
import particlesOption from './particles.json'
import styles from './particles.module.scss'


const Particles = () => {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
    
    const particlesLoaded = (container) => {
        
    };
    
      return (
        <TsParticles className={styles.particles_wrapper}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOption}
        />
      );
}

export default Particles;
