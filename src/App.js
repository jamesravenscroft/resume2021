import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Slider from './slider';
import {Animated} from "react-animated-css";
// import Navbar from "./components/Navbars/AdminNavbar"
// import AdminNavbarLinks from "./components/Navbars"
// import Carousel from './Carousel';
// import MotionMenu from '@jessemc98/motion-menu';
// import { SpacedMotionMenu } from '@jessemc98/motion-menu';
import logo from './logo.svg';
import './App.css';
// import logo2 from './s1.png';
// import logo3 from './s2.png';
// import logo4 from './s3.png';
// import logo5 from './s4.png';


const btn = {iconSrc: logo}
// const btn2 = {iconSrc: logo2}
// const btn3 = {iconSrc: logo3}
// const btn4 = {iconSrc: logo4}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.  
  <Container className="topper" style={{maxWidth:"100%",
    background: 'linear-gradient(to right bottom, 	#0080ff, #00ffff)'
  }} >
  {/* <h3>Corner menu example</h3>
       
            <MotionMenu
              className="btmRight"
              btns={[btn,btn,btn,btn]}
              spaceBetween={22}
              btnRadius={20}
              mainBtnRadius={30}
              angle={37}
              angleOffset={45} /> */}
      

      <Nav 
      // variant="pills"
  activeKey="/home"
  onSelect={selectedKey => alert(`selected ${selectedKey}`)}
style={{
  
  background: 'linear-gradient(to right bottom, 	#0080ff, 	#0066cc'}}
>
  <Nav.Item>
    <Nav.Link 
    style={{color:"white"}}
    href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}} href="mailto:hello@jamesravenscroft.com">Contact</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}} href="https://swordmasters-august.firebaseapp.com">Recent Projects</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white"}} eventKey="disabled" disabled>
      James Ravenscroft III
    </Nav.Link>
  </Nav.Item>
</Nav>
    {/* <Navbar></Navbar> */}
 <Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
    <Col>

  <Row>
    <Col md={4}>
      <Animated animationIn="bounceInLeft" animationInDelay="550" animationOut="fadeOut" isVisible={true}>
    <div>
    <img src={require("./img/suit.PNG")} alt="suit"
    style={{width:"100%", float:"left", borderRadius:35}}/>
    </div></Animated>
    </Col>

    
    <Col  lg={{ span: 6}}>
    <Animated animationIn="bounceInRight" animationInDelay="550" animationOut="fadeOut" isVisible={true}>
    <Col>
    <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Hello there!<br></br> My name is James Ravenscroft III<br>
    </br>
    Full Stack Web Developer
    </h1>    </Col></Animated>

    <p className="mainDescription"
         style={{backgroundColor:"white", borderRadius:15, color:"black",width:"100%"}} 
          >
    Full Stack Developer- prior to web Development I've been a
    <br></br>manger and business owner.<br></br>
     I've developed many client compliance systems and <br></br>constantly pushed to improve <br></br>
     automation and communications systems. I've tinkered with programming <br></br>
     recreationally for years and now I am   <br></br>
     </p>
 </Col> 
  </Row></Col></Animated>
  <br></br>
  <a href="https://calendly.com/jamesravenscroft3">
    <h2 style={{color:"red", fontSize:60, WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:2, WebkitFlexGrow:10}}>Schedule an appointment. Click here.</h2>
    

  </a>
  
  <br></br>
  <Row>
    <Col><Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
    <Col><h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>A Boat Load of Know How</h1></Col></Animated>
    <h2 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Front End Tech:</h2>
    <p   style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15, color:"black",
          margin: 0,
       padding:0,
       width:"100%",
       position:"relative"
      }} >
      React, ESLint, BootStrap, Javascript, Jquery, CSS, Handlebars
    </p>

    <h2 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Back End Tech:</h2>
    <p  style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15, color:"black"}} >NodeJS, MySQL, FireBase, Auth0, AJAX, Mongoose, Sequelize, Express
    </p>
     
     
    </Col><br></br>

  </Row>
  <Row>    
    <Col><h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Contact:</h1><br></br><p  style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15}} >
    <p style={{color:"black", fontSize:"150%"}}>email: hello@jamesravenscroft3.com
    <br></br>
    phone: 781-727-3848</p>
    <br></br>
    <a href="https://calendly.com/jamesravenscroft3">  Schedule an appointment. 
    </a>
 </p>
    
    </Col>
</Row>
<br></br>
<Row>
  <h1 style={{WebkitAlignContent:"center", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>PROJECTS:</h1><br></br>
  </Row><Row>

  <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
SwordMasters of Ginaz</h1></Row><Row>
<br></br>
<h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>

Web Based Desktop RPG. 
</h1>
<br></br>
<p>Technology used: React, BootStrap, CSS Animations, Firebase</p>
<a href="https://swordmasters-august.firebaseapp.com"><Animated animationIn="fadeIn" 
// animationInDelay={10000} 
// animateOnMount="true"
animationOut="fadeInDownBig" isVisible={true}>
    <div>
<img src={require("../src/img/swordmasterslogo.PNG")} alt="swordmastersLogo" width="70%"/></div></Animated>
</a>
<br></br><h2 style={{float: "left", marginLeft:"25%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Made with React</h2>
<img src={require("./img/React.js_logo-512.png")} alt="reactLogo" style={{height:50, marginRight:"20%"}}/>
<br></br>
<iframe src="https://player.vimeo.com/video/346965384" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen
style={{marginLeft:"25%"}}
></iframe>

</Row>

<Row><Col>
 <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
   
   Coming Soon: 
   

 

   <br></br>
   <a href="https://ravenscroftgames.firebaseapp.com/">Animalchemists</a></h1><Row>
   <img src={require("../src/img/pic4767592.png")} alt="animalc1" width="35%" />

<br></br>
   <img src={require("../src/img/pic4905412.jpg")} alt="animalc2" width="65%" />
   </Row>
</Col>
</Row>
<Row>
  <h1>
  Market SnapShot</h1><a href="https://market-snapshot.herokuapp.com/">
  <img src={require("../src/img/Market_snap_logo.png")} alt="marketSnapshotLogo" width="55%" />
  </a>
  <h1>See The latest housing trends in San Diego</h1>
  <br>
  </br>
  <p>Tech used: Chart.js MySQL</p>
</Row>
<Row><h1>
  ReasonToDrink.Fun</h1><a href="https://ReasonToDrink.Fun">
  <img src={require("../src/img/cheers.gif")} alt="reasonToDrinkLogo" width="40%" 
  style={{  borderRadius: 85, width:"100%"
 }}
   />
</a>
<h1>Find a holiday and a place to celebrate</h1>
  <br>
  </br>
  <p>Tech used: Ajax, Javascript, BootStrap</p>
</Row>
<Row 
      // style={{width:"80%"}}
  >
    <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Very Exciting Back End Slideshow</h1>
<Slider/>
</Row>

<Row ><Col>
    <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Services:</h1><br></br>
<br></br>
<h2 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Web Site:</h2><br></br>
<h3 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
  Includes annual revisions.</h3><br></br>
<h3 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
  I5 Years for $500</h3><br></br>
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
