import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/navbar/Header';
import Home from './components/Home/Home';
import NotFound from './components/noteFound/NotFound';
import Footer from './components/Footer/Footer';
import MyWork from './components/navbar/myWork/MyWork';
// import SliderComponent from './utils/SliderComponent';
// import About from './components/About/About'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-work" element={<MyWork />} />
          <Route exact path="/about" element={<Home />} />

          <Route exact path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
