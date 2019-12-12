import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "../App.css"
function Header (){

    return(
    <div>
        <Container className="bg" style={{whiteSpace: 'normal'}}>


      <Row>
          <Col md={4}>
       
          <div>
          <img src={require("../img/suit.jpg")} alt="suit"
          style={{width:"30%", float:"left", borderRadius:35, maxWidth:"40%"}}/>
          </div>
     
          </Col>
     
          <Col  lg={{ span: 6,  whiteSpace: 'normal', float:"right"}}>
   
          <h1 style={{WebkitTextStrokeColor:"black", maxWidth:"55%", float:"right",  marginTop:"-30%", WebkitTextStrokeWidth:1,  whiteSpace: 'normal'}}>
              Hello there!<br></br> My name is James Ravenscroft III<br>
          </br>
          Full Stack Web Developer
          </h1>    
      
        <p className="text-justify" style={{float:"right", whiteSpace: 'normal', color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5, marginTop:"-8%"}} 
              >
        I am currently working as Coding Instructor at The Coder School of La Jolla, California. 
        </p>
        <p style={{float:"right", whiteSpace: 'normal', color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5, marginTop:"-5%"}}>
            Some examples of my work are listed below, which are a mix of Node.JS and React.</p><br/>
            <p style={{float:"right", whiteSpace: 'normal', color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5, marginTop:"-2%"}}>
            When I'm not coding I enjoy writing for independent films, bike riding and spending time with my family.
            </p>     </Col>
            {/* </Col> */}
 <Row><p style={{whiteSpace: 'normal', color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5, marginTop:"-5%"}}>
EXCUSE THE ALIGNMENT ISSUES || CURRENTLY OPTIMIZING LOAD TIME
</p>
 </Row>
         
  </Row>

</Container>
 </div>)};
  export default Header
