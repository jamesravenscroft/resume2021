import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Eductation from "./components/Education";
import OtherProjects from "./components/OtherProjects";

import './App.css';



function App() {
  return (

    <div style={{maxWidth:"100%", minWidth:"100%", whiteSpace: 'normal', 
    background: 'linear-gradient(to right bottom, 	#0080ff, #00ffff)'}} async>

  <Container style={{width:"100%", minWidth:375}}>
<Row className="topper">
      <Nav 
      // variant="pills"
  activeKey="/home"
  onSelect={selectedKey => alert(`selected ${selectedKey}`)} async
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
    <Nav.Link style={{color:"white",float:"left", marginLeft:"5%", paddingRight:100}} eventKey="disabled" disabled>
      James Ravenscroft III
    </Nav.Link>
  </Nav.Item>
  <div style={{float:"center" }}>
<a href="https://www.linkedin.com/in/james-ravenscroft-iii/"><img src={require("./img/linkedin.png")}  style={{width:26, height:25, stroke:"black", backgroundColor:"white"}}  alt="linkedIn"/></a>
<a  href="https://github.com/jamesravenscroft"><img src={require("./img/gitLogo.png")}  style={{borderRadius:30, width:38, height:25, stroke:"black", backgroundColor:"white", marginLeft:60}} alt="gitLogo"/></a>
</div>
  </Nav>
</Row>
</Container>
 <Container style={{alignContent:"center"}}><Header/>
  
  <br></br>
  <Col md={{ span: 6, offset: 3 }}>
 <Contact
  style={{marginTop:"10%"}}
  /></Col>
 <br></br>
  <Col md={{ span: 6, offset: 3 }}>
 <Eductation/></Col>
<br></br>
<Skill
  style={{marginLeft:"15%"}}/>
  <Row>
<Projects/></Row><br></br>
<Row>
<OtherProjects/>
</Row>
</Container>
</div>
  )}

export default App;
