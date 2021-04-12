import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/200w.gif`
    return (
      <img src={src} alt="" className="gif" id={this.props.id}/>
    );
  }
}

export default Gif;
