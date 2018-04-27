import React, { Component } from 'react';
import Slider from "react-slick-carousel";

class Recentagents extends Component {
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
            <section id="recent-agents-slider" className="wrap recent-agents recent-agents-slider">
                <div className="container">
                    <div className="recent-agents-inner">
                        <div className="recent-agents-title">
                        <h3>MEET OUR AGENTS</h3>
                        </div>
                        <div className="recent-agents-content">
                        <div className="caroufredsel-wrap row">
                            <ul>
                            <Slider ref={node => this.slider = node}>
                            <div>
                            <li className="col-md-4 col-sm-6">
                                <article className="hentry has-featured">
                                <div className="agent-featured">
                                    <a className="content-thumb" href="agents-detail.html">
                                    <img src="images/agent/agent1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="agent-wrap">
                                    <h2 className="agent-title"><a href="agents-detail.html" title="Adam Scooter">Adam Scooter</a></h2>
                                    <div className="agent-excerpt">
                                    <p>When people are looking for a real estate professional to consult, studies show they care most about loyalty and accountability....</p>
                                    </div>
                                    <div className="agent-social-wrap">
                                    <div className="social-list agent-social">
                                        <a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                                        <a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                                        <a href="#" title="Google +" target="_blank"><i className="fa fa-google-plus"></i></a>
                                        <a href="#" title="Linkedin" target="_blank"><i className="fa fa-linkedin"></i></a>
                                        <a href="#" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
                                </div>
                                </article>
                            </li>

                            <li className="col-md-4 col-sm-6">
                                <article className="hentry has-featured">
                                <div className="agent-featured">
                                    <a className="content-thumb" href="agents-detail.html">
                                    <img src="images/agent/agent1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="agent-wrap">
                                    <h2 className="agent-title"><a href="agents-detail.html" title="Thomas Adam Clayton">Thomas Adam Clayton</a></h2>
                                    <div className="agent-excerpt">
                                    <p>Recognized as the top selling broker in Lower Manhattan and among the best in New York City, Thomas Adam Clayton...</p>
                                    </div>
                                    <div className="agent-social-wrap">
                                    <div className="social-list agent-social">
                                        <a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                                        <a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                                        <a href="#" title="Google +" target="_blank"><i className="fa fa-google-plus"></i></a>
                                        <a href="#" title="Linkedin" target="_blank"><i className="fa fa-linkedin"></i></a>
                                        <a href="#" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
                                </div>
                                </article>
                            </li>

                            <li className="col-md-4 col-sm-6">
                                <article className="hentry has-featured">
                                <div className="agent-featured">
                                    <a className="content-thumb" href="agents-detail.html">
                                    <img src="images/agent/agent1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="agent-wrap">
                                    <h2 className="agent-title"><a href="agents-detail.html" title="Stacy Barron">Stacy Barron</a></h2>
                                    <div className="agent-excerpt">
                                    <p>Stacy is a long time resident and successful broker in the Lincoln Center area. Never far from home, sheis intimately acquainted...</p>
                                    </div>
                                    <div className="agent-social-wrap">
                                    <div className="social-list agent-social">
                                        <a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                                        <a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                                        <a href="#" title="Google +" target="_blank"><i className="fa fa-google-plus"></i></a>
                                        <a href="#" title="Linkedin" target="_blank"><i className="fa fa-linkedin"></i></a>
                                        <a href="#" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
                                </div>
                                </article>
                            </li>
                            </div>

                            <div>
                            <li className="col-md-4 col-sm-6">
                                <article className="hentry has-featured">
                                <div className="agent-featured">
                                    <a className="content-thumb" href="agents-detail.html">
                                    <img src="images/agent/agent1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="agent-wrap">
                                    <h2 className="agent-title"><a href="agents-detail.html" title="Michael Feng">Michael Feng</a></h2>
                                    <div className="agent-excerpt">
                                    <p>Michael Feng is a real estate agent, but his true goal is to be a resource for his clients. Since 2006,...</p>
                                    </div>
                                    <div className="agent-social-wrap">
                                    <div className="social-list agent-social">
                                        <a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                                        <a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                                        <a href="#" title="Google +" target="_blank"><i className="fa fa-google-plus"></i></a>
                                        <a href="#" title="Linkedin" target="_blank"><i className="fa fa-linkedin"></i></a>
                                        <a href="#" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
                                </div>
                                </article>
                            </li>

                            <li className="col-md-4 col-sm-6">
                                <article className="hentry has-featured">
                                <div className="agent-featured">
                                    <a className="content-thumb" href="agents-detail.html">
                                    <img src="images/agent/agent1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="agent-wrap">
                                    <h2 className="agent-title"><a href="agents-detail.html" title="John Doe">John Doe</a></h2>
                                    <div className="agent-excerpt">
                                    <p>John Doe, the founding partner of Elegran, started the company in 2007 in a unique way. He did this without...</p>
                                    </div>
                                    <div className="agent-social-wrap">
                                    <div className="social-list agent-social">
                                        <a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                                        <a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                                        <a href="#" title="Google +" target="_blank"><i className="fa fa-google-plus"></i></a>
                                        <a href="#" title="Linkedin" target="_blank"><i className="fa fa-linkedin"></i></a>
                                        <a href="#" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
                                </div>
                                </article>
                            </li>
                            </div>
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

export default Recentagents;