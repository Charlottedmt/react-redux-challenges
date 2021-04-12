import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "BzyTuYCmvSORqs1ABM"
    }
    this.search('cat');
  }

  changeSelectedGif = (newGifId) => {
    this.setState({
      selectedGifId: newGifId
    });
  }
  search = (query) => {
    giphy('qfbO46FFTrM4M4Gou0QtA43COEo9ZGYM').search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }
    render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;


