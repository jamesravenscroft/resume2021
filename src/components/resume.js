import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>UC San Diego</h3>
                <p className="info">Full Stack Web Developer <span>•</span> <em className="date">2019</em></p>
                <p>
                  Immersive 24 week certification course covering HTML, CSS, Javascript, jQuery, MySQL, MongoDB, Express, React, MVC, ORM, Scrum, Kanban, Sequelize, Python, Java, C#, Big O Notation.
                  </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Middlesex Community College</h3>
                <p className="info">Communication and Science Degree<span>•</span> <em className="date">2010</em></p>
                <p> Adobe Suite, Journalism. While I was there I helped the Audio Video department take steps to launching a digital radio station. 
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>The Coder School of La Jolla</h3>
                <p className="info">Coding Instructor <span>•</span> <em className="date">2019 - Present</em></p>
                <p>
                  Teaching students how to draw and write code. HTML, Python, Java, Javascript, Scratch.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Freelance Web Designer</h3>
                <p className="info">Web Designer <span>•</span> <em className="date">2015- Present</em></p>
                <p>
                 Built and maintained fast loading websites for clients including <a href="https://www.nicolefranktwe.com">Nicole Frank TWE </a>and
              <a href="https://agapedaycaresd.com"> Agape Daycare.</a> Consulted for <a href="https://reliablepainting.com/contact.html">Reliable Painting,</a> and <a href="http://itsthekeeperleague.com">The Keeper League.</a>
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>MERN stack-(MongoDB, Express, React, Node), HTML5, CSS3, Javascript, jQuery,  PHP, AWS, SQL, Python, Java, C#, Linux. Below is a bar graph that doesn't mean anything, it exists merely because bar graphs are cool.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}