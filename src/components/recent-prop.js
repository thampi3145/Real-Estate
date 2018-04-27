import React, { Component } from 'react';
import Slider from "react-slick-carousel";

class Recentprop extends Component {
  constructor(props) { 
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  previous() {
    this.slider.slickPrev();
  }
  next() {
    this.slider.slickNext();
  }
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <section id="recent-properties-slider" className="wrap recent-properties recent-properties-slider">
        <div className="container">
          <div className="recent-properties-inner">
            <div className="section-title">
              <h3>Recent Properties</h3>
            </div>
            <div className="recent-properties-content">
              <div className="caroufredsel-wrap">
                <ul>
                <Slider ref={node => this.slider = node}>
                  <li>
                    <div className="property-row">
                      <article className="hentry has-featured">
                        <div className="property-featured">
                          <a className="content-thumb" href="property-details.html">
                            <img src="images/property/property1.jpg" className="attachment-property-thumb" alt="" />
                          </a>
                          <span className="property-category">
                            <a href="type-single-family-home.html">Single Family Home</a>
                          </span>
                          <div className="property-detail">
                            <div className="size"><span>1913 sqft</span>
                            </div>
                            <div className="bathrooms"><span>2</span>
                            </div>
                            <div className="bedrooms"><span>4</span>
                            </div>
                          </div>
                        </div>
                        <div className="property-wrap">
                          <h2 className="property-title"><a href="property-details.html" title="Visalia, NJ 93277">Visalia, NJ 93277</a></h2>
                          <div className="property-excerpt">
                            <p>This 4 bedroom home sits on an oversized lot at the end of a cul-de-sac...</p>
                          </div>
                        </div>
                        <div className="property-summary">
                          <div className="property-info">
                            <div className="property-price">
                              <span><span className="amount">&#36;154,500</span></span>
                            </div>
                            <div className="property-action">
                              <a href="property-details.html">More Details</a>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="hentry has-featured">
                        <div className="property-featured">
                          <a className="content-thumb" href="property-details.html">
                            <img src="images/property/property1.jpg" className="attachment-property-thumb" alt="" />
                          </a>
                          <span className="property-category"><a href="type-single-family-home.html">Single Family Home</a></span>
                          <div className="property-detail">
                            <div className="size"><span>1118 sqft</span>
                            </div>
                            <div className="bathrooms"><span>2</span>
                            </div>
                            <div className="bedrooms"><span>3</span>
                            </div>
                          </div>
                        </div>
                        <div className="property-wrap">
                          <h2 className="property-title"><a href="property-details.html" title="Single Family Residential, NJ">Single Family Residential, NJ</a></h2>
                          <div className="property-excerpt">
                            <p>Classic 60's ranch living. House has hardwood floors and hard coat plaster walls and ceilings...</p>
                          </div>
                        </div>
                        <div className="property-summary">
                          <div className="property-info">
                            <div className="property-price">
                              <span><span className="amount">&#36;299,000</span></span>
                            </div>
                            <div className="property-action">
                              <a href="property-details.html">More Details</a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="property-row">
                      <article className="hentry has-featured">
                        <div className="property-featured">
                          <a className="content-thumb" href="property-details.html">
                            <img src="images/property/property1.jpg" className="attachment-property-thumb" alt="" /> </a>
                          <span className="property-category"><a href="type-apartment.html">Apartment</a></span>
                          <div className="property-detail">
                            <div className="size"><span>1304 sqft</span>
                            </div>
                            <div className="bathrooms"><span>2</span>
                            </div>
                            <div className="bedrooms"><span>3</span>
                            </div>
                          </div>
                        </div>
                        <div className="property-wrap">
                          <h2 className="property-title"><a href="property-details.html" title="Peter Cooper Village">Peter Cooper Village</a></h2>
                          <div className="property-excerpt">
                            <p>Peter Cooper Village/ Stuyvesant Town provides an unbeatable combination of city energy and community tranquility,...</p>
                          </div>
                        </div>
                        <div className="property-summary">
                          <div className="property-info">
                            <div className="property-price">
                              <span><span className="amount">&#36;5,109</span></span>
                            </div>
                            <div className="property-action">
                              <a href="property-details.html">More Details</a>
                            </div>
                          </div>
                        </div>
                      </article>

                      <article className="hentry has-featured">
                        <div className="property-featured">
                          <a className="content-thumb" href="property-details.html">
                            <img src="images/property/property1.jpg" className="attachment-property-thumb" alt="" /> </a>
                          <span className="property-category"><a href="type-condo.html">Condo</a></span>
                          <div className="property-detail">
                            <div className="size"><span>1,856 sqft</span>
                            </div>
                            <div className="bathrooms"><span>2</span>
                            </div>
                            <div className="bedrooms"><span>2</span>
                            </div>
                          </div>
                        </div>
                        <div className="property-wrap">
                          <h2 className="property-title"><a href="property-details.html" title="Ocala, FL34481">Ocala, FL34481</a></h2>
                          <div className="property-excerpt">
                            <p>Wonderful expanded end-unit Augusta featuring 2 bedrooms in split-bedroom plan, study/den/library off of cathedral-ceilinged HUGE...</p>
                          </div>
                        </div>
                        <div className="property-summary">
                          <div className="property-info">
                            <div className="property-price">
                              <span><span className="amount">&#36;95,000</span></span>
                            </div>
                            <div className="property-action">
                              <a href="property-details.html">More Details</a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </li>
                </Slider>
                </ul>
              </div>
              <a className="caroufredsel-prev" onClick={ this.previous }></a>
              <a className="caroufredsel-next" onClick={ this.next }></a>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default Recentprop;
