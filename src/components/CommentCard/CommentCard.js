import './CommentCard.scss';
import videoDetail from '../../data/video-details.json';

function CommentCard ({name, timestamp, comment}){
    return (
        <article className='comment__container'>
            <img className='comment__photo-holder' />
            <div className='comment__card'>
                <div className='comment__card-detail'>
                    <p className='comment__name'>
                        {name}
                    </p>
                    <p className='comment__date'>
                        {timestamp}
                    </p>
                </div>
                <p className='comment__content'>
                    {comment}
                </p>
            </div>
        </article>
    )
}

export default CommentCard;