import Hero from '../Components/Hero'
import About from '../Components/About'
import Applisting from '../Components/applisting'
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FutureManagement from '../Components/FutureManagement';
import TrustedBrands from '../Components/TrustedBrands';

const Home = () => {
    // State for window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Event listener for window resize (with debouncing)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const debouncedResize = () => {
      clearTimeout(debouncedResize.timer);
      debouncedResize.timer = setTimeout(handleResize, 200);
    };

    window.addEventListener('resize', debouncedResize);

    // Cleanup on component unmount
    return () => {
      clearTimeout(debouncedResize.timer);
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  // Scroll progress
  const { scrollYProgress } = useScroll();

  // Animation transforms for desktop views
  const aboutOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const aboutBackground = useTransform(scrollYProgress, [0.2, 0.5], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']);
  const aboutTranslateY = useTransform(scrollYProgress, [0.2, 0.5], ['20%', '0%']);

  const AnimatedSection = ({ children, styleOverrides = {} }) => (
    <motion.section
      style={{
        opacity: aboutOpacity,
        y: aboutTranslateY,
        background: aboutBackground,
        ...styleOverrides,
      }}
      initial={windowWidth >= 768 ? { opacity: 0, y: '20%' } : undefined}
      animate={windowWidth >= 768 ? { opacity: 1, y: '0%' } : undefined}
      transition={windowWidth >= 768 ? { duration: 1 } : undefined}
    >
      {children}
    </motion.section>
  );
  return (
    <div>
      <Hero/>

  <About />


  <Applisting />


<AnimatedSection>
  <FutureManagement />
</AnimatedSection>

<AnimatedSection>
  <TrustedBrands />
</AnimatedSection>

    </div>
  )
}

export default Home
