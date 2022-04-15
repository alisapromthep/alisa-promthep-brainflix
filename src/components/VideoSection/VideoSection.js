import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentSection from "../CommentSection/CommentSection";

function VideoSection(props) {

    
    return (
        <div>
            <VideoPlayer selectedVideo={props.selectVideo}/>
            <CommentSection />
        </div>
    );
}

export default VideoSection;