import './App.scss'
import Header from './views/common/header/Header'
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import Home from './views/pages/home/Home';
import About from './views/pages/about/About';
import Stack from './views/pages/stack/Stack';
import HomePortfolio from './views/pages/home-portfolio/HomePortfolio';
import Contact from './views/pages/contact/Contact';

export default function App() {
  return (
    <div className='app'>
      <ScrollToTop />
      <Header />
      <Home />
      <About />
      <Stack />
      <HomePortfolio />
      <Contact />
    </div>
  )
}
