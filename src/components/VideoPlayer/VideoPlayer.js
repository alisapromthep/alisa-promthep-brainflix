import './VideoPlayer.scss';
import VideoDescription from '../VideoDescription/VideoDescription';
import videoDetail from '../../data/video-details.json';



function VideoPlayer(props) {
    const {channel, comments, description, duration, id, image, likes, timestamp, title, video, views} = props.selectedVideo; 

    return (
        <section className='videoplayer'>
            <video className='videoplayer__video' controls poster={image}>
                <source src={video} type="video"/>
            </video>
            <h1 className='videoplayer__title'>{title}</h1>
            <VideoDescription 
            channel={channel}
            timestamp={timestamp}
            views={views}
            likes={likes}
            description={description}
            />
        </section>
    )
}

export default VideoPlayer;