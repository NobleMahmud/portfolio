import About from '../About/About';
import Drawer from './Drawer/Drawer';
import HeroSection from './HeroSection/HeroSection';
import TypeWrite from './TypeWrite/TypeWrite';

const Home = () => {
    
    return (
        <div>
           <div className='sticky top-20 right-0'>
           <Drawer></Drawer>
           </div>
           <HeroSection></HeroSection>
           <About></About>
        </div>
    );
};

export default Home;