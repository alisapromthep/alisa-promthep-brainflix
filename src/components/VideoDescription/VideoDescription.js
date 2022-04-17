import './VideoDescription.scss';
import videoDetail from '../../data/video-details.json';
import viewsIcon from '../../assets/images/icons/views.svg';
import likesIcon from '../../assets/images/icons/likes.svg';

function VideoDescription ({title, channel, timestamp, views, likes, description}) {

    return (
        <>
        <section className='channelinfo'>
        <h1 className='channelinfo__title'>{title}</h1>
            <div className='channelinfo__container'>
                <div className='channelinfo__left'>
                    <p className='channelinfo__detail channelinfo__detail--bold'>By {channel}</p>
                    <p className='channelinfo__detail'>{timestamp}</p>
                </div>
                <div className='channelinfo__right'>
                    <div className='channelinfo__right-box'>
                        <img className='channelinfo__icon' src={viewsIcon} />
                        <p className='channelinfo__detail'>{views}</p>
                        </div>
                    <div className='channelinfo__right-box'>
                        <img className='channelinfo__icon'  src={likesIcon} />
                        <p className='channelinfo__detail'>{likes}</p>
                        </div>
                </div>
            </div>
            <p className='description'>
                {description}
            </p>
        </section>
        </>
    )
}

export default VideoDescription;