import './VideoCard.scss';
import videoDetail from '../../data/video-details.json';

function VideoCard(props) {
    return (
        <article className='card'>
            <video className='card__thumbnail' poster={props.videoDetail.image}></video>
            <div className='card__detail-container'>
                <p className='card__title'>
                    {props.videoDetail.title}
                </p>
                <p className='card__channel'>
                {props.videoDetail.channel}
                </p>
            </div>
        </article>
    )
}

export default VideoCard;