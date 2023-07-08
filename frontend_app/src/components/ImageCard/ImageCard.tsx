import React, { Component } from 'react';
import HelloWorld from '../HelloWorld';
import '../ImageCard/ImageCard.css';


class ImageCard extends Component {
  render() {
    return (
      <div className="big-card">
        <h2>Big Page</h2>
        <HelloWorld />
        {/* Add images or other content */}
      </div>
    );
  }
}

export default ImageCard;
