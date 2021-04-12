import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  handleClick = (event) => {
    this.props.changeSelectedGif(event.target.id);
  }
  renderList = () => {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} />
    });
  }

  render() {
      return (
        <div className="gif-list" onClick={this.handleClick}>
            {this.renderList()}
        </div>
      );
  }
}

export default GifList;
