import './VideoPlayer.scss';

function VideoPlayer({image, video}) {

    return (
        <section className='videoplayer'>
            <div className='videoplayer__container'>
            <video className='videoplayer__video' controls poster={image}>
                <source src={video} type="video"/>
            </video>
            </div>
        </section>
    )
}

export default VideoPlayer;