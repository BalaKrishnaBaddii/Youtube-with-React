import "./profiles.css";

export default function Profiles() {
  return (
    <div>
      <Profile1 />
    </div>
  );
}

function Profile1() {
  return (
    <div className="tweet-box">
      <img className="profile" alt="cat" src="/Thumbnails/channel-1.jpeg" />
      <input className="inpt" type="text" placeholder="What's happening?" />
      <button className="tweet">Tweet</button>
    </div>
  );
}
