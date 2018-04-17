import React, {Component} from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {

rendWeather(res) {
  return (
    <span>
    {res.userId}
    </span>
  );
}

  render() {
    return (
         <div>{this.props.weather.map(this.rendWeather)}</div>
    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
