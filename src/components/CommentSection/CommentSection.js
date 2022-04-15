import CommentForm from "../CommentForm/CommentForm";
import CommentCard
 from "../CommentCard/CommentCard";
function CommentSection(props) {
    return (
        <div>
            <CommentForm />
            <CommentCard />
        </div>
    );
}

export default CommentSection;