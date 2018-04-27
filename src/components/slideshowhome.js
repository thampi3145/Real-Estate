import React, { Component } from 'react';
import Navigation from './navigation';
import Searchbox from './searchbox';
import Recentprop from './recent-prop';
import Featuredprop from './featured-prop';
import Ourservices from './ourservices';
import Recentagents from './recent-agents';
import Calltoaction from './call-to-action';
import Testimonial from './testimonial';
import Ourpartners from './our-partners';
import Slider from "react-slick-carousel";

class Slideshowhome extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="noo-wrapper">
        <section id="slideshow-home" className="wrap noo-slideshow slideshow-home">
          <div className="property-slider">
            <div id="noo-slider-1" className="noo-slider noo-property-slide-wrap">
            <div className="caroufredsel_wrapper">
              <ul className="sliders">
          
              <Slider>
                <div className="slide-item noo-property-slide">
                    <img src="images/slideshow/bg-slide1.jpg" className="attachment-property-slider" alt="" />
                    <div className="slide-caption">
                      <div className="slide-caption-info">
                        <h3><a href="property-details.html">Fresno, CA93722</a>
                          <small>6001 W Alluvial Ave</small>
                        </h3>
                        <div className="info-summary">
                          <div className="size">
                            <span>2400 sqft</span>
                          </div>
                          <div className="bathrooms">
                            <span>3</span>
                          </div>
                          <div className="bedrooms">
                            <span>4</span>
                          </div>
                          <div className="property-price">
                            <span>
                              <span className="amount">&#36;309,000</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-caption-action"><a href="property-details.html">More Details</a>
                      </div>
                    </div>
                  </div>

                  <div className="slide-item noo-property-slide">
                    <img src="images/slideshow/bg-slide1.jpg" className="attachment-property-slider" alt="" />
                    <div className="slide-caption">
                      <div className="slide-caption-info">
                        <h3><a href="property-details.html">Oakland, NJ94605</a>
                          <small>8727 Thermal St</small>
                        </h3>
                        <div className="info-summary">
                          <div className="size">
                            <span>2,568 sqft</span>
                          </div>
                          <div className="bathrooms">
                            <span>2</span>
                          </div>
                          <div className="bedrooms">
                            <span>4</span>
                          </div>
                          <div className="property-price">
                            <span>
                              <span className="amount">&#36;335,000</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-caption-action"><a href="property-details.html">More Details</a>
                      </div>
                    </div>
                  </div>

                  <div className="slide-item noo-property-slide">
                    <img src="images/slideshow/bg-slide1.jpg" className="attachment-property-slider" alt="" />
                    <div className="slide-caption">
                      <div className="slide-caption-info">
                        <h3><a href="property-details.html">Visalia, NJ 93277</a>
                          <small>3211 S Parkwood Ct</small>
                        </h3>
                        <div className="info-summary">
                          <div className="size">
                            <span>1913 sqft</span>
                          </div>
                          <div className="bathrooms">
                            <span>2</span>
                          </div>
                          <div className="bedrooms">
                            <span>4</span>
                          </div>
                          <div className="property-price">
                            <span>
                              <span className="amount">&#36;154,500</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="slide-caption-action"><a href="property-details.html">More Details</a>
                      </div>
                    </div>
                  </div> 
                </Slider>
              </ul>
              </div> 
            </div>
          </div>
        </section>
        <Searchbox />
        <Recentprop />
        <Featuredprop />
        <Ourservices />
        <Recentagents />
        <Calltoaction />
        <Testimonial />
        <Ourpartners />
      </div> 
    );
  };
};

export default Slideshowhome;
