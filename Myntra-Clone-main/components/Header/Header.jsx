import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrSearch } from "react-icons/gr";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropDown from "./ProfileDropDown";
import MenMenu from "../NavMenus/MenMenu";
import WomenMenu from "../NavMenus/WomenMenu";
import HomeAndLiving from "../NavMenus/HomeAndLiving";
import KidsMenu from "../NavMenus/KidsMenu";
import BeautyMenu from "../NavMenus/BeautyMenu";

function Header() {
  const bag = useSelector((store) => store.bag);
  // console.log(bag);
  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid ">
          <div className="logo">
            <Link
              to="/"
              href="#"
              className="myntraweb-sprite desktop-logo sprites-headerLogo"
            ></Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <Link
                  to="/men"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Men
                </Link>
                <MenMenu />
              </li>
              <li className="nav-item">
                <Link
                  to="/women"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Women
                </Link>
                <WomenMenu />
              </li>
              <li className="nav-item">
                <Link
                  to="/Kids"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Kids
                </Link>
                <KidsMenu />
              </li>
              <li className="nav-item">
                <Link
                  to="/home&living"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Home & living
                </Link>
                <HomeAndLiving />
              </li>
              <li className="nav-item">
                <Link
                  to="/beauty"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  beauty
                </Link>
                <BeautyMenu />
              </li>
              <li className="nav-item">
                <Link
                  to="/studio"
                  className="nav-link pe-4"
                  aria-current="page"
                  href="#"
                >
                  Studio
                </Link>
                {/* <NavMenu className="" /> */}
              </li>
              {/* </div> */}
            </ul>
            <div className="search_bar">
              <GrSearch className="search_icon" />
              <input
                className="search_input"
                placeholder="Search for products, brands and more"
              />
            </div>
            <div className="action_bar ms-3">
              <div className="action_container user-icon position-relative">
                <CiUser className="action_icon " />

                <span className="action_name user-icon">Profile</span>

                <ProfileDropDown className="" />
              </div>

              <div className="action_container">
                <CiHeart className="action_icon" />

                <span className="action_name">Wishlist</span>
              </div>

              <Link
                to="/bag"
                className="action_container"
                href="/pages/bag.html"
              >
                <HiOutlineShoppingBag className="action_icon" />

                <span className="action_name">{bag.length}</span>
                <span className="bag-item-count"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
