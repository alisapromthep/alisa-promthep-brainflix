import './VideoPlayer.scss';
import VideoDescription from '../VideoDescription/VideoDescription';
import { convertTimeStamp } from '../../DateTimeFunction';


function VideoPlayer(props) {
    const {channel, comments, description, duration, id, image, likes, timestamp, title, video, views} = props.selectedVideo; 


    return (
        <section className='videoplayer'>
            <div className='videoplayer__container'>
            <video className='videoplayer__video' controls poster={image}>
                <source src={video} type="video"/>
            </video>
            </div>
            <VideoDescription 
            title={title}
            channel={channel}
            timestamp={convertTimeStamp(timestamp)}
            views={views}
            likes={likes}
            description={description}
            />
        </section>
    )
}

export default VideoPlayer;