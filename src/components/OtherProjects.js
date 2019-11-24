import React from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

function OtherProjects(){
return(
<div>
<Container style={{backgroundColor:"white"}}>
    <Row><h1 style={{marginLeft:"10%", WebkitAlignContent:"center", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>OTHER PROJECTS:</h1><br></br></Row>
<Row>
<Col>1</Col>
<Col><a target="_blank" href="https://jamesravenscroft.github.io/Word-Guess-Game/">
   <img src={require("../img/zeldaWordGuessGameThumb.PNG")} alt="Zelda" width="100%"/> </a> 
   <p style={{color:"black"}}> Legend of Zelda Word Guess</p></Col>
<Col>
<img src="https://ak2.picdn.net/shutterstock/videos/16196992/thumb/11.jpg" alt="bestFriends"
    style={{width:"50%"}}
    />
<h4 class="pt-100 pb-30"><a href="https://friend-finder2341.herokuapp.com/">Friend Finder</a></h4>
<p>
Friend Finder will help find your best friend based on our survey.		
</p>
</Col>
<Col>3</Col>
</Row>
<Row>
<Col>4</Col>
<Col>    

<a href="https://jamesravenscroft.github.io/unit-4-game/">
  		
     <img class="img-fluid" src={require("../img/duneBalladOfKwizatzHarderachMedium.PNG")} style={{width:"35%"}} alt="dune"/>
  <p class=" pb-100">The Ballad of the Kwizats Haderach<br></br>
 Become the Pinnacle of Human evolution.				
    </p>						
</a>

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

{/* <a target="_blank" href="assets/Shape_Hunter/index.html">
<div class="slideUp"> <img src="assets/Shape_Hunter/images/shapeHunterKid.png" alt="Shape Hunter" width="300" height="200">
</a>
<div class="desc">Shape Hunter <br> Kids Game!</div></div>
</div> */}
