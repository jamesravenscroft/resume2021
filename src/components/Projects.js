import React, { Component } from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Slider from '../slider';
import {Animated} from "react-animated-css";
// import App from "../src/App"

function Projects (){
    return(
    <div>
      <Container style={{width:"90%"}}>
        {/* <Grid> */}
<Row>
  <h1 style={{marginLeft:"40%", WebkitAlignContent:"center", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>PROJECTS:</h1><br></br>
  </Row><Row>

  <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
SwordMasters of Ginaz</h1></Row><Row>
<br></br>

<Row>
<h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
Web Based Desktop RPG. 
</h1></Row>
<br></br>

<a href="https://swordmasters-august.firebaseapp.com"><Animated animationIn="fadeIn" 
// animationInDelay={10000} 
// animateOnMount="true"
animationOut="fadeInDownBig" isVisible={true}>
    <div>
<img src={require("../../src/img/swordmasterslogo.PNG")} alt="swordmastersLogo" width="70%"/></div></Animated>
</a>
<br></br>
{/* <h2 style={{float: "left", marginLeft:"25%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Made with React</h2>

<img src={require("./../img/React.js_logo-512.png")} alt="reactLogo" style={{height:50, marginRight:"20%"}}/> */}
<br></br>
<iframe src="https://player.vimeo.com/video/346965384" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen
style={{marginLeft:"25%"}}
></iframe>
<Row><p>Tech Used: React, CSS, Firebase</p></Row>
</Row>

<Row><Col>
 <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
   
   Coming Soon: 

   <br></br>
   <a href="https://ravenscroftgames.firebaseapp.com/">
     <p style={{color:"white",WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1 }}>Animalchemists</p></a></h1><Row>
   <img src={require("../../src/img/pic4767592.png")} alt="animalc1" width="35%" />

<br></br>
   <img src={require("../../src/img/pic4905412.jpg")} alt="animalc2" width="65%" />
   </Row>
</Col>
<Row>
  {/* <p style={{float:"left"}}>Tech used: React DND, Firebase</p> */}
</Row>
</Row>
<Row>
  <h1>
  Market SnapShot</h1><a href="https://market-snapshot.herokuapp.com/">
  <img src={require("../../src/img/Market_snap_logo.png")} alt="marketSnapshotLogo" width="55%" />
  </a><Row>
  <h1>      See The latest housing trends in San Diego</h1><br></br>
 <p>Tech Used: Ajax, Chart.js</p>
  </Row>
  <br>
  </br>


  {/* <p>Tech used: Chart.js MySQL</p> */}
</Row>
<Row><h1>
  ReasonToDrink.Fun</h1><a href="https://ReasonToDrink.Fun">
  <img src={require("../../src/img/cheers.gif")} alt="reasonToDrinkLogo" width="40%" 
  style={{  borderRadius: 85, width:"100%"
 }}
   />
</a>
<h1>Find a holiday and a place to celebrate</h1>
  <br>
  </br>
  <p>Tech Used: Ajax, Javascript</p>
  <Row>
  {/* <p>Tech used: Ajax, Javascript, BootStrap</p> */}
</Row></Row>
<Row 
      // style={{width:"80%"}}
  >
    <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Very Exciting Back End Slideshow</h1>
<Slider/>
</Row>
{/* </Grid> */}
</Container>
    </div>
    )};
    export default Projects

//     <Row>
// <p style={{color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5}}>Technology used: React, BootStrap, CSS Animations, Firebase</p></Row>