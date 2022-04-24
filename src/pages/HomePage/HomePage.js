import './HomePage.scss'
import React, { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentSection from '../../components/CommentSection/CommentSection';
import VideoList from '../../components/VideoList/VideoList';
import axios from 'axios';


const API_KEY = '?api_key=10cbdeeb-a108-46a6-822b-6a208b9efaee';
const API_URL = 'https://project-2-api.herokuapp.com';

class HomePage extends Component {

  state = {
    videoList: null,
    selectedVideo: null,
  };

  //function fetching movie from the api using movieId 

  getMovieDetails = (movieId) => {
    axios
      .get(`${API_URL}/videos/${movieId}${API_KEY}`)
      .then((response)=>{
        this.setState({ selectedVideo: response.data})
      })
    
  }


  componentDidMount(){

    axios
      .get(`${API_URL}/videos${API_KEY}`)
      .then((response)=>{
        const videoList = response.data;
        //get video information array, then set state 

        this.setState({
          videoList: videoList,
        })

        //return the first video in the array
        //so that the homepage is always showing the first video when arrive/come back to homepage 

        return videoList[0].id;
      })
      //chaining promise, .then take the return value from previous axios request 
      //nameing the videoList[0].id = firstVideoId to use in the next request 
      .then ((firstVideoId)=>{
        //calling function to make axios request, passing in the Video Id as parameter. 
        //function also set state for selected videoDetails 
        this.getMovieDetails(firstVideoId)
      })
  }

  componentDidUpdate(prevProps) {
    const selectedVideoId = this.props.match.params.videoId;
    const firstVideoId = this.state.videoList[0].id;

    //check that the selected vido Id has changed 
    if (selectedVideoId !== prevProps.match.params.videoId) {

      //if undefined, go back to first Video 
      selectedVideoId == undefined ? 
      this.getMovieDetails(firstVideoId) : this.getMovieDetails(selectedVideoId)
    }
  }

    render() {

      if (!this.state.selectedVideo) {
        return (
          <p>Loading Please Wait</p>
        )
      }

      if (!this.state.videoList) {
        return (
          <p>Loading Please Wait </p>
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
                <VideoList 
                videoArray={this.state.videoList}
                selectedVideoId={this.state.selectedVideo.id}
                />
                
                </div> 
            </main>
        );
    }
}

export default HomePage;