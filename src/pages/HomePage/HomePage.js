import React, { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';
import axios from 'axios';
// import videoInfo from '../..//data/videos.json';
// import videoDetail from '../../data/video-details.json';


export const API_KEY = '?api_key=10cbdeeb-a108-46a6-822b-6a208b9efaee';
export const API_URL = 'https://project-2-api.herokuapp.com';
const firstVideoId = `1af0jruup5gu`;

class HomePage extends Component {

  state = {
    selectedVideo: null,
  };

  componentDidMount(){

    axios
      .get(`${API_URL}/videos/${firstVideoId}${API_KEY}`)
      .then((response)=>{
        console.log(response.data[0])

        // this.setState({
        //   selectedVideo: 
        // })
      })

  }

    render() {

        return (
            <main>
                <VideoPlayer 
                />
                <div className='container'>
                {/* <div className='container__aboutvideo'>
                    <VideoDescription selectVideo={this.state.selectedVideo}/>
                    <CommentSection selectComment={this.state.selectedVideo.comments} />
                </div> */}
                <VideoList 
                videoInfo={this.state.videos}
                handleVideoSelect={this.handleVideoSelect}
                />
                </div> 
            </main>
        );
    }
}

export default HomePage;