import React, { Component } from 'react';
import './App.css';

export default class Video extends Component {
  render() {
    return (
      <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + this.props.match.params.id + "?autoplay=1"}
          frameborder="0"
          allowfullscreen
        />
    );
  }
}
