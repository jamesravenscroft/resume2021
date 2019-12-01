import React, { Component } from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Slider from '../slider';
// import {Animated} from "react-animated-css";
import '../App.css';
// import App from "../src/App"
// import Journal from "./Journal";

function Projects (){
    return(
    <div>
      <Container style={{width:"90%", whiteSpace:"normal"}}>
        {/* <Grid> */}
<Row>
  <h1 style={{marginLeft:"10%", WebkitAlignContent:"center", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>PROJECTS:</h1><br></br>
  </Row><Row>

  <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1, marginLeft:"10%",whiteSpace:"normal"}}>
SwordMasters of Ginaz</h1></Row><Row>
<br></br>

<Row>
<h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1, marginLeft:"10%", whiteSpace:"normal"}}>
Web Based Desktop RPG. 
</h1></Row>
<br></br>

<a href="https://swordmasters-august.firebaseapp.com">

    <div>
<img src={require("../../src/img/swordmasterslogo.PNG")} alt="swordmastersLogo" width="70%"/></div>
</a>
<br></br>
{/* <h2 style={{float: "left", marginLeft:"25%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Made with React</h2>

<img src={require("./../img/React.js_logo-512.png")} alt="reactLogo" style={{height:50, marginRight:"20%"}}/> */}
<br></br>
<iframe src="https://player.vimeo.com/video/346965384" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen
style={{marginLeft:"-5%", maxWidth:"100%"}}
></iframe><br></br>
<Row><p class="col-md-6 col-md-offset-3" style={{marginLeft:"10%"}}>Tech Used: React, CSS, Firebase</p><br/>
<a href="https://github.com/jamesravenscroft/swordmastersofginazAugust"><img src={require("../img/gitLogo.png")} 
style={{width:"10%", marginLeft:"10%"}} 
alt="gitLogo"/></a>
</Row>
</Row>


<br/>
<Row>
  <h1 style={{marginLeft:"10%", WebkitTextStrokeWidth:1, WebkitTextStrokeColor:"black"}}>
  Market SnapShot</h1><a href="https://market-snapshot.herokuapp.com/">
  <img src={require("../../src/img/Market_snap_logo.png")} alt="marketSnapshotLogo" width="55%" />
  </a>
  <br/>
    <Row>
  <h2 style={{marginLeft:"0%", WebkitTextStrokeWidth:1, WebkitTextStrokeColor:"black" , whiteSpace:"normal"}}>See The latest housing trends in San Diego</h2><br></br>
 <Row><p style={{marginLeft:"30%"}}>Tech Used: Ajax, Chart.js</p>
  </Row><br/><br/><img src={require("../img/gitLogo.png")} 
style={{width:"10%", marginLeft:"40%"}} 
alt="gitLogo"/></Row>
  <br>
  </br>
  {/* https://github.com/gregoryschmidt/market_snapshot */}

  {/* <p>Tech used: Chart.js MySQL</p> */}
</Row>
<Row><br/><h1 style={{marginLeft:"15%", WebkitTextStrokeWidth:1, WebkitTextStrokeColor:"black"}}>
  ReasonToDrink.Fun</h1><a href="https://ReasonToDrink.Fun"><br/><br/>
  <img src={require("../../src/img/cheers.gif")} alt="reasonToDrinkLogo" width="40%" 
  style={{  borderRadius: 85, width:"80%"}}
   />
</a>
<h1 style={{marginLeft:"5%", WebkitTextStrokeWidth:1, WebkitTextStrokeColor:"black", whiteSpace:"normal"}}>Find a holiday and a place to celebrate</h1>
  <br>
  </br>
  <Row>
  {/* https://github.com/jamesravenscroft/reasonToDrink.Fun */}
  <p>Tech Used: Ajax, Javascript</p><br/><img src={require("../img/gitLogo.png")} 
style={{width:"10%", maxHeight:200, marginLeft:"30%"}} 
alt="gitLogo"/></Row>
  <Row>
  {/* <p>Tech used: Ajax, Javascript, BootStrap</p> */}
</Row></Row>
<Row 
      // style={{width:"80%"}}
  >
    <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1, whiteSpace:"normal"}}>Very Exciting Back End Slideshow</h1>
<Slider/>
</Row>
<Row><p>Tech Used: Node.JS, MySQL, MongoDB, Sequelize</p><br/><img src={require("../img/gitLogo.png")} 

style={{width:"10%", marginLeft:"40%",maxHeight:200, }} 
alt="gitLogo"/></Row>
{/* </Grid> */}
<Row><Col>
 <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
   
   Coming Soon: 

   <br></br>
   <a href="https://ravenscroftgames.firebaseapp.com/">
     <p style={{color:"white",WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1 }}>Animalchemists</p></a></h1><Row>
   <img src={require("../img/pic4767592.png")} alt="animalc1" style={{width:"25%", maxWidth:"40%", float:"left"}}/>

<br></br>
   <img src={require("../img/pic4905412.jpg")} alt="animalc2"  style={{width:"25%", maxWidth:"40%"}}/>
   </Row><img src={require("../img/gitLogo.png")}
style={{width:"10%", marginLeft:"40%",maxHeight:200}} 
alt="gitLogo"/><br/>
</Col>
<Row>
  {/* <p style={{float:"left"}}>Tech used: React DND, Firebase</p> */}
</Row>
</Row>
{/* <Journal/> */}
</Container>
    </div>
    )};
    export default Projects

//     <Row>
// <p style={{color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5}}>Technology used: React, BootStrap, CSS Animations, Firebase</p></Row>