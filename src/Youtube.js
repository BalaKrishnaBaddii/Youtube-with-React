import { useState } from "react";
import { data } from "./videodata";
import "./youtube.css";

export default function YouTube() {
  const [videoData, setVideoData] = useState(data);

  return (
    <>
      <TopPanel>
        <SearchBox />
      </TopPanel>
      <VideoContainer>
        {videoData.map((video) => (
          <VideoPreview>
            <Thumbnail video={video} />
            <VideoInfoContainer>
              <Icon video={video} />
              <VideoInfo>
                <VideoTitle video={video} />
                <Author video={video} />
                <Stats>
                  <Views video={video} />
                  <UploadTime video={video} />
                </Stats>
              </VideoInfo>
            </VideoInfoContainer>
          </VideoPreview>
        ))}
      </VideoContainer>
    </>
  );
}

function Stats({ children }) {
  return <div className="stats">{children}</div>;
}

function TopPanel({ children }) {
  return <div>{children}</div>;
}

function VideoContainer({ children }) {
  return <div className="video-container">{children}</div>;
}

function VideoPreview({ children }) {
  return <div className="video-preview">{children}</div>;
}

function Thumbnail({ video }) {
  return (
    <div className="thumbnail">
      <a href={video.video_link}>
        <img alt="sdf" src={video.image_name} />
      </a>
    </div>
  );
}

function VideoInfoContainer({ children }) {
  return <div className="video-info-grid">{children}</div>;
}

function Icon({ video }) {
  return (
    <div className="author-icon">
      <a href={video.channel_link}>
        <img alt={video.video_title} src={video.icon_name} />
      </a>
    </div>
  );
}

function VideoInfo({ children }) {
  return <div className="video-info">{children}</div>;
}

function Author({ video }) {
  return (
    <a href={video.channel_link} className="author-link">
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

function SearchBox() {
  return <input className="search-box" type="text" placeholder="Search" />;
}

function VideoTitle({ video }) {
  const maxChars = 50; // Set the maximum number of characters
  const truncatedTitle =
    video.video_title.length > maxChars
      ? video.video_title.substring(0, maxChars) + "..."
      : video.video_title;
  return (
    <a href={video.video_link} className="video-title-link">
      <p className="video-title">{truncatedTitle}</p>
    </a>
  );
}
