import React, { Component } from 'react';
import "../magnific-popup.css"
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Recent Projects</h1>
            {/* portfolio-wrapper */}
   
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                {/* modal-01 SwordMasters */}
                  <a href="#modal-01" title="true">
                    <img alt="" src="images/portfolio/swordmasterslogo.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>SwordMasters of Ginaz</h5>
                        <p>Immersive Deskop RPG for the Web</p>
                      <p>Made with React JS</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                
 {/* switch to nicole frank */}
                <div className="item-wrap">
                  <a href="#modal-NF" title="true">
                    <img alt="nicoletwe1" src="images/portfolio/nicoleFrankTWE1.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Nicole Frank TWE</h5>
                        <p>The Wardrobe Evolution</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
 {/* end switch to nicole frank */}
                
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title="true">
                    <img alt="" src="images/portfolio/beerMugs.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ReasonToDrink.Fun</h5>
                        <p>Be more social</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <br/>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title="true">
                    <img alt="mksnap" src="images/portfolio/mksnapshot.JPG" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Market Snapshot</h5>
                        <p>Check Housing Trends in San Diego</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item" >
                <div className="item-wrap">
                  <a href="#modal-05" title="true">
                    <img alt="" src="images/portfolio/adAnimalchemists.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Animalchemists</h5>
                        <p>Card Game for Android (in Development)</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title="true">
                    <img alt="shapeHunterKid" src="./images/portfolio/shapeHunterKid.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Shape Hunter</h5>
                        <p>Matching Game for ages 2-3</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title="true">
                    <img alt="" src="images/portfolio/fvCover.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Fantastic Voyage</h5>
                        <p>Train Scheduling App</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title="true">
                    <img alt="" src="images/portfolio/gifTime.PNG" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Bestest Directors</h5>
                        <p>See clips from Masters of Cinema</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
      {/* SwordMasters Modal-01 */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/battleMenuDemo.jpg" alt="" />
            <div className="description-box">
              <h4>SwordMasters of Ginaz</h4>
              <p>Immersive Deskop RPG for the Web</p>
              <span className="categories">
                <i className="fa fa-tag" />Gaming, Webdesign</span>
            <a  href="https://github.com/jamesravenscroft/swordmastersofginazAugust">    <i className="fa fa-github"/>
            </a>
            </div>
            <div className="link-box">
              <a href="https://swordmasters-august.firebaseapp.com">Play</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}

 {/* switch to nicole frank */}

        <div id="modal-NF" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/nicoleFrankTWE2.jpg" alt="nicoletwe2" />
            <div className="description-box">
              <h4>Nicole Frank TWE</h4>
              <p>The Wardrobe Evolution</p>
              <span className="categories"><i className="fa fa-tag" />Fashion</span>
            </div>
            <div className="link-box">
              <a href="http://www.nicolefranktwe.com">Visit</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
        {/*end switch to nicole frank */}   



}
  {/* Reason to Drink */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/beerMugs.jpg" alt="beermugs" />
            <div className="description-box">
              <h4>Reason To Drink Dot Fun</h4>
              <p>Find a holiday to celebrate, then find a brewery to go party at.</p>
              <span className="categories"><i className="fa fa-tag" />Social Engineering</span>
            </div>
            <div className="link-box">
              <a href="http://www.reasontodrink.fun">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          {/* Market Snapshot */}

          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/mksnapshot.JPG" alt="" />
            <div className="description-box">
              <h4>Market Snapshot</h4>
              <p>Check Housing Trends in San Diego</p>
              <span className="categories"><i className="fa fa-tag" />Real Estate</span>
            </div>
            <div className="link-box">
              <a href="https://market-snapshot.herokuapp.com/">Visit</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}

          {/* Animalchemists */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/adAnimalchemists.jpg" alt="" />
            <div className="description-box">
              <h4>Animalchemists</h4>
             <p>Card Game for Android (in Development)</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="https://jamesravenscroft.github.io/pure-react-animalchemists/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="./images/portfolio/shapeHunterKid.jpg" alt="shapehunterkid" />
            <div className="description-box">
              <h4>Shape Hunter</h4>
              <p>HTML Kid's game for ages 2-3</p>
              <span className="categories"><i className="fa fa-tag" />Shape Hunter</span>
            </div>
            <div className="link-box">
              <a href="https://jamesravenscroft.github.io/Responsive-Portfolio/assets/Shape_Hunter/index.html">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/fvCover.jpg" alt="" />
            <div className="description-box">
              <h4>Fantastic Voyage</h4>
              <p>Train Scheduling game using React Firebase and Firestore.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="https://jamesravenscroft.github.io/trainScheduler/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/gifTime.PNG" alt="" />
            <div className="description-box">
              <h4>Bestest Directors</h4>
              <p>We all love movies. Let's recap some epic moments from your favorite directors.</p>
              <span className="categories"><i className="fa fa-tag" />jQuery, Ajax</span>
            </div>
            <div className="link-box">
              <a href="https://jamesravenscroft.github.io/gifTime/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
        </div> {/* row End */}
      </section>

      <section id="portfolio2">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Back End Apps</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper2" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-09" title="true">
                    <img alt="enternode" src="./images/portfolio/enterNodeCmd5.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Supermarket</h5>
                        <p>Department Store Inventory</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-10" title="true">
                    <img alt="" src="images/portfolio/liri.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Personal Assistant</h5>
                        <p>Search movies, concerts and play music from the Command Line</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-11" title="true">
                    <img alt="" src="images/portfolio/wordGuess.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Dune Quiz</h5>
                        <p>Trivia game based on Frank Herbert's Dune</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
        
     
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
        {/* modal-08 coffee cup */}
        
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
            <div className="description-box">
              <h4>Coffee Cup</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-08 End */}
          {/* modal-09 Supermarket */}
          <div id="modal-09" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="./images/portfolio/enterNodeCmd5.jpg" alt="entercmd" />
            <div className="description-box">
              <h4>SuperMarket</h4>
              <p>This Back End app allows your to buy, sell and check Inventory.</p>
              <span className="categories"><i className="fa fa-tag" />Node, MySQL</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jamesravenscroft/SuperMarket">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-09 End */}
          {/* modal-10 liri */}
          <div id="modal-10" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/liri.jpg" alt="liri" />
            <div className="description-box">
              <h4>Liri Personal Assistant.</h4>
             <p>Search for Upcoming Concerts, Read Movie Reviews and Play Spotify Songs, all from the comfort of your command line.</p>
               <span className="categories"><i className="fa fa-tag" />Node, Javascript</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jamesravenscroft/newLiriFixy">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-10 End */}
          <div id="modal-11" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/wordGuess.jpg" alt="" />
            <div className="description-box">
              <h4>Dune Word Guess Game</h4>
              <p>This is about as nerdy as it gets. Node word guess game that uses Node.js. Based on Frank Herbert's Dune. Its not going to be easy.</p>
              <span className="categories"><i className="fa fa-tag" />Node.js</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jamesravenscroft/wordGuessDune">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-11 End */}

          <div id="modal-12" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/fiboCsharp.PNG" alt="" />
            <div className="description-box">
              <h4>Fibonacci sequence in C#</h4>
              <p>Basic Fibonacci Sequence in C#</p>
              <span className="categories"><i className="fa fa-tag" />Node.js</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jamesravenscroft/wordGuessDune">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-12 End */}

          <div id="modal-13" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/dnsFirebaseHostingInstructions.JPG" alt="" />
            <div className="description-box">
              <h4>DNS Transfer Firebase NameCheap.com</h4>
              <p>How to create a masked domain transfer from Firebase and NameCheap</p>
              <span className="categories"><i className="fa fa-tag" />Coming Soon!!</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/jamesravenscroft/wordGuessDune">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-13 End */}




          <div id="modal-21" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon- Factorials in C#</h4>
              <p>ComingSoon</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon- Writing variables in SQL</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-23" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon- Common SQL situations </h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-23 End */}
          <div id="modal-24" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
            <div className="description-box">
              <h4>Coming Soon- Returning an input backwards in C#</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-24 End */}
          <div id="modal-25" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon- How to make a site run faster</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div> {/* row End */}
      </section>

     

      <section id="portfolio4">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Frequently Asked Questions</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper4" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-12" title="true">
                    <img alt="" src="images/portfolio/fiboCsharp.PNG" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>C#</h5>
                        <p>How do you write the Fibonacci Sequence?</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              {/* modal-20 console */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-20" title="true">
                    <img alt="" src="images/portfolio/console.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ComingSoon - Changing  List Order in CSS</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-21" title="true">
                    <img alt="" src="images/portfolio/judah.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ComingSoon- Factorials in C#</h5>
                        <p>Webdesign</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-22" title="true">
                    <img alt="" src="images/portfolio/into-the-light.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ComingSoon- Variables in MySQL</h5>
                        <p>ComingSoon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-13" title="true">
                    <img alt="" src="images/portfolio/dnsNameCheapSuccess.JPG" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Firebase DNS Transfer</h5>
                        <p>How to mask DNS transfer</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-23" title="true">
                    <img alt="girl" src="./images/portfolio/girl.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ComingSoon- Common SQL situations</h5>
                        <p>ComingSoon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-24" title="true">
                    <img alt="" src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Coming Soon- Returning an input backwards in C#</h5>
                        <p>C#</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-25" title="true">
                    <img alt="" src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ComingSoon- How to make a site run faster</h5>
                        <p>ComingSoon</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
        {/* modal-08 coffee cup */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon</h4>
              <p>ComingSoon</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-08 End */}
          <div id="modal-20" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon- Changing  List Order in CSS</h4>
              <p>ComingSoon</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-20 End */}
          {/* <div id="modal-09" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="./images/portfolio/enterNodeCmd5.JPG" alt="entercmd" />
            <div className="description-box">
              <h4>ComingSoon</h4>
              <p>ComingSoon</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div> */}
          {/* </div> */}
          {/* modal-09 End */}

          <div id="modal-21" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon</h4>
              <p>ComingSoon</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-21 End */}
          <div id="modal-22" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon- Variables in MySQL</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-23" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/girl.JPG" alt="girlmodal" />
            <div className="description-box">
              <h4>ComingSoon- Common SQL situations</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-23 End */}

          {/* Modal-24 origami */}
          <div id="modal-24" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
            <div className="description-box">
              <h4>Coming Soon- Returning an input backwards in C#</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-25" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
            <div className="description-box">
              <h4>ComingSoon- How to make a site run faster</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.jamesravenscroft3.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* 7 End */}
        </div> {/* row End */}
      </section>

      </React.Fragment>
    );
  }
}