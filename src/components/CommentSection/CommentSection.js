import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
import "./CommentSection.scss"
function CommentSection({selectComment}) {


    return (
        <div className="comment">
            <CommentForm commentInfo={selectComment}/>
            {selectComment.map((comment,index)=>{
                return (
                    <CommentCard 
                    key={index}
                    name={comment.name}
                    timestamp={comment.timestamp}
                    comment={comment.comment}
                    />
                )
            })}
        </div>
    );
}

export default CommentSection;