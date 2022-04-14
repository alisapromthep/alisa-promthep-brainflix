import './VideoDescription.scss';
import videoDetail from '../../data/video-details.json';
import viewsIcon from '../../assets/images/icons/views.svg';
import likesIcon from '../../assets/images/icons/likes.svg';

function VideoDescription () {
    return (
        <>
        <section className='channelinfo'>
            <div className='channelinfo__container'>
                <div className='channelinfo__left'>
                    <p className='channelinfo__detail channelinfo__detail--bold'>By {videoDetail[0].channel}</p>
                    <p className='channelinfo__detail'>{videoDetail[0].timestamp}</p>
                </div>
                <div className='channelinfo__right'>
                    <div className='channelinfo__right-box'>
                        <img className='channelinfo__icon' src={viewsIcon} />
                        <p className='channelinfo__detail'>{videoDetail[0].views}</p>
                        </div>
                    <div className='channelinfo__right-box'>
                        <img className='channelinfo__icon'  src={likesIcon} />
                        <p className='channelinfo__detail'>{videoDetail[0].likes}</p>
                        </div>
                </div>
            </div>
            <p className='description'>
                {videoDetail[0].description}
            </p>
        </section>
        </>
    )
}

export default VideoDescription;