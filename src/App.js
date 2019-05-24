import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel'

// import logo from './logo.svg';
import './App.css';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.  
  <Container>

    <Nav/>
  <Row>
    <Col md={4}>
    <img src={require("./img/suit.PNG")}
    style={{width:"40%", float:"left"}}/>
    
    </Col>
    <Col  md={{ span: 4, offset: 4}}>
    <h1>Hello there!<br></br> My name is James Ravenscroft<br>
    </br>
    Full Stack Web Developer
    </h1>
    <p className="mainDescription">
    Full Stack Developer- prior to web Development I've been a manger and business owner.
     I've developed many client compliance systems and constantly pushed to improve 
     automation and communications systems. I've tinkered with programming 
     recreationally since high school. Prior to learning Javascript I had taken 
     video game programming classes that have helped me learn bits and pieces of 
     javascript logic functions.
     </p>
 </Col>
  </Row>
  <br></br>
  <Row>
    <Col><h1>A Boat Load of Know How</h1>
    <h2>Front End Tech:</h2>
    <p>React, ESLint, BootStrap, Javascript, Jquery, Handlebars
    </p>

    <h2>Back End Tech:</h2>
    <p>NodeJS, MySQL, FireBase, Auth0, AJAX, Mongoose, Sequelize, Express
    </p>
     
     
    </Col>
    <Col>Contact:<br></br>
    email: jraventraining@gmail.com
    <br></br>
    phone: 781-727-3848
    <br></br>
    New Website: www.JamesRavenscroft3 coming song.
    
    
    </Col>

  </Row>
{/*   
  <Row>
    <Col>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/wholeShabang.gif"
      alt="liri"
    />

    <Carousel.Caption>
      <h3>Language Interpretation and Recognition Interface</h3>
      <p>Find Concerts and Search Spotify all from the convenience of your Terminal</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/video.gif"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
    </Col>
    <Col>Portfolio B</Col>
  Carousel of Command line Apps.
  </Row> */}


</Container>
// ;

  )}





    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

export default App;
