import { useEffect, useState } from 'react';
import './App.scss'
import Header from './views/common/header/Header'
import PhoneHeader from './views/common/header/PhoneHeader';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import Home from './views/pages/home/Home';
import About from './views/pages/about/About';

const getCurrentDimension = () => {
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}

export default function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [isPhone, setIsPhone] = useState(screenSize.width < 768);

  useEffect(() => {
    const updateDimension = () => {
      const { width } = getCurrentDimension();
      setScreenSize(getCurrentDimension())
      setIsPhone(width < 768)
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <div className='app'>
      <ScrollToTop />
      {isPhone && <PhoneHeader />}
      {!isPhone && <Header />}
      {/* <Router /> */}
      <Home />
      <About />
    </div>
  )
}
