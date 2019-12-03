import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Slider from './slider';

import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Eductation from "./components/Education";
import OtherProjects from "./components/OtherProjects";
import BackgroundImage from "./components/BackgroundImage";

import './App.css';



function App() {
  return (

    <div style={{maxWidth:"100%", minWidth:"100%", whiteSpace: 'normal',
    background: 'linear-gradient(to right bottom, 	#0080ff, #00ffff)'}}>

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

</Container>
</div>
  )}

export default App;
