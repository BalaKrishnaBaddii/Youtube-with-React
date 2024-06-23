import "./youtube.css";

export default function YouTube() {
  return (
    <>
      <Thumbnail />
      <SearchBox />
    </>
  );
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
