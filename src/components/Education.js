import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Nav from 'react-bootstrap/Nav';

function Education(){
    return(
<Container style={{alignSelf:"center",alignContent:"center",  backgroundColor:"white", width:"75%", marginLeft:"1%", borderRadius:"15%", minWidth:375, whiteSpace:"normal"}}>

    <Row style={{alignContent:"center"}}>
        <h1 style={{marginLeft:"30%", WebkitTextStroke:1, WebkitTextStrokeColor:"black", alignContent:"center"}}>Education:</h1>
    </Row>
    <Row>
    <Col md style={{ span: 6, offset: 3,width:"40%", maxWidth:"50%",marginLeft:"10%", float:"left"}}><img src={require("../img/MCClogo.jpg")} 
        style={{width:"80%", marginTop:"8%"}} alt="MCC"/>
        <br></br><p style={{color:"black"}}>Communications Major 2008-2010</p>
        </Col>
        
        <Col style={{width:"50%", float:"right"}}> 
        <img src={require("../img/ucsd1.png")} alt="UCSD" style={{marginTop:"0%", maxWidth:"45%"}}/>
        <br/><p style={{color:"black", whiteSpace:"normal"}}>Full Stack Web Developer Certifaction 2019</p>
        </Col>
    </Row>
    <Row style={{alignConten:"center"}}>
    <h2 style={{marginLeft:"30%", marginTop:"1%", WebkitTextStroke:1, WebkitTextStrokeColor:"black"}}>Other Education:</h2>
    <p style={{marginLeft:"10%", color:"black", whiteSpace:"normal"}}>National Academy of Sport Medicine, CPT, CES. Fitness Together Leadership Training</p>
    </Row>


         </Container> 

    )

};
export default Education