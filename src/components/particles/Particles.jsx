import React from 'react'
import TsParticles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOption from './particles.json'
import styles from './particles.module.scss'

import { loadAngleUpdater } from "tsparticles-updater-angle";
import { loadBaseMover } from "tsparticles-move-base";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadExternalAttractInteraction } from "tsparticles-interaction-external-attract";
import { loadExternalBounceInteraction } from "tsparticles-interaction-external-bounce";
import { loadExternalBubbleInteraction } from "tsparticles-interaction-external-bubble";
import { loadExternalConnectInteraction } from "tsparticles-interaction-external-connect";
import { loadExternalGrabInteraction } from "tsparticles-interaction-external-grab";
import { loadExternalPauseInteraction } from "tsparticles-interaction-external-pause";
import { loadExternalPushInteraction } from "tsparticles-interaction-external-push";
import { loadExternalRemoveInteraction } from "tsparticles-interaction-external-remove";
import { loadExternalRepulseInteraction } from "tsparticles-interaction-external-repulse";
import { loadImageShape } from "tsparticles-shape-image";
import { loadLifeUpdater } from "tsparticles-updater-life";
import { loadLineShape } from "tsparticles-shape-line";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadParallaxMover } from "tsparticles-move-parallax";
import { loadParticlesAttractInteraction } from "tsparticles-interaction-particles-attract";
import { loadParticlesCollisionsInteraction } from "tsparticles-interaction-particles-collisions";
import { loadParticlesLinksInteraction } from "tsparticles-interaction-particles-links";
import { loadPolygonShape } from "tsparticles-shape-polygon";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadSquareShape } from "tsparticles-shape-square";
import { loadStarShape } from "tsparticles-shape-star";
import { loadStrokeColorUpdater } from "tsparticles-updater-stroke-color";
import { loadTextShape } from "tsparticles-shape-text";



const Particles = () => {
    const particlesInit = async (engine) => {
      await loadBaseMover(engine);
      await loadParallaxMover(engine);
      await loadParticlesLinksInteraction(engine);
      await loadLineShape(engine);
      await loadPolygonShape(engine);
      await loadLifeUpdater(engine);
      await loadColorUpdater(engine);
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
