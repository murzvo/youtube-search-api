import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initData } from './actionCreators';

import VideosList from './VideosList';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.initData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input type="text" className="Search-input" />
        </div>
        <div className="App-intro">
          <VideosList videos={this.props.videos} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({
    initData,
  }, dispatch)
)(App);
