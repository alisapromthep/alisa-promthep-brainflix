import './VideoPlayer.scss';
import VideoDescription from '../VideoDescription/VideoDescription';
import videoDetail from '../../data/video-details.json';



function VideoPlayer() {

    return (
        <section className='videoplayer'>
            <video className='videoplayer__video' controls poster={videoDetail[0].image}>
                <source src={videoDetail[0].video} type="video"/>
            </video>
            <h1 className='videoplayer__title'>{videoDetail[0].title}</h1>
            <VideoDescription />
        </section>
    )
}

export default VideoPlayer;