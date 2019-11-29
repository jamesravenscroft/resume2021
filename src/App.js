import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Slider from './slider';
import {Animated} from "react-animated-css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Eductation from "./components/Education";
import OtherProjects from "./components/OtherProjects";
import BackgroundImage from "./components/BackgroundImage";
// import Navbar from "./components/Navbars/AdminNavbar"
// import AdminNavbarLinks from "./components/Navbars"
// import Carousel from './Carousel';
// import MotionMenu from '@jessemc98/motion-menu';
// import { SpacedMotionMenu } from '@jessemc98/motion-menu';
import logo from './logo.svg';
import './App.css';
// import Contact from './components/Contact';
// import logo2 from './s1.png';
// import logo3 from './s2.png';
// import logo4 from './s3.png';
// import logo5 from './s4.png';


// const btn = {iconSrc: logo};
// const btn2 = {iconSrc: logo2}
// const btn3 = {iconSrc: logo3}
// const btn4 = {iconSrc: logo4}

function App() {
  return (

    <div style={{maxWidth:"100%", minWidth:"100%", whiteSpace: 'normal',
    background: 'linear-gradient(to right bottom, 	#0080ff, #00ffff)'}}>
    {/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.   */}
  <Container style={{width:"100%", minWidth:375}}>
<Row className="topper">
      <Nav 
      // variant="pills"
  activeKey="/home"
  onSelect={selectedKey => alert(`selected ${selectedKey}`)}
style={{background: 'linear-gradient(to right bottom, 	#0080ff, 	#0066cc'}}
    >
  <Nav.Item>
    <Nav.Link 
    style={{color:"white", float:"left", marginLeft:"10%"}}
    href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white", float:"left", marginLeft:"5%"}} href="mailto:hello@jamesravenscroft.com">Contact</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white",float:"left", marginLeft:"5%"}} href="https://swordmasters-august.firebaseapp.com">Recent Projects</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white",float:"left", marginLeft:"5%"}} eventKey="disabled" disabled>
      James Ravenscroft III
    </Nav.Link>
  </Nav.Item>
</Nav>
</Row>
    {/* <Navbar></Navbar> */}
 <Header/>
  
  <br></br>
 <Contact
  style={{marginTop:"10%"}}
  />
 <br></br>
 <Eductation/>
<br></br>
<Skill/>
<Projects/>
<OtherProjects/>
{/* <Row ><Col>
    <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Services:</h1><br></br>
<br></br>
<h2 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Web Site:</h2><br></br>
<h3 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
  Includes annual revisions.</h3><br></br>
<h3 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
  5 Years for $500</h3><br></br>
<h3 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
  3Years for $400</h3>
  <br></br>
<Row><Col>
<h2 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
 
  Video Game</h2><br></br>
<h3 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
  Includes art and annual database hosting.</h3><br></br>
<h3 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
  $35,000</h3><br></br>
  </Col>
</Row>
</Col>
</Row> */}
</Container>
</div>
  )}

export default App;
