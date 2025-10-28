import React  from 'react';
import Header from './components/Header.js';
import About from './components/about.js';
import Resume from './components/resume.js';
import Portfolio from './components/portfolio.js';
import Testimonials from  './components/Testimonials.js';
// import ContactUs from './components/contactus';
import Footer from './components/footer.js';
function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        {/* <ContactUs /> */}
        <Footer />
    </div>
  );
}

export default App;
