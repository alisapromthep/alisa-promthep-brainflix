import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentSection from "../CommentSection/CommentSection";

function VideoSection(props) {
    
    return (
        <div>
            <VideoPlayer selectedVideo={props.selectVideo}/>
            <CommentSection selectedComment={props.selectVideo.comments}/>
        </div>
    );
}

export default VideoSection;