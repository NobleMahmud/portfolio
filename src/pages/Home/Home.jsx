import About from '../About/About';
import Contact from '../Contact/Contact';
import Drawer from './Drawer/Drawer';
import HeroSection from './HeroSection/HeroSection';

const Home = () => {
    
    return (
        <div>
           
           <Drawer></Drawer>
           <HeroSection></HeroSection>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;