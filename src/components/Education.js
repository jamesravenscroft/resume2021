import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

function Education(){
    return(
           <div>
               <Row style={{backgroundColor:"white", width:"75%", marginLeft:"10%", borderRadius:"15%"}}>
                   <Col style ={{width:"50%", marginLeft:"10%"}}><img src={require("../img/MCClogo.jpg")} 
                    />
                   <br></br><p style={{color:"black"}}>Communications Major 2008-2010</p>
                   </Col>
                   
                   <Col style={{width:"50%"}}> <img src={require("../img/ucsd1.png")}
                    style={{marginTop:"8%"}}/>
                   <br/><p style={{color:"black"}}>Full Stack Web Developer Certifaction 2019</p>
                   </Col>
               </Row>


           </div> 

    )

};
export default Education