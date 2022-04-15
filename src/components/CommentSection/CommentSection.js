import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";

function CommentSection({selectedComment}) {


    return (
        <div>
            <CommentForm commentInfo={selectedComment}/>
            {selectedComment.map((comment,index)=>{
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