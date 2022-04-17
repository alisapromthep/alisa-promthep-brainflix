import './VideoList.scss';
import VideoCard from '../VideoCard/VideoCard';


function VideoList ({videoInfo, handleVideoSelect})
{

    return (
        <section className='videolist__container'>
            {videoInfo.map((video)=>(
                <VideoCard key ={video.id}
                videoDetail={video}
                onVideoSelect={handleVideoSelect}/>
            ))}
        </section>
    )
}

export default VideoList; 