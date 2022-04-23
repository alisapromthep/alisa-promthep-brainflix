import './VideoList.scss';
import VideoCard from '../VideoCard/VideoCard';
import {Link} from 'react-router-dom';

function VideoList({videoArray}) {
    console.log(videoArray)

        return (
            <section className='videolist'>
                <h2 className='videolist__title'>next videos</h2>
                {videoArray.map((video)=>(
                    <Link to={`/video/${video.id}`} className='videolist__card' key ={videoArray.id}>
                        <VideoCard 
                        videoDetail={video}/>
                    </Link>
                ))}
            </section>
        )
}





export default VideoList; 