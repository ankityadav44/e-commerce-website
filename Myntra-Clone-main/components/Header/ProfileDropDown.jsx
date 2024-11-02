function ProfileDropDown() {
  return (
    <div className="profile-drop-down position-absolute">
      <div className="">
        <h5 className="fs-6 text-secondary fw-bolder">Welcome</h5>
        <p>To access account and image orders</p>
      </div>
      <div className="pb-2">
        <a className="btn" href="#" role="button">
          LOGIN / SIGNUP
        </a>
      </div>

      <ul className="">
        <li>
          <a href="#">Orders</a>
        </li>
        <li>
          <a href="#">Wishlist</a>
        </li>
        <li>
          <a href="#">Gift cards</a>
        </li>
        <li>
          <a href="#">Myntra Insider</a>
        </li>
      </ul>
      <ul className="">
        <li>
          <a href="#">Myntra Credit</a>
        </li>
        <li>
          <a href="#">Coupons</a>
        </li>
        <li>
          <a href="#">Saved Card</a>
        </li>
        <li>
          <a href="#">Saved Address</a>
        </li>
      </ul>
    </div>
  );
}

export default ProfileDropDown;
