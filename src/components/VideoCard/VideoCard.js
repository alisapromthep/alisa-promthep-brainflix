import './VideoCard.scss';
import videoDetail from '../../data/video-details.json';

function VideoCard() {
    return (
        <article className='card'>
            <video className='card__thumbnail' poster={videoDetail[1].image}></video>
            <div className='card__detail-container'>
                <p className='card__title'>
                    {videoDetail[1].title}
                </p>
                <p className='card__channel'>
                {videoDetail[1].channel}
                </p>
            </div>
        </article>
    )
}

export default VideoCard;