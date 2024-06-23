import "./youtube.css";

export default function YouTube() {
  return (
    <>
      <Video>
        <Thumbnail />
        {/* <SearchBox /> */}
        <VideoTitle />
        <Author />
        <Views />
        <UploadTime />
      </Video>
    </>
  );
}

function Video({ children }) {
  return <div className="video">{children}</div>;
}

function Thumbnail() {
  return (
    <div>
      <img className="thumbnail" alt="sdf" src="/Thumbnails/thumbnail-1.webp" />
    </div>
  );
}

function SearchBox() {
  return <input className="search-box" type="text" placeholder="Search" />;
}

function VideoTitle() {
  return (
    <p className="video-title">
      Talking Tech and AI with Google CEO Sundar Pichai!
    </p>
  );
}

function Author() {
  return <p className="video-author">Marques Brownlee</p>;
}

function Views() {
  return <p className="video-views">3.4M views &#183; </p>;
}

function UploadTime() {
  return <p className="video-upload-time"> 6 months ago</p>;
}
