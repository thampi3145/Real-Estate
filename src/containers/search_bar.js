import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchweather} from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term:''};
    this.onChangeState = this.onChangeState.bind(this);
    this.onHandler = this.onHandler.bind(this);
  }

  onChangeState(event) {
    console.log(event.target.value);
    this.setState({term:event.target.value});
  }
  onHandler(event) {
    event.preventDefault();

    this.props.fetchweather(this.state.term);
    console.log("dwfegfeg");
  }
  render() {
    return (
      <form onSubmit={this.onHandler} className="input-group">
      <input
      placeholder="get value"
      className="form-control"
      value = {this.state.term}
      onChange = {this.onChangeState}
       />
      <span>
      <button type='submit' className='btn btn-secondary'>Submit </button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchweather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
