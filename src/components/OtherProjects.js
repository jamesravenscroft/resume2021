import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
function OtherProjects(){
return(
<div>
<Container style={{backgroundColor:"white"}}>
    <Row style={{MaxWidth:"100%"}}><h1 style={{marginLeft:"3%", WebkitAlignContent:"center", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>OTHER PROJECTS:</h1><br></br></Row>
<Row>

{/* 1 */}
<Col sm
    style={{float:"left", width:"30%"}}
    >

 <a target="_blank" href="https://jamesravenscroft.github.io/Responsive-Portfolio/assets/Shape_Hunter/index.html">
 <img src={require("../img/shapeHunterKid.png")} alt="Shape Hunter" 
    style={{width:"100%", maxWidth:150}}/>
<br/>
<h4 class="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>Shape Hunter</h4><br/><p style={{color:"black", whiteSpace:"normal"}}> Kids Game!<br></br><p style={{color:"black", whiteSpace:"normal"}}>A simple matching game using CSS Shapes, HTML5 and Javascript.</p>
</p></a></Col>

<Col sm style={{float:"center", width:"30%"}}><a target="_blank" href="https://jamesravenscroft.github.io/Word-Guess-Game/">
   <img src={require("../img/zeldaWordGuessGameThumb.PNG")} alt="Zelda" style={{width:"70%"}}/> </a> 
   <h4 class="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>  Legend of Zelda Word Guess</h4><br/><p style={{color:"black", whiteSpace:"normal"}}>Word Guessing game using Javascript.</p></Col>
<Col sm
style={{float:"right", width:"30%"}}
>
<img src="https://ak2.picdn.net/shutterstock/videos/16196992/thumb/11.jpg" alt="bestFriends"
    style={{width:"70%"}}
    />
<h4 class="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}><a href="https://friend-finder2341.herokuapp.com/">Friend Finder</a></h4>
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
  		
          <img class="img-fluid" src={require("../img/duneBalladOfKwizatzHarderachThumb.PNG")} style={{width:"55%"}} alt="dune1"/>
          <h4 class="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>Dune Fighting Game</h4><br></br>
          <p class=" pb-100" style={{color:"black", whiteSpace:"normal"}}> Become the Pinnacle of Human evolution.<br/>A fighting game using jQuery.		
         </p>						
     </a></Col>
     <Col sm
style={{float:"right", width:"30%"}}
>   
<a href="https://jamesravenscroft.github.io/TriviaGame/">
  		
     <img class="img-fluid" src={require("../img/GomJabbar.PNG")} style={{width:"55%"}} alt="dune"/>
     <h4 class="pt-100 pb-30" style={{color:"black", whiteSpace:"normal"}}>
  The Gom Jabbar</h4><br></br>
  <p class=" pb-100"  style={{color:"black", whiteSpace:"normal"}}>Can you master the litany against fear?				
    
    A trivia game using Javascript and Timers.</p>						
</a>

</Col>
<Col sm
style={{float:"right", width:"30%"}}
>
<img src={require("../img/gifTime.PNG")} alt="gifTime"
    style={{width:"60%"}}
    />
<h4 class="pt-100 pb-30" style={{whiteSpace:"normal"}}><a href="https://jamesravenscroft.github.io/gifTime/">Bestest Directors Gifs</a></h4>
<p style={{color:"black", whiteSpace:"normal"}}>
See gifs from great directors, or add your own.		
</p><br></br><p style={{color:"black", whiteSpace:"normal"}}>A Giphy web scraper using Javascript and Ajax.</p>

</Col>


</Row>
<Row>
    <Col sm>
<a href="https://jamesravenscroft.github.io/trainScheduler/">
<img class="img-fluid" src={require("../img/fvCover.jpg")} style={{width:"25%"}} alt="voyage"/>
<h4 class="pt-100 pb-30" style={{whiteSpace:"normal"}}>
Fantastic Voyage</h4><br></br>
<p class=" pb-100"  style={{color:"black", whiteSpace:"normal"}}>Train Scheduler	
    </p>
    <p style={{color:"black", whiteSpace:"normal"}}>Update the train schedule using Firebase Firestore.</p>						
</a>

</Col>
</Row>


</Container>


</div>

)

};
export default OtherProjects

