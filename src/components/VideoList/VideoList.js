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
            // console.log(response.data);
            const videoList = response.data;

            this.setState({
                videoList: videoList,
            })
        })
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