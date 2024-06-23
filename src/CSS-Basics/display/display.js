import "./display.css";

export default function Display() {
  return (
    <>
      <Dislpay3 />
      <Dislpay1 />
      <Dislpay2 />
    </>
  );
}

function Dislpay3() {
  return (
    <div className="box-3">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <button className="signup">Sign Up</button>
    </div>
  );
}

function Dislpay1() {
  return (
    <div className="box-1">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
    </div>
  );
}

function Dislpay2() {
  return (
    <div className="box-2">
      <p>
        Thanks for chatting with our customer care support. Would you like to
        take our quick survery?
      </p>

      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
}
