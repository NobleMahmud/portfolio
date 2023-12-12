import Particles from '@tsparticles/react';
import React from 'react';
import particlesConfig from '../config/particles.config';

const ParticlesBg = () => {
    return (
        <div>
            <Particles params={particlesConfig}></Particles>
        </div>
    );
};

export default ParticlesBg;