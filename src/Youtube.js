import { Children, useState } from "react";
import { data } from "./videodata";
import "./youtube.css";

export default function YouTube() {
  const [videoData, setVideoData] = useState(data);

  return (
    <>
      <TopPanel>
        <SearchBox />
      </TopPanel>
      <Container>
        {videoData.map((video) => (
          <VideoPreview>
            <Thumbnail video={video} />
            <VideoTitle video={video} />
            <Author video={video} />
            <Views video={video} />
            <UploadTime video={video} />
          </VideoPreview>
        ))}
      </Container>
    </>
  );
}

function TopPanel({ children }) {
  return <div>{children}</div>;
}

function Container({ children }) {
  return <div className="video-container">{children}</div>;
}

function VideoPreview({ children }) {
  return <div className="video-preview">{children}</div>;
}

function Thumbnail({ video }) {
  return (
    <div>
      <a href={video.video_link}>
        <img className="thumbnail" alt="sdf" src={video.image_name} />
      </a>
    </div>
  );
}

function SearchBox() {
  return <input className="search-box" type="text" placeholder="Search" />;
}

function VideoTitle({ video }) {
  return (
    <a href={video.video_link} className="video-link">
      <p className="video-title">{video.video_title}</p>
    </a>
  );
}

function Author({ video }) {
  return (
    <a href={video.channle_link} className="author-link">
      <p className="video-author">{video.author}</p>
    </a>
  );
}

function Views({ video }) {
  return <p className="video-views">{video.views} &#183; </p>;
}

function UploadTime({ video }) {
  return <p className="video-upload-time"> {video.upload_time}</p>;
}
