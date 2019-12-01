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
    // style={{float:"left"}}
    >

 <a target="_blank" href="https://jamesravenscroft.github.io/Responsive-Portfolio/assets/Shape_Hunter/index.html">
 <img src={require("../img/shapeHunterKid.png")} alt="Shape Hunter" 
    style={{width:"100%", maxWidth:100}}/>
<br/>
Shape Hunter <br/> Kids Game!</a><br></br><p style={{color:"black"}}>HTML5</p>
</Col>

<Col sm><a target="_blank" href="https://jamesravenscroft.github.io/Word-Guess-Game/">
   <img src={require("../img/zeldaWordGuessGameThumb.PNG")} alt="Zelda" style={{width:"30%"}}/> </a> 
   <p style={{color:"black"}}> Legend of Zelda Word Guess</p></Col>
<Col sm
// style={{float:"right"}}
>
<img src="https://ak2.picdn.net/shutterstock/videos/16196992/thumb/11.jpg" alt="bestFriends"
    style={{width:"30%"}}
    />
<h4 class="pt-100 pb-30"><a href="https://friend-finder2341.herokuapp.com/">Friend Finder</a></h4>
<p style={{color:"black"}}>
Friend Finder will help find your best friend based on our survey.		
</p><br></br><p  style={{color:"black"}}>Javascript, Ajax</p>
{/* https://github.com/jamesravenscroft/FriendFinder */}
</Col>
{/* 2 */}

</Row>


<Row>
<Col sm><a href="https://jamesravenscroft.github.io/unit-4-game/">
  		
          <img class="img-fluid" src={require("../img/duneBalladOfKwizatzHarderachThumb.PNG")} style={{width:"55%"}} alt="dune1"/>
       <p class=" pb-100">Dune Fightin Game<br></br>
      Become the Pinnacle of Human evolution.<p>jQuery</p>				
         </p>						
     </a></Col>
<Col sm>    
<a href="https://jamesravenscroft.github.io/TriviaGame/">
  		
     <img class="img-fluid" src={require("../img/GomJabbar.PNG")} style={{width:"55%"}} alt="dune"/>
  <p class=" pb-100"  style={{color:"black"}}>The Gom Jabbar<br></br>
Can you master the litany against fear?				
    </p>
    <p style={{color:"black"}}>Javascript, Timers</p>						
</a>

</Col>
<Col sm>
<img src={require("../img/gifTime.PNG")} alt="gifTime"
    style={{width:"60%"}}
    />
<h4 class="pt-100 pb-30"><a href="https://jamesravenscroft.github.io/gifTime/">Bestest Directors Gifs</a></h4>
<p style={{color:"black"}}>
See gifs from great directors, or add your own.		
</p><br></br><p style={{color:"black"}}>Javascript, Ajax</p>
{/* https://github.com/jamesravenscroft/gifTime */}
</Col>


</Row>
<Row>
    <Col sm>
<a href="https://jamesravenscroft.github.io/trainScheduler/">
<img class="img-fluid" src={require("../img/fvCover.jpg")} style={{width:"25%"}} alt="voyage"/>
  <p class=" pb-100"  style={{color:"black"}}>Fantastic Voyage<br></br>
Train Scheduler	
    </p>
    <p style={{color:"black"}}>Firebase</p>						
</a>
{/* https://github.com/jamesravenscroft/trainScheduler */}
</Col>
</Row>


</Container>


</div>

)

};
export default OtherProjects



// <div class="dunebg">
// <br><h1 class="whiteout">Dune Series Games - Based on the Novels by Frank Herbert</h1>
// <div class="single-project">
//     <h4 class="pt-30 pb-30"><a href="https://jamesravenscroft.github.io/unit-4-game/">The Ballad of the Kwizats Haderach</h4>
//     <p class=" pb-100">
// Become the Pinnacle of Human evolution.				
//     </p>								
//     <img class="img-fluid" src="img/duneBalladOfKwizatzHarderachMedium.PNG" alt="" href="https://jamesravenscroft.github.io/unit-4-game/">
// </a>
// </div>
// <div class="single-project">
//     <h4 class="pt-100 pb-30"><a href="https://jamesravenscroft.github.io/TriviaGame/">The Gom Jabbar</h4>
//     <p class=" pb-30">
// You are smart. You are brave. Can you pass this test with your life on the line?			
//     </p>
//     <img class="img-fluid" src="img/GomJabbar.PNG" alt="">	
// </a>							
// </div>		
// </div>
// <!--dune end-->						            
// <div class="col-lg-6 project-right">
// <div class="single-project">
// <h4 class="pt-30 pb-30"><a href="https://market-snapshot.herokuapp.com/">Market Snapshot</a></h4>
// <p class=" pb-100">
// Get an at-a-glance view of all Home and Condo Sales in San Diego County!
// </p>								
// <img class="img-fluid" src="img/Market_snap_logo.PNG" alt="">
// </div>
// <div class="single-project">
// <h4 class="pt-100 pb-30"><a href="https://github.com/jamesravenscroft/liriHomeworki">Node CLI App</a></h4>
// <p class=" pb-30">
// Find concerts, movies and music all using the command line in Terminal!
// </p>
// <img class="img-fluid" src="https://github.com/gregoryschmidt/market_snapshot/blob/master/public/images/Market_snap_logo.png" alt="Market Snapshot">		      

// </div>
// <!--dune end-->															
// </div>
// </div>
// </div>	

// <div class="single-project">
{/* <img src="https://ak2.picdn.net/shutterstock/videos/16196992/thumb/11.jpg" alt="bestFriends">
<h4 class="pt-100 pb-30"><a href="https://friend-finder2341.herokuapp.com/">Friend Finder</a></h4>
<p>
Friend Finder will help find your best friend based on our survey.		
</p>
// </div>		 */}

// <div class="gallery">
//     <a target="_blank" href="https://jamesravenscroft.github.io/Word-Guess-Game/">
//    <div class="slideUp">  <img src="assets/images/zeldaWordGuessGameThumb.PNG" alt="Mountains" width="300" height="200">
//     </a>
//     <div class="desc">Legend of Zelda Word Guess</div></div>
//   </div>
// </div>



// gom jabbar
//https://jamesravenscroft.github.io/TriviaGame/