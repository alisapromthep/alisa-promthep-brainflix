import './CommentForm.scss';
import mohanLogo from '../../assets/images/Mohan-muruge.jpg';
import addComment from '../../assets/images/icons/add_comment.svg';

function CommentForm({commentInfo}) {

    return (
        <>
            <p className='comment__number'>{commentInfo.length} Comments</p>
            <div className='comment__container comment__container--desktop'>
                <img className='comment__profile-img' src={mohanLogo} alt='mohan profile'/>
                <form className='comment__form'>
                    <label className='comment__label'>
                        join the conversation
                        <textarea className='comment__input' typeof='text' name="comment" placeholder='Add a new comment'></textarea>
                    </label>
                    <div className='button__container'>
                        <img className='button__add-icon' src={addComment} />
                        <button className='button'>comment</button>
                    </div>
                </form>
            </div>
        </>
    )
}




export default CommentForm;