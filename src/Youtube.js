import { useState } from "react";
import { data } from "./videodata";
import "./youtube.css";
import "./top-panel.css";
import "./sidebar.css";

export default function YouTube() {
  const [videoData, setVideoData] = useState(data);

  return (
    <Container>
      <Header>
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </Header>
      <SideBar />
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
    </Container>
  );
}

function Header({ children }) {
  return <div className="header">{children}</div>;
}

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <img alt="home" src="/left-icons/home.svg" />
        <p>Home</p>
      </div>

      <div className="sidebar-icons">
        <img alt="explore" src="/left-icons/explore.svg" />
        <p>Home</p>
      </div>

      <div className="sidebar-icons">
        <img alt="subscriptions" src="/left-icons/subscriptions.svg" />
        <p>Explore</p>
      </div>

      <div className="sidebar-icons">
        <img alt="originals" src="/left-icons/originals.svg" />
        <p>Originals</p>
      </div>

      <div className="sidebar-icons">
        <img alt="youtube-music" src="/left-icons/youtube-music.svg" />
        <p>Youtube music</p>
      </div>

      <div className="sidebar-icons">
        <img alt="library" src="/left-icons/library.svg" />
        <p>Library</p>
      </div>
    </div>
  );
}
function Container({ children }) {
  return <div className="container">{children}</div>;
}
function LeftSection() {
  return (
    <div className="left-section">
      <img
        className="hamburger"
        src="/icons/hamburger-menu.svg"
        alt="hamburger-menu"
      />
      <img className="logo" src="/icons/youtube-logo.svg" alt="logo" />
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="middle-section">
      <input className="search-box" type="text" placeholder="Search" />
      <button className="search" title="Search">
        <img src="/icons/search.svg" alt="search" />
      </button>
      <button className="voice" title="Microphone">
        <img src="/icons/voice-search-icon.svg" alt="voice-search" />
      </button>
    </div>
  );
}

function RightSection() {
  return (
    <div className="right-section">
      <button title="Upload">
        <img className="upload" src="/icons/upload.svg" alt="" />
      </button>
      <button title="Apps">
        <img className="apps" src="/icons/youtube-apps.svg" alt="" />
      </button>
      <div className="notification-div">
        <button title="notifications">
          <img
            className="notifications"
            src="/icons/notifications.svg"
            alt=""
          />
        </button>
        <div className="pop-up">3</div>
      </div>
      <div className="profile-icon">
        <img
          title="Bala Krishna Baddi"
          className="profile-icon"
          src="https://avatars.githubusercontent.com/u/54216324?v=4&size=64"
          alt="profile"
        />
      </div>
    </div>
  );
}

function Stats({ children }) {
  return <div className="stats">{children}</div>;
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
      <a href={video.video_link} title={video.video_title}>
        <img alt="sdf" src={video.image_name} />
      </a>
      <div className="time-stamp">{video.video_length}</div>
    </div>
  );
}

function VideoInfoContainer({ children }) {
  return <div className="video-info-grid">{children}</div>;
}

function Icon({ video }) {
  return (
    <div className="author-icon">
      <a href={video.channel_link} title={video.author}>
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
    <a href={video.channel_link} className="author-link" title={video.author}>
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

function VideoTitle({ video }) {
  const maxChars = 50; // Set the maximum number of characters
  const truncatedTitle =
    video.video_title.length > maxChars
      ? video.video_title.substring(0, maxChars) + "..."
      : video.video_title;
  return (
    <a
      href={video.video_link}
      className="video-title-link"
      title={video.video_title}
    >
      <p className="video-title">{truncatedTitle}</p>
    </a>
  );
}
