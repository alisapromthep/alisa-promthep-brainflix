import './VideoList.scss';
import VideoCard from '../VideoCard/VideoCard';
import {Link} from 'react-router-dom';
import {Component} from 'react';
import {API_KEY, API_URL} from '../../pages/HomePage/HomePage';
import axios from 'axios';

class VideoList extends Component {

    state = {
        videoList: []
    };

    componentDidMount(){
        axios
            .get(`${API_URL}/videos${API_KEY}`)
            .then ((response)=>{
            const videoList = response.data;

            this.setState({
                videoList: videoList,
            })
        })
    }

    componentDidUpdate(prevProps){
        const oldVideoId = prevProps.selectVideoId; 
        const newVideoId = this.props.selectVideoId;
        
        if (oldVideoId !== newVideoId){
            
            const filteredList = this.state.videoList.filter((video)=>{
                return video.id !== this.props.selectVideoId
            })
    
            this.setState({
                videoList: filteredList
            })
        }
    }

    render(){

        return (
            <section className='videolist'>
                <h2 className='videolist__title'>next videos</h2>
                {this.state.videoList.map((video)=>(
                    <Link to={`/video/${video.id}`} className='videolist__card' key ={video.id}>
                        <VideoCard 
                        videoDetail={video}/>
                    </Link>
                ))}
            </section>
        )
    }
}




export default VideoList; 