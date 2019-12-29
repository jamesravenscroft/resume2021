import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>James is an energetic and tenacious colleague. I've had the opportunity to collaborate on two apps with Jamie, and he always had his nose to the grindstone, ever eager to find solutions for a quality product.
                      </p>
                      <cite>-Ryan Scott, Ryan Scott Studios</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>James Ravenscroft is A- OK.
                         </p>
                      <cite>This is James Ravenscroft and I approve this message.</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section> {/* Testimonials Section End*/}
      </React.Fragment>
    );
  }
}