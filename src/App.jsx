import About from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import Services from './components/Services';
import Works from './components/Works';

function App() {
  return (
    <>
      <div className='font-inter bg:white dark:bg-slate-900 transition-all duration-100 ease-in'>
        <div className='max-w-5xl mx-auto w-11/12'>
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <Services></Services>
          <Works></Works>
          <About></About>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App