import React from 'react';
import {Container} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';
// import Projects from "./Projects";
function OtherProjects(){
return(

<Container style={{backgroundColor:"white", marginTop:"10%"}} async>
<Row style={{MaxWidth:"100%"}}>
{/* <Projects></Projects> */}
</Row>

    <Row style={{MaxWidth:"100%"}}>
    <h1 style={{marginLeft:"3%", WebkitAlignContent:"center", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>OTHER PROJECTS:</h1><br></br></Row>
      <Row>

{/* 1 */}
<Col sm  style={{float:"left", width:"30%"}} >

 <a target="_blank" rel="noopener noreferrer" href="https://github.com/jamesravenscroft/newLiriFixy">
 <img src={require("../img/liri.jpg")} alt="liri" 
    style={{width:"100%", maxWidth:150}}/>
<br/>
<h4 className="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>Langauge Interpretation and Recognition Interface</h4></a><br/>
<p style={{color:"black", whiteSpace:"normal"}}>Liri: A personal assistant<br></br>Search for Upcoming Concerts, Read Movie Reviews and Play Spotify Songs, all from the comfort of your command line.</p>
</Col>

<Col sm style={{float:"center", width:"30%"}}><a target="_blank" rel="noopener noreferrer" href="https://github.com/jamesravenscroft/wordGuessDune">
   <img src={require("../img/video.jpg")} alt="Node-Dune" style={{width:"70%"}}/> </a> 
   <h4 className="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>Node Word Guess Game</h4><br/><p style={{color:"black", whiteSpace:"normal"}}>Word Guessing game using Node. Based on Terms from "Dune", so it is somewhat difficult.</p></Col>
<Col sm
style={{float:"right", width:"30%"}}
>
<img src={require("../img/enterNodeCmd5.jpg")} alt="bamazon"
    style={{width:"70%"}}
    />
<h4 className="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}><a href="https://github.com/jamesravenscroft/SuperMarket">SuperMarket</a></h4>
<p style={{color:"black", whiteSpace:"normal"}}>
Bamazon
</p><br></br><p  style={{color:"black", whiteSpace:"normal"}}>Buy things from the Command Line using Node and MySQL!</p>

</Col>
{/* 2 */}

</Row>

<Row>

{/* 1 */}
<Col sm
    style={{float:"left", width:"30%"}}>
 <a target="_blank relnoopener" href="https://jamesravenscroft.github.io/Responsive-Portfolio/assets/Shape_Hunter/index.html">
 <img src={require("../img/shapeHunterKid.png")} alt="Shape Hunter" 
    style={{width:"100%", maxWidth:150}}/>
<br/>
<h4 className="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>Shape Hunter</h4><br/><p style={{color:"black", whiteSpace:"normal"}}> Kids Game!<br></br>
A simple matching game using CSS Shapes, HTML5 and Javascript.</p>
</a></Col>

<Col sm style={{float:"center", width:"30%"}}><a target="_blank" rel="noopener noreferrer" href="https://jamesravenscroft.github.io/Word-Guess-Game/">
   <img src={require("../img/zeldaWordGuessGameThumb.PNG")} alt="Zelda" style={{width:"70%"}}/> </a> 
   <h4 className="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>  Legend of Zelda Word Guess</h4><br/><p style={{color:"black", whiteSpace:"normal"}}>Word Guessing game using Javascript.</p></Col>
<Col sm style={{float:"right", width:"30%"}}
>
<img src="https://ak2.picdn.net/shutterstock/videos/16196992/thumb/11.jpg" alt="bestFriends"
    style={{width:"70%"}} async
    />
<h4 className="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}><a href="https://friend-finder2341.herokuapp.com/">Friend Finder</a></h4>
<p style={{color:"black", whiteSpace:"normal"}}>
Friend Finder will help find your best friend based on our survey.		
</p><br></br><p  style={{color:"black", whiteSpace:"normal"}}>A survey matching tool using jQuery and Ajax,</p>

</Col>
{/* 2 */}

</Row>


<Row>
<Col sm
    style={{float:"left", width:"30%"}}
    ><a href="https://jamesravenscroft.github.io/unit-4-game/">
  		
          <img className="img-fluid" src={require("../img/duneBalladOfKwizatzHarderachThumb.PNG")} style={{width:"55%"}} alt="dune1"/>
          <h4 className="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>Dune Fighting Game</h4><br></br>
          <p className=" pb-100" style={{color:"black", whiteSpace:"normal"}}> Become the Pinnacle of Human evolution.<br/>A fighting game using jQuery.		
         </p>						
     </a></Col>
     <Col sm
style={{float:"right", width:"30%"}}
>   
<a href="https://jamesravenscroft.github.io/TriviaGame/">
  		
     <img className="img-fluid" src={require("../img/GomJabbar.PNG")} style={{width:"55%"}} alt="dune"/>
     <h4 className="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>
  The Gom Jabbar</h4><br></br>
  <p className=" pb-100"  style={{color:"black", whiteSpace:"normal"}}>Can you master the litany against fear?				
    <br/>
    A trivia game using Javascript and Timers.</p>						
</a>

</Col>
<Col style={{float:"right", width:"30%"}}
>   
<img src={require("../img/gifTime.PNG")} alt="gifTime"style={{width:"60%"}}/>
<a href="https://jamesravenscroft.github.io/gifTime/">
<h4 className="pt-100 pb-30" style={{whiteSpace:"normal"}}>Bestest Directors Gifs</h4></a>
<p style={{color:"black", whiteSpace:"normal"}}>
See gifs from great directors, or add your own.		
<br></br>A Giphy web scraper using Javascript and Ajax.</p>

</Col>


</Row>
<Row>
<Col xs={6} md={4}>
<a href="https://jamesravenscroft.github.io/trainScheduler/">
<img className="img-fluid" src={require("../img/fvCover.jpg")} style={{width:"25%"}} alt="voyage"/>
<h4 className="pt-100 pb-30" style={{whiteSpace:"normal"}}>
Fantastic Voyage</h4><br></br>
<p className=" pb-100"  style={{color:"black", whiteSpace:"normal"}}>Train Scheduler	
  <br/>Update the train schedule using Firebase Firestore.</p>						
</a>

</Col>
</Row>


</Container>
)

};
export default OtherProjects

