import React, { Component } from 'react';
import Pagination from "react-js-pagination";

class Propertycontent extends Component {
  render() {
    return (
      <div className="properties-content">
        <article className="hentry">
          <div className="property-featured">
            <span className="featured"><i className="fa fa-star"></i></span>
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-label">Hot</span>
            <span className="property-category"><a href="#">Single Family Home</a></span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="Visalia, NJ 93277">Visalia, NJ 93277</a>
            </h2>
            <div className="property-excerpt">
              <p>This 4 bedroom home sits on an oversized lot at the end of a cul-de-sac...</p>
              <p className="property-fullwidth-excerpt">This 4 bedroom home sits on an oversized lot at the end of a cul-de-sac in an established neighborhood. It is in need of work...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>1913 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>2</span>
                </div>
                <div className="bedrooms">
                  <span>4</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span>
                    <span className="amount">&#36;154,500</span>
                  </span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;154,500</span> </span>
                </div>
                <div className="size"><span>1913 sqft</span></div>
                <div className="bathrooms"><span>2</span></div>
                <div className="bedrooms"><span>4</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-label">Hot</span>
            <span className="property-category"><a href="#">Apartment</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="The Helux">The Helux</a>
            </h2>
            <div className="property-excerpt">
              <p>Located on 43rd Street between 10th and 11th Avenue in the hot Midtown West neighborhood...</p>
              <p className="property-fullwidth-excerpt">Located on 43rd Street between 10th and 11th Avenue in the hot Midtown West neighborhood of Hell?s Kitchen is The Helux. These no-fee apartments feature...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>762 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>3</span>
                </div>
                <div className="bedrooms">
                  <span>3</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span>
                    <span className="amount">&#36;3,515</span>
                  </span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;3,515</span> /month</span>
                </div>
                <div className="size"><span>762 sqft</span></div>
                <div className="bathrooms"><span>3</span></div>
                <div className="bedrooms"><span>4</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-category"><a href="#">Single Family Home</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="Single Family Residential, NJ">Single Family Residential, NJ</a>
            </h2>
            <div className="property-excerpt">
              <p>classic 60's ranch living. House has hardwood floors and hard coat plaster walls and ceilings...</p>
              <p className="property-fullwidth-excerpt">classic 60's ranch living. House has hardwood floors and hard coat plaster walls and ceilings in good condition. Intimate backyard for private gatherings. Full basement...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>1118 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>2</span>
                </div>
                <div className="bedrooms">
                  <span>3</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span>
                    <span className="amount">&#36;299,000</span>
                  </span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;299,000</span> </span>
                </div>
                <div className="size"><span>1118 sqft</span></div>
                <div className="bathrooms"><span>2</span></div>
                <div className="bedrooms"><span>3</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <span className="featured"><i className="fa fa-star"></i></span>
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-label sold">Sold</span>
            <span className="property-category"><a href="#">Apartment</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="Peter Cooper Village">Peter Cooper Village</a>
            </h2>
            <div className="property-excerpt">
              <p>Peter Cooper Village/ Stuyvesant Town provides an unbeatable combination of city energy and community tranquility,...</p>
              <p className="property-fullwidth-excerpt">Peter Cooper Village/ Stuyvesant Town provides an unbeatable combination of city energy and community tranquility, providing insulation from the city that surrounds it, yet situated...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>1304 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>2</span>
                </div>
                <div className="bedrooms">
                  <span>3</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span>
                    <span className="amount">&#36;5,109</span>
                  </span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;5,109</span> /month</span>
                </div>
                <div className="size"><span>1304 sqft</span></div>
                <div className="bathrooms"><span>2</span></div>
                <div className="bedrooms"><span>3</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <span className="featured"><i className="fa fa-star"></i></span>
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-category"><a href="#">Condo</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="Ocala, FL34481">Ocala, FL34481</a>
            </h2>
            <div className="property-excerpt">
              <p>Wonderful expanded end-unit Augusta featuring 2 bedrooms in split-bedroom plan, study/den/library off of cathedral-ceilinged HUGE...</p>
              <p className="property-fullwidth-excerpt">Wonderful expanded end-unit Augusta featuring 2 bedrooms in split-bedroom plan, study/den/library off of cathedral-ceilinged HUGE living room, large dining area off of U-shaped updated kitchen,...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>1,856 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>2</span>
                </div>
                <div className="bedrooms">
                  <span>2</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span>
                    <span className="amount">&#36;95,000</span>
                  </span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;95,000</span> </span>
                </div>
                <div className="size"><span>1,856 sqft</span></div>
                <div className="bathrooms"><span>2</span></div>
                <div className="bedrooms"><span>2</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-label">Hot</span>
            <span className="property-category"><a href="#">Single Family Home</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="Oakland, NJ94605">Oakland, NJ94605</a>
            </h2>
            <div className="property-excerpt">
              <p>When the sellers bought this home in 2001 they delighted in the big things: the...</p>
              <p className="property-fullwidth-excerpt">When the sellers bought this home in 2001 they delighted in the big things: the first level “great room”, lower level “family room”, wide Bay ...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>2,568 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>2</span>
                </div>
                <div className="bedrooms">
                  <span>4</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span>
                    <span className="amount">&#36;335,000</span>
                  </span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;335,000</span> /month</span>
                </div>
                <div className="size"><span>2,568 sqft</span></div>
                <div className="bathrooms"><span>2</span></div>
                <div className="bedrooms"><span>4</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-category"><a href="#">Apartment</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="AVA High Line">AVA High Line</a>
            </h2>
            <div className="property-excerpt">
              <p>Special pricing for immediate move-ins! Call for details! AVA is a first. Our apartments are...</p>
              <p className="property-fullwidth-excerpt">Special pricing for immediate move-ins! Call for details! AVA is a first. Our apartments are energized by New York City, personalized by you. Yep. Take...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>1752 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>2</span>
                </div>
                <div className="bedrooms">
                  <span>2</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span><span className="amount">&#36;3,410</span> /month</span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;3,410</span> /month</span>
                </div>
                <div className="size"><span> 1752 sqft</span></div>
                <div className="bathrooms"><span>2</span></div>
                <div className="bedrooms"><span>2</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-category"><a href="#">Apartment</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="Aire">Aire</a>
            </h2>
            <div className="property-excerpt">
              <p>Situated in the highly sought-after neighborhood surrounding Lincoln Center, AIRE offers breathtaking vistas of the...</p>
              <p className="property-fullwidth-excerpt">Situated in the highly sought-after neighborhood surrounding Lincoln Center, AIRE offers breathtaking vistas of the city skyline, Central Park and the Hudson River. Apartment features...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>531 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>3</span>
                </div>
                <div className="bedrooms">
                  <span>5</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span><span className="amount">&#36;4,200</span> /month</span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;4,200</span> /month</span>
                </div>
                <div className="size"><span>531 sqft</span></div>
                <div className="bathrooms"><span>3</span></div>
                <div className="bedrooms"><span>5</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <span className="featured"><i className="fa fa-star"></i></span>
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-category"><a href="#">Condo</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="635 Staley Ave, Hayward, NJ">635 Staley Ave, Hayward, NJ</a>
            </h2>
            <div className="property-excerpt">
              <p>Corner unit! Gorgeous 3 BD / 3 BA townhome in a beautiful community. Pride of...</p>
              <p className="property-fullwidth-excerpt">Corner unit! Gorgeous 3 BD / 3 BA townhome in a beautiful community. Pride of ownership abounds with this 3 story home with tons of...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>1516 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>3</span>
                </div>
                <div className="bedrooms">
                  <span>3</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span><span className="amount">&#36;449,999</span> /month</span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;449,999</span> </span>
                </div>
                <div className="size"><span>1516 sqft</span></div>
                <div className="bathrooms"><span>3</span></div>
                <div className="bedrooms"><span>3</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-category"><a href="#">Condo</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="225 E 36th St #20D">225 E 36th St #20D</a>
            </h2>
            <div className="property-excerpt">
              <p>Turn Key sleep alcove studio in triple mint condition. Located on high floor with great...</p>
              <p className="property-fullwidth-excerpt">Turn Key sleep alcove studio in triple mint condition. Located on high floor with great unobstructed Southern Expo. This is the perfect home for the...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>1516 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>3</span>
                </div>
                <div className="bedrooms">
                  <span>3</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span><span className="amount">&#36;449,999</span> /month</span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;389,000</span> </span>
                </div>
                <div className="size"><span>550 sqft</span></div>
                <div className="bathrooms"><span>1</span></div>
                <div className="bedrooms"><span>2</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>

        <article className="hentry">
          <div className="property-featured">
            <span className="featured"><i className="fa fa-star"></i></span>
            <a className="content-thumb" href="property-details.html">
              <img src="images/property/property1.jpg" alt="" />
            </a>
            <span className="property-label">Hot</span>
            <span className="property-category"><a href="#">Co-op</a>
            </span>
          </div>
          <div className="property-wrap">
            <h2 className="property-title">
              <a href="property-details.html" title="101 W 115th St #2B">101 W 115th St #2B</a>
            </h2>
            <div className="property-excerpt">
              <p>This beautiful pre-war Co-op building situated in the heart of Harlem is 4 blocks from...</p>
              <p className="property-fullwidth-excerpt">This beautiful pre-war Co-op building situated in the heart of Harlem is 4 blocks from Central Park and around the corner from the express 2/3...</p>
            </div>
            <div className="property-summary">
              <div className="property-detail">
                <div className="size">
                  <span>1516 sqft</span>
                </div>
                <div className="bathrooms">
                  <span>3</span>
                </div>
                <div className="bedrooms">
                  <span>3</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">
                  <span><span className="amount">&#36;449,999</span> /month</span>
                </div>
                <div className="property-action">
                  <a href="property-details.html">More Details</a>
                </div>
              </div>
              <div className="property-info property-fullwidth-info">
                <div className="property-price">
                  <span><span className="amount">&#36;439,000</span> </span>
                </div>
                <div className="size"><span>536 sqft</span></div>
                <div className="bathrooms"><span>2</span></div>
                <div className="bedrooms"><span>4</span></div>
              </div>
            </div>
          </div>
          <div className="property-action property-fullwidth-action">
            <a href="property-details.html">More Details</a>
          </div>
        </article>
        <div className="clearfix"></div>

        <div>
          <Pagination
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
          />
        </div>
        
      </div>
    );
  };
};

export default Propertycontent;