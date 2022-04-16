import './VideoCard.scss';


function VideoCard({videoDetail, onVideoSelect}) {

    const handleVideoSelect = (event) => {
        event.preventDefault();
        onVideoSelect(videoDetail.id);
    }

    return (
        <article 
        className='card'
        onClick={handleVideoSelect}>
            <video className='card__thumbnail' poster={videoDetail.image}></video>
            <div className='card__detail-container'>
                <p className='card__title'>
                    {videoDetail.title}
                </p>
                <p className='card__channel'>
                {videoDetail.channel}
                </p>
            </div>
        </article>
    )
}

export default VideoCard;