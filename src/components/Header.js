import React, { Component } from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import {Animated} from "react-animated-css";
import "../App.css"
function Header (){

    return(
    <div>
        <Container className="bg">
<Animated animationIn="fadeInUpBig" animationOut="fadeOut" isVisible={true}>
    <Col>

  <Row>
    <Col md={4}>
      <Animated animationIn="bounceInLeft" animationInDelay="550" animationOut="fadeOut" isVisible={true}>
    <div>
    <img src={require("../img/suit.PNG")} alt="suit"
    style={{width:"100%", float:"left", borderRadius:35}}/>
    </div></Animated>
    </Col>

    
    <Col  lg={{ span: 6}}>
    <Animated animationIn="bounceInRight" animationInDelay="550" animationOut="fadeOut" isVisible={true}>
    <Col>
    <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>
        Hello there!<br></br> My name is James Ravenscroft III<br>
    </br>
    Full Stack Web Developer
    </h1>    </Col></Animated>

    <p className="text-justify"
         style={{ whiteSpace: 'normal', color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5}} 
          >
    I am currently working as Coding Instructor at The Coder School of La Jolla, California. 
     </p>
     <p style={{ whiteSpace: 'normal', color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5}}>
        Some examples of my work are listed below, which are a mix of Node.JS and React.</p><br/>
        <p style={{ whiteSpace: 'normal', color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5}}>
        When I'm not coding I enjoy writing for independent films, bike riding and spending time with my family.
        </p>   
 </Col> 
  </Row></Col></Animated>
</Container>
 </div>)};
  export default Header
