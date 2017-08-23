import React, { Component } from 'react';

class VideosList extends Component {
  render() {
    if (!this.props.videos) return (<div>No content available</div>);
    return (
      <div className="videos-list">
        {this.props.videos.map(function(video){
          return (<a href={"/videos/" + video.id}>
            <img src={video.img} />
            <p>{video.title}</p>
          </a>)
        })}
      </div>
    );
  }
}

export default VideosList;
