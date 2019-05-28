import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Slider from './slider';


// import Carousel from './Carousel';



// import logo from './logo.svg';
import './App.css';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.  
  <Container className="topper">

    <Nav/>
  <Row>
    <Col md={4}>
    <img src={require("./img/suit.PNG")}
    style={{width:"40%", float:"left", borderRadius:35}}/>
    
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
    <p>React, ESLint, BootStrap, Javascript, Jquery, CSS, Handlebars
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
    New Website: www.JamesRavenscroft3 coming soon.
    
    
    </Col>

  </Row>
<br></br>
<Row>
  <h1>PROJECTS:</h1><br></br>
  <h1>
Oasis RPG: SwordMasters of Ginaz</h1>
<a href="https://morning-refuge-74795.herokuapp.com/">
<img src={require("../src/img/swordmasterslogo.PNG")} alt="swordmastersLogo" width="70%"/>
</a>
</Row>
<Row><h1>
  Market SnapShot</h1><a href="https://market-snapshot.herokuapp.com/">
  <img src={require("../src/img/Market_snap_logo.png")} alt="marketSnapshotLogo" width="55%" />
  </a>
</Row>
<Row><h1>
  ReasonToDrink.Fun</h1><a href="https://ReasonToDrink.Fun">
  <img src={require("../src/img/cheers.gif")} alt="reasonToDrinkLogo" width="40%" 
  style={{  borderRadius: 85,
 }}
   />
</a>

</Row>
<Row 
      // style={{width:"80%"}}
  >
    <h1>Very Exciting Back End Slideshow</h1>
<Slider/>
</Row>


</Container>




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
