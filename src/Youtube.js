import { useEffect, useState } from "react";
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
            <Thumbnail
              key={video.video_title}
              img={video.image_name}
              link={video.video_title}
              length={video.video_length}
            />
            <VideoInfoContainer>
              <Icon
                key={video.video_title}
                icon={video.icon_name}
                channel_link={video.channel_link}
                author={video.author}
              />
              <VideoInfo>
                <VideoTitle
                  title={video.video_title}
                  link={video.video_link}
                  key={video.video_title}
                />
                <Author
                  channel_link={video.channel_link}
                  author={video.author}
                  key={video.video_title}
                />
                <Stats>
                  <Views views={video.views} key={video.video_title} />
                  <UploadTime
                    upload_time={video.upload_time}
                    key={video.video_title}
                  />
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

function Thumbnail({ link, img, length }) {
  return (
    <a href={link}>
      <div className="thumbnail">
        <img alt="sdf" src={img} />
        <div className="time-stamp">{length}</div>
      </div>
    </a>
  );
}

function VideoInfoContainer({ children }) {
  return <div className="video-info-grid">{children}</div>;
}

function Icon({ icon, channel_link, author }) {
  return (
    <div className="author-icon">
      <a href={channel_link} title={author}>
        <img alt={icon} src={icon} />
      </a>
    </div>
  );
}

function VideoInfo({ children }) {
  return <div className="video-info">{children}</div>;
}

function Author({ channel_link, author }) {
  return (
    <a href={channel_link} className="author-link">
      <p className="video-author">{author}</p>
    </a>
  );
}

function Views({ views }) {
  return <p className="video-views">{views} &#183; </p>;
}

function UploadTime({ upload_time }) {
  return <p className="video-upload-time"> {upload_time}</p>;
}

function VideoTitle({ title, link }) {
  const maxChars = 50; // Set the maximum number of characters
  const truncatedTitle =
    title.length > maxChars ? title.substring(0, maxChars) + "..." : title;
  return (
    <a href={link} className="video-title-link" title={title}>
      <p className="video-title">{truncatedTitle}</p>
    </a>
  );
}
