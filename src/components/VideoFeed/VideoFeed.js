import './VideoFeed.scss';
import VideoCard from '../VideoCard/VideoCard';


function VideoFeed (props) {

    return (
        <section>
            {props.videoInfo.map((video)=>(
                <VideoCard key ={video.id}
                videoDetail={video}/>
            ))}
        </section>
    )
}

export default VideoFeed; 