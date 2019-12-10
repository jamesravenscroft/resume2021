import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Skill(){
return(
<Row>
    <Col>
    <Col><h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>A Boat Load of Know How</h1></Col>
    <h2 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Front End Tech:</h2>
    <p   style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15, color:"black",
          margin: 0,
       padding:0,
       width:"100%",
       position:"relative",
       whiteSpace: 'normal'
      }} >
      React, ESLint, BootStrap, Javascript, jQuery, CSS, Handlebars
    </p>

    <h2 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1, whiteSpace: 'normal'}}>Back End Tech:</h2>
    <p  style={{border:"blue", borderTopColor:"black" , borderWidth:10,borderBottomColor:"black", backgroundColor:"white", borderRadius:15, color:"black", whiteSpace:"normal"}} >NodeJS, MySQL, FireBase, Auth0, AJAX, Mongoose, Sequelize, Express
    </p>
     <br/>
     <img src={require("../img/icons8-html-5-48.png")} alt="html"/>
     <img src={require("../img/React.js_logo-512.png")} alt="react" style={{width:"5%"}}/>
     <img src={require("../img/icons8-sql-64.png")} alt="sql"/>
     <img src={require("../img/icons8-python-64.png")} alt="python"/>

     <img src={require("../img/icons8-java-48.png")} alt="java"/>
    
    </Col><br></br>

</Row>)};
  export default Skill

