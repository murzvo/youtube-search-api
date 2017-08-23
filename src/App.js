import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initData } from './actionCreators';

import VideosList from './VideosList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  state = { search: '' }

  componentDidMount() {
    this.props.initData();
  }

  onSearchChange(e) {
    this.setState({ search: e.target.value });
  }

  sortedVideos() {
   if (!this.props.videos) return;
   const search = this.state.search.toLowerCase();
   return this.props.videos.filter(function(video) { return video.title.toLowerCase().indexOf(search) !== -1 })
 }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input type="text" className="Search-input" onChange={this.onSearchChange} />
        </div>
        <div className="App-intro">
          <VideosList videos={this.sortedVideos()} />
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
