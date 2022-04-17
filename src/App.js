
import './App.scss';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDescription from './components/VideoDescription/VideoDescription';
import CommentSection from './components/CommentSection/CommentSection';
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
        <VideoPlayer 
        image={this.state.selectedVideo.image}
        video={this.state.selectedVideo.video}/>
        <VideoDescription selectVideo={this.state.selectedVideo}/>
        <CommentSection selectComment={this.state.selectedVideo.comments} />
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
