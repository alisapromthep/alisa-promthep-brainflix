
import './App.scss';
import Header from './components/Header/Header';
import VideoSection from './components/VideoSection/VideoSection';
import VideoFeed from './components/VideoFeed/VideoFeed';
import videoInfo from './data/videos.json';
import videoDetail from './data/video-details.json';
import React, { Component } from 'react';

class App extends Component {

  state = {
    videos: videoInfo,
    selectedVideo: videoDetail[0],
  };


  render() {
    console.log(this.state.videos)
    console.log(this.state.selectedVideo)

    return (
      <>
      <Header />
      <main>
        <VideoSection selectVideo={this.state.selectedVideo}/>
        <VideoFeed videoInfo={this.state.videos}/>
      </main>
      </>
    );
  }
}

export default App;
