import './VideoFeed.scss';
import VideoCard from '../VideoCard/VideoCard';
import videoArray from '../../data/videos.json';

function VideoFeed () {
    return (
        <section>
            {videoArray.map((video)=>(
                <VideoCard key ={video.id}
                videoDetail={video}/>
            ))}
        </section>
    )
}

export default VideoFeed; 