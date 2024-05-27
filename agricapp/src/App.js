import './App.css';
import  Navbar from'./components/Navbar'
import Intro from './components/Intro';
import Passion from './components/Passion';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Product from './components/Product';
import CallToAction from './components/CallToAction';
import ContactUs from './components/ContactUs';
import OurBlog from './components/OurBlog';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Spacer from './components/Spacer';
function App() {
  return (
    <div>
    {/* <Navbar/>
    <Intro/>
    <Passion/> */}
     <Hero />
     <OurStory />
     <Product />
     <CallToAction />
     <Testimonials/>
     <Benefits />
     <OurBlog />
     <ContactUs />
     <Spacer />
    </div>
  
  );
}

export default App;
