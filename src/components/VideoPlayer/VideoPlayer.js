import './VideoPlayer.scss';
import videoDetail from '../../data/video-details.json';


function VideoPlayer() {


    return (
        <>
        <video poster="{videoDetail[0].image}">
            <source src="{videoDetail[0].video}" type="video"/>
        </video>
        <div>
            <p>{videoDetail[0].title}</p>
            

            <p>hello world</p>
        </div>

        </>
    )
}

export default VideoPlayer;