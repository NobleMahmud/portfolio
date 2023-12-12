import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Drawer from './Drawer/Drawer';
import HeroSection from './HeroSection/HeroSection';

const Home = () => {
    
    return (
        <div>
           
           <Drawer></Drawer>
           <HeroSection></HeroSection>
           <div className=''>
           <About></About>
             <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
           <Skills></Skills>
           <Contact></Contact>
           </div>
        </div>
    );
};

export default Home;