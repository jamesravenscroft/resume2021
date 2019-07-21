import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Slider from './slider';
import {Animated} from "react-animated-css";

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
    <Col md={4}><Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
    <img src={require("./img/suit.PNG")}
    style={{width:"40%", float:"left", borderRadius:35}}/>
    </div></Animated>
    </Col>

    
    <Col  md={{ span: 4, offset: 4}}>
    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
    <div>
    <h1>Hello there!<br></br> My name is James Ravenscroft III<br>
    </br>
    Full Stack Web Developer
    </h1></div></Animated>
    <p className="mainDescription"
         style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15}} 
          >
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
  <a href="https://calendly.com/jamesravenscroft3">
    <h2>Schedule an appointment. Click here.</h2>
    

  </a>
  
  <br></br>
  <Row>
    <Col><Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
    <div><h1>A Boat Load of Know How</h1></div></Animated>
    <h2>Front End Tech:</h2>
    <p   style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15}} >
      React, ESLint, BootStrap, Javascript, Jquery, CSS, Handlebars
    </p>

    <h2>Back End Tech:</h2>
    <p  style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15}} >NodeJS, MySQL, FireBase, Auth0, AJAX, Mongoose, Sequelize, Express
    </p>
     
     
    </Col><br/>
    <Col><h1>Contact:</h1><br></br><p  style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15}} >
    email: hello@jamesravenscroft3.com
    <br></br>
    phone: 781-727-3848
    <br></br>
    <a href="https://calendly.com/jamesravenscroft3">  Schedule an appointment. 
    </a>
 </p>
    
    </Col>

  </Row>
<br></br>
<Row>
  <h1>PROJECTS:</h1><br></br>
  <h1>
Oasis RPG: SwordMasters of Ginaz</h1>

<a href="https://morning-refuge-74795.herokuapp.com/"><Animated animationIn="fadeIn" 
// animationInDelay={10000} 
// animateOnMount="true"
animationOut="fadeInDownBig" isVisible={true}>
    <div>
<img src={require("../src/img/swordmasterslogo.PNG")} alt="swordmastersLogo" width="70%"/></div></Animated>
</a><br></br><h2 style={{float: "left", marginLeft:"25%"}}>Made with React</h2>
<img src={require("./img/React.js_logo-512.png")} alt="reactLogo" style={{height:50, marginRight:"20%"}}/>
<br></br>
<iframe src="https://player.vimeo.com/video/346965384" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

</Row>
<Row>
  <h1>
  Market SnapShot</h1><a href="https://market-snapshot.herokuapp.com/">
  <img src={require("../src/img/Market_snap_logo.png")} alt="marketSnapshotLogo" width="55%" />
  </a>
</Row>
<Row><h1>
  ReasonToDrink.Fun</h1><a href="https://ReasonToDrink.Fun">
  <img src={require("../src/img/cheers.gif")} alt="reasonToDrinkLogo" width="40%" 
  style={{  borderRadius: 85
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
