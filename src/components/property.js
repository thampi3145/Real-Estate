import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchweather } from '../actions/index';
import Header from './header';
import Footer from './footer';
import Propertymain from './property-main';
import Sidebar from './sidebar';

class Property extends Component {
//    componentWillMount() {
//        this.props.fetchweather(1);
//    }
    render() {
        console.log("qqq1123",this.props.post.all);
        return (
            <div className="page-right-sidebar">
                <Header />
                <div className="noo-wrapper">
                    <div className="container noo-mainbody">
                        <div className="noo-mainbody-inner">
                            <div className="row clearfix">
                                <Propertymain />
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            );
        };
    };

    function mapStateToProps(state) {
    return {
        post:state.post
    };
}

export default connect(mapStateToProps,{fetchweather})(Property);


