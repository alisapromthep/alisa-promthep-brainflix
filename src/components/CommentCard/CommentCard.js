import './CommentCard.scss';
import videoDetail from '../../data/video-details.json';

function CommentCard (){
    return (
        <article className='comment__container'>
            <img className='comment__photo-holder' />
            <div className='comment__card'>
                <div className='comment__card-detail'>
                    <p className='comment__name'>
                        {videoDetail[0].comments[0].name}
                    </p>
                    <p className='comment__date'>
                        {videoDetail[0].comments[0].timestamp}
                    </p>
                </div>
                <p className='comment__content'>
                    {videoDetail[0].comments[0].comment}
                </p>
            </div>

        </article>
    )
}

export default CommentCard;