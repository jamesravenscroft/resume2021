import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

function Education(){
    return(
<div style={{backgroundColor:"white", width:"75%", marginLeft:"10%", borderRadius:"15%", minWidth:500, whiteSpace:"normal"}}>
    <Row>
        <h1 style={{marginLeft:"10%", WebkitTextStroke:1, WebkitTextStrokeColor:"black"}}>Education:</h1>
    </Row>
    <Row>
        <Col style ={{width:"40%", marginLeft:"10%", float:"left"}}><img src={require("../img/MCClogo.jpg")} 
        style={{width:"80%", marginTop:"8%"}}/>
        <br></br><p style={{color:"black"}}>Communications Major 2008-2010</p>
        </Col>
        
        <Col style={{width:"50%", float:"right"}}> <img src={require("../img/ucsd1.png")}
        style={{marginTop:"0%"}}/>
        <br/><p style={{color:"black", whiteSpace:"normal"}}>Full Stack Web Developer Certifaction 2019</p>
        </Col>
    </Row>
    <Row>
    <h2 style={{marginLeft:"10%", WebkitTextStroke:1, WebkitTextStrokeColor:"black"}}>Other Education:</h2>
    <p style={{marginLeft:"10%", color:"black", whiteSpace:"normal"}}>National Academy of Sport Medicine, CPT, CES. Fitness Together Leadership Training</p>
    </Row>


         </div> 

    )

};
export default Education