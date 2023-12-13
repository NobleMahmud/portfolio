import { Helmet } from 'react-helmet-async';
import About from '../About/About';
import Contact from '../Contact/Contact';
import ProjectsSlide from '../Projects/ProjectsSlide';
import Skills from '../Skills/Skills';
import Drawer from './Drawer/Drawer';
import HeroSection from './HeroSection/HeroSection';
import GlowingDivs from '../GlowingDivs/GlowingDivs';
import Skills2 from '../Skills/Skills2';
import ProjectCard from '../Projects/ProjectCard';
import Projects from '../Projects/Projects';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Nobel Mahmud</title>
            </Helmet>
            <Drawer></Drawer>
            <HeroSection></HeroSection>
            <About></About>
            <Skills></Skills>
            {/* <Skills2></Skills2> */}
            <Projects></Projects>
            <GlowingDivs></GlowingDivs>
            <ProjectsSlide></ProjectsSlide>
            <Contact></Contact>
        </div>
    );
};

export default Home;