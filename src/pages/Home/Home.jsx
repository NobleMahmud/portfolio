import { Helmet } from 'react-helmet-async';
import About from '../About/About';
import Contact from '../Contact/Contact';
import ProjectsSlide from '../Projects/ProjectsSlide';
import Skills from '../Skills/Skills';
import Drawer from './Drawer/Drawer';
import HeroSection from './HeroSection/HeroSection';
import GlowingDivs from '../GlowingDivs/GlowingDivs';
import Projects from '../Projects/Projects';
import ParticlesBg from '../../ParticlesBg/ParticlesBg';

const Home = () => {

    return (
        <div>
            
            <Helmet>
                <title>Nobel Mahmud</title>
            </Helmet>
            <Drawer></Drawer>
            <ParticlesBg></ParticlesBg>
            <HeroSection></HeroSection>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <GlowingDivs></GlowingDivs>
            <ProjectsSlide></ProjectsSlide>
            <Contact></Contact>
        </div>
    );
};

export default Home;