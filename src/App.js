import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Molecules/header/Header';
import Footer from './Molecules/footer/Footer';
import AboutUs from './Organism/AboutUs';
import ContactUs from './Organism/Contactus';
import Home from './Organism/Home';
import AiDoctor from './Organism/AiDoctor';
import AiBooth from './Organism/AiBooth';
import ScrollToTop from './Atom/ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="App">
        {/* Header appears on every page */}
        <Header /> 

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AiDoctor" element={<AiDoctor />} />
            <Route path="/AiBooth" element={<AiBooth />} />
          </Routes>
        </main>

        {/* Footer appears on every page */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
