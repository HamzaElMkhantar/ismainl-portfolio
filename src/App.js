import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/navbar/Header';
import Home from './components/Home/Home';
import NotFound from './components/noteFound/NotFound';
import Footer from './components/Footer/Footer';
import MyWork from './components/navbar/myWork/MyWork'
import { animateScroll as scroll, Element } from 'react-scroll';
import About from './components/about/About';
// import SliderComponent from './utils/SliderComponent';
// import About from './components/About/About'; 

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      scroll.scrollToTop();
    }, [pathname]);
  
    return null;
  }

  useEffect(() => {
    scroll.scrollToTop();
  }, [])
  return (
    <Router>
      <div className="App" style={{position:'relative'}}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-work" element={<MyWork />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
