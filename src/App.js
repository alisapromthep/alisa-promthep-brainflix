
import './App.scss';
import Header from './components/Header/Header';
import VideoSection from './components/VideoSection/VideoSection';
import VideoList from './components/VideoList/VideoList';
import videoInfo from './data/videos.json';
import videoDetail from './data/video-details.json';
import React, { Component } from 'react';

class App extends Component {

  state = {
    videos: videoInfo,
    selectedVideo: videoDetail[0],
  };

  handleVideoSelect = (id)=>{
    this.setState({
      selectedVideo: videoDetail.find((video)=> { return video.id === id}),
    })
  }
  render() {
    const videoList = this.state.videos.filter((video)=> {return video.id !== this.state.selectedVideo.id});

    return (
      <>
      <Header />
      <main>
        <VideoSection selectVideo={this.state.selectedVideo}/>
        <VideoList 
        videoInfo={videoList}
        handleVideoSelect={this.handleVideoSelect}
        />
      </main>
      </>
    );
  }
}

export default App;
