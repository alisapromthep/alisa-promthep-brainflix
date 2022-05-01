import './VideoDescription.scss';
import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';
import { convertTimeStamp } from '../../Utility/DateTimeFunction';

function VideoDescription ({selectVideo, addLike}) {
    const {title, channel, timestamp, views, likes, description} = selectVideo

    return (
        <>
        <section className='channelinfo'>
        <h1 className='channelinfo__title'>{title}</h1>
            <div className='channelinfo__container'>
                <div className='channelinfo__left'>
                    <p className='channelinfo__detail channelinfo__detail--bold'>By {channel}</p>
                    <p className='channelinfo__detail'>{convertTimeStamp(timestamp)}</p>
                </div>
                <div className='channelinfo__right'>
                    <div className='channelinfo__right-box'>
                        <img className='channelinfo__icon' src={viewsIcon} alt='an eye' />
                        <p className='channelinfo__detail'>{views}</p>
                        </div>
                    <div className='channelinfo__right-box'>
                        <button className='button--like' type='button' onClick={addLike}>
                            <img className='channelinfo__icon'  src={likesIcon} alt='a heart'/>
                        </button>
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