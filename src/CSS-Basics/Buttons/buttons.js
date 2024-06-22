import "./buttons.css";

export default function Buttons() {
  return (
    <div className="buttons">
      <Subscribe />
      <Join />
      <Tweet />
    </div>
  );
}

function Subscribe() {
  return (
    <div>
      <button className="subscribe">SUBSCRIBE</button>
    </div>
  );
}

function Join() {
  return (
    <div>
      <button className="join">JOIN</button>
    </div>
  );
}

function Tweet() {
  return (
    <div>
      <button className="tweet">Tweet</button>
    </div>
  );
}
