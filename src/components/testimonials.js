import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      adaptiveHeight: true,
    };
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
              <Slider {...settings} className="react-slick-slider">
                <div>
                  <blockquote>
                    <p>
                      James is an energetic and tenacious colleague. I've had the opportunity to collaborate on two apps with James, and he always had his nose to the grindstone, ever eager to find solutions for a quality product.
                    </p>
                    <cite>-Ryan Scott, Ryan Scott Studios</cite>
                  </blockquote>
                </div>
                <div>
                  <blockquote>
                    <p>
                      Working with James was a great experience.
<br></br>
                      He delivered a clean, professional website that matched my vision exactly.

                      Communication was clear and consistent.

                      Deadlines were met without delays.

                      Any feedback I gave was quickly applied.

                      The final result looks great on both desktop and mobile.
<br></br>
                      If you want someone reliable who knows what they are doing, I highly recommend James.
                    </p>
                    <cite>John Chong - Freelance Dojo.</cite>
                  </blockquote>
                </div>
              </Slider>
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section> {/* Testimonials Section End*/}
      </React.Fragment>
    );
  }
}