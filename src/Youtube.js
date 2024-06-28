import { useState } from "react";
import { data } from "./videodata";
import "./youtube.css";
import "./top-panel.css";
import "./sidebar.css";

export default function YouTube() {
  const [videoData, setVideoData] = useState(data);
  const [button, setButton] = useState(false);
  const [tooltip, setTooltip] = useState("");

  function handleHover(tip) {
    setTooltip(tip);
    setButton((button) => setButton(!button));
  }

  return (
    <Container>
      <Header>
        <LeftSection />
        <MiddleSection
          tooltip={tooltip}
          setTooltip={setTooltip}
          button={button}
          setButton={setButton}
          handleHover={handleHover}
        />
        <RightSection
          tooltip={tooltip}
          setTooltip={setTooltip}
          button={button}
          setButton={setButton}
          handleHover={handleHover}
        />
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

function MiddleSection({
  tooltip,
  button,
  setButton,
  setTooltip,
  handleHover,
}) {
  return (
    <div className="middle-section">
      <input className="search-box" type="text" placeholder="Search" />
      <button
        className="search"
        onMouseEnter={() => handleHover("Search")}
        onMouseLeave={handleHover}
      >
        <img src="/icons/search.svg" alt="search" />
        <Tooltip tooltip={tooltip} button={button} buttonName={"Search"} />
      </button>
      <button
        className="voice"
        onMouseEnter={() => handleHover("Voice Search")}
        onMouseLeave={handleHover}
      >
        <img src="/icons/voice-search-icon.svg" alt="voice-search" />
        <Tooltip
          tooltip={tooltip}
          button={button}
          buttonName={"Voice Search"}
        />
      </button>
    </div>
  );
}

function Tooltip({ button, tooltip, buttonName }) {
  return (
    <div>
      {button && tooltip === buttonName ? (
        <div className="tooltip">{tooltip}</div>
      ) : (
        ""
      )}
    </div>
  );
}

function RightSection({ tooltip, button, setButton, setTooltip, handleHover }) {
  return (
    <div className="right-section">
      <button
        title="Upload"
        onMouseEnter={() => handleHover("Upload")}
        onMouseLeave={handleHover}
      >
        <img className="upload" src="/icons/upload.svg" alt="" />
        <Tooltip tooltip={tooltip} button={button} buttonName={"Upload"} />
      </button>
      <button
        title="Apps"
        onMouseEnter={() => handleHover("Apps")}
        onMouseLeave={handleHover}
      >
        <img className="apps" src="/icons/youtube-apps.svg" alt="" />
        <Tooltip tooltip={tooltip} button={button} buttonName={"Apps"} />
      </button>
      <div className="notification-div">
        <button
          title="notifications"
          onMouseEnter={() => handleHover("Notifications")}
          onMouseLeave={handleHover}
        >
          <img
            className="notifications"
            src="/icons/notifications.svg"
            alt=""
          />
          <Tooltip
            tooltip={tooltip}
            button={button}
            buttonName={"Notifications"}
          />
        </button>
        <div className="pop-up">3</div>
      </div>
      <div
        className="profile-icon"
        onMouseEnter={() => handleHover("Profile")}
        onMouseLeave={handleHover}
      >
        <img
          title="Bala Krishna Baddi"
          className="profile-icon"
          src="https://avatars.githubusercontent.com/u/54216324?v=4&size=64"
          alt="profile"
        />
        <Tooltip tooltip={tooltip} button={button} buttonName={"Profile"} />
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
    <a href={video.video_link}>
      <div className="thumbnail">
        <img alt="sdf" src={video.image_name} />
        <div className="time-stamp">{video.video_length}</div>
      </div>
    </a>
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
