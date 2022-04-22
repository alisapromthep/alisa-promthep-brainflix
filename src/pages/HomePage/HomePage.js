import React, { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';
import axios from 'axios';



export const API_KEY = '?api_key=10cbdeeb-a108-46a6-822b-6a208b9efaee';
export const API_URL = 'https://project-2-api.herokuapp.com';

class HomePage extends Component {

  state = {
    selectedVideo: null,
  };

  componentDidMount(){
    const firstVideoId = `84e96018-4022-434e-80bf-000ce4cd12b8`;

    axios
    .get(`${API_URL}/videos/${firstVideoId}${API_KEY}`)
    .then((response)=>{
      console.log(response.data)

      this.setState({
        selectedVideo: response.data,
      })
    })
  }

  componentDidUpdate() {
    const selectedVideoId = this.props.match.params.videoId;

    axios
      .get(`${API_URL}/videos/${selectedVideoId}${API_KEY}`)
      .then((response)=>{
        console.log(response.data)

        this.setState({
          selectedVideo: response.data,
        })
      })

  }

    render() {

      if (!this.state.selectedVideo) {
        return (
          <p>Loading Please Wait</p>
        )
      }

        return (
            <main>
                <VideoPlayer 
                image={this.state.selectedVideo.image}
                video={this.state.selectedVideo.video}
                />
                <div className='container'>
                <div className='container__aboutvideo'>
                    <VideoDescription selectVideo={this.state.selectedVideo}/>
                    <CommentSection selectComment={this.state.selectedVideo.comments} />
                </div>
                <VideoList />
                </div> 
            </main>
        );
    }
}

export default HomePage;