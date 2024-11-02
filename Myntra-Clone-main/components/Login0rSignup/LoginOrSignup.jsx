import "./LoginOrSignup.css";
function LoginOrSignup() {
  return (
    <div className="container-fluid login-container">
      <div className="LnS-container">
        <div className="LnS-img-container">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
            alt=""
            className="LnS-img"
            style={{ height: "160px", width: "100%" }}
          />
        </div>
        <div className="LnS-content-container">
          <h2 className="welcome-header">Login or Signup</h2>

          <div className="mobile-no-input">
            <input type="tel" name="" id="" />
            <span className="placeholder-alternative">
              +91
              <span style={{ padding: "0px 10px" }}>|</span>
              <span className="mobile-placeholder">
                Mobile Number
                <span>*</span>
              </span>
            </span>
          </div>
          <p className="LnS-term-and-condition">
            By Continuing, I agree to the <a href="">Terms of Use</a> &{" "}
            <a href="">Private Policy</a>
          </p>
          <button className="LnS-continue-btn">CONTINUE</button>
          <p className="LnS-help">
            Have trouble logging in ? <a href="#">Get Help</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginOrSignup;
