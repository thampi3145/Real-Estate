import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchweather } from '../actions/index';

class Property extends Component {
    
//    componentWillMount() {
//        this.props.fetchweather(1);
//    }
    render() {
        console.log("qqq1123",this.props.post.all);
        return (
                <div>dfdfdfg</div>
                );
    };
};

function mapStateToProps(state) {
    return {
        post:state.post
    };
    
}

export default connect(mapStateToProps,{fetchweather})(Property);


