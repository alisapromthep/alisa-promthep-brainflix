import './CommentCard.scss';
import { convertTimeStamp } from '../../Utility/DateTimeFunction';

function CommentCard ({name, timestamp, comment}){
    return (
        <article className='comment__container'>
            <div className='comment__photo-holder'></div>
            <div className='comment__card'>
                <div className='comment__card-detail'>
                    <p className='comment__name'>
                        {name}
                    </p>
                    <p className='comment__date'>
                        {convertTimeStamp(timestamp)}
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