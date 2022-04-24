import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";

function VideoList({ videoArray, selectedVideoId }) {
  //filter out the selected video from the list
    const videoListFiltered = videoArray.filter((video) => {
    return video.id !== selectedVideoId;
    });

    return (
    <section className="videolist">
        <h2 className="videolist__title">next videos</h2>
        {videoListFiltered.map((video) => (
        <Link
            to={`/video/${video.id}`}
            className="videolist__card"
            key={video.id}>
            <VideoCard 
            videoDetail={video} />
        </Link>
        ))}
    </section>
    );
}

export default VideoList;
