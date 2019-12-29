import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> I am currently working as Coding Instructor at The Coder School of La Jolla, California.
           <br/>Some examples of my work are listed below, which are a mix of Node.JS and React.
            </p>
            <p> When I'm not coding I enjoy writing for independent films, bike riding and spending time with my family.
           </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>James Ravenscroft</span><br />
                  <span>San Diego, CA 92117 US
                  </span><br />
                  <span>(781)727-3848</span><br />
                  <span>hello@jamesravenscroft3.com</span>
                  <span><a href="https://calendly.com/jamesravenscroft3"> Schedule an appointment. Click Here!</a>
   </span>
                </p>
              </div>
              {/* <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div> */}
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}