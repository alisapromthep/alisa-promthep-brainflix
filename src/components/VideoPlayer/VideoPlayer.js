import './VideoPlayer.scss';
import videoDetail from '../../data/video-details.json';


function VideoPlayer() {


    return (
        <section className='videoplayer'>
        <video controls width="100%" poster={videoDetail[0].image}>
            <source src={videoDetail[0].video} type="video"/>
        </video>
        <h1 className='videoplayer__title'>{videoDetail[0].title}</h1>
        </section>
    )
}

export default VideoPlayer;