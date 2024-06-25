import "./gridBox.css";

export default function Grid() {
  return (
    <div>
      <Box1 />
      <Box2 />
      <Box3 />
      <Aminal />
    </div>
  );
}

function Box1() {
  return (
    <div className="box-1">
      <div>200px</div>
      <div>75px</div>
    </div>
  );
}

function Box2() {
  return (
    <div className="box-2">
      <div>col-1</div>
      <div>col-2</div>
      <div>col-3</div>
    </div>
  );
}

function Box3() {
  return (
    <div className="box-3">
      <div>col-1</div>
      <div>col-2</div>
      <div>col-3</div>
      <div>col-4</div>
      <div>col-5</div>
      <div>col-6</div>
      <div>col-7</div>
      <div>col-8</div>
    </div>
  );
}

function Aminal() {
  return (
    <div className="animals">
      <div className="animal">
        <img
          className="thumbnail"
          alt="aminal"
          src="/Thumbnails/channel-1.jpeg"
        />

        <div className="details">
          <p className="title">Oliver</p>
          <div className="icon-message">
            <img
              className="icon"
              alt="aminal"
              src="/Thumbnails/channel-1.jpeg"
            />
            <p className="friends">2 Mutual Friends</p>
          </div>
          <div className="btn">
            <button>Add Friend</button>
          </div>
        </div>
      </div>

      <div className="animal">
        <img
          className="thumbnail"
          alt="aminal"
          src="/Thumbnails/channel-1.jpeg"
        />

        <div className="details">
          <p className="title">Oliver</p>
          <div className="icon-message">
            <img
              className="icon"
              alt="aminal"
              src="/Thumbnails/channel-1.jpeg"
            />
            <p className="friends">2 Mutual Friends</p>
          </div>
          <div className="btn">
            <button>Add Friend</button>
          </div>
        </div>
      </div>

      <div className="animal">
        <img
          className="thumbnail"
          alt="aminal"
          src="/Thumbnails/channel-1.jpeg"
        />

        <div className="details">
          <p className="title">Oliver</p>
          <div className="icon-message">
            <img
              className="icon"
              alt="aminal"
              src="/Thumbnails/channel-1.jpeg"
            />
            <p className="friends">2 Mutual Friends</p>
          </div>
          <div className="btn">
            <button>Add Friend</button>
          </div>
        </div>
      </div>
    </div>
  );
}
