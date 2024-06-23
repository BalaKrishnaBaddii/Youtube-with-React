import "./styles.css";

export default function TextStylePractice() {
  return (
    <div>
      <Box6 />
      <Box5 />
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </div>
  );
}

function Box1() {
  return <div className="box1">This is Tahoma Font</div>;
}

function Box2() {
  return (
    <div className="box2">
      <p>Biggest Deals of the year!</p>
      <p>Sales end Thursday</p>
    </div>
  );
}

function Box3() {
  return (
    <div className="box3">
      <h2>HTML CSS Course</h2>
      <p>Beginner to Pro</p>
      <p>
        In this course, we'll learn the skills you need to become a developer.
      </p>
      <button className="get-started">Get Started</button>
    </div>
  );
}

function Box4() {
  return (
    <div className="box4">
      <h2>Shopping for you businness?</h2>
      <h3>See how Apple at Work can help.</h3>
      <p>Learn More &gt;</p>
    </div>
  );
}

function Box5() {
  return (
    <div className="box5">
      <p>New</p>
      <h2>MacBook Pro</h2>
      <h1>SuperCharged for pros.</h1>
      <p>From $1999</p>
      <button>Buy</button>
    </div>
  );
}

function Box6() {
  return (
    <div className="box6">
      <p>1,049.61</p>
      <span>USD</span>
      <p>+18.05 (1.75%) today</p>
      <p>After Hours</p> <span>1,048.00</span> <span>-1.61 (0.15%)</span>
    </div>
  );
}
