// TODO: update dependencies if needed
import React, { Component } from 'react';

// TODO: transform the following functional component into a class based component
// TODO: set the initial state { clicked: false }
// TODO: listen to the click event on `.article`
// TODO: code the `handleClick` function (which adds a 'clicked' class to the `.article`)

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false }; // defines initial state
  }

  classNames() {
    let classes = 'article';
    if(this.state.clicked) {
      classes += ' clicked'
    }
    return classes
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <div className= {this.classNames()} onClick={this.handleClick}>
        <h2 className="article-title">{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  };
}


export default Article;
