import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container footer-container mt-5">
        <div className="row row-cols-auto">
          <div className="col-2">
            <ul className="shopping-footer-links">
              <h5>online Shopping</h5>

              <li>
                <a href="#" className="footer-link">
                  men
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  women
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  kids
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  home & living
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  beauty
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  gifts cards
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  myntra insider
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="shopping-footer-links">
              <h5>Customer Policies</h5>

              <li>
                <a href="#" className="footer-link">
                  contact
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  T&C
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms Of use
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  track order
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  shipping
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  cancellation
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  returns
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  grievance officer
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="row">
              <ul className="shopping-footer-links footer-app-links">
                <h5>experience myntra App on mobile</h5>
                <li className="d-flex">
                  <div className="footer-playstore">
                    <a href="#">
                      <img
                        src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                        alt=""
                        srcSet=""
                      />
                    </a>
                  </div>
                  <div className="footer-istore">
                    <a href="#">
                      <img
                        src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                        alt=""
                        srcSet=""
                      />
                    </a>
                  </div>
                  <div></div>
                </li>
                <li>
                  <a href="#" className="footer-link"></a>
                </li>
              </ul>
            </div>
            <div className="row">
              <h5 className="footer-keep-in-touch">Keep in touch</h5>
              <div className="shopping-footer-links footer-social-links d-flex">
                <a href="#">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
                <a href="#">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
                <a href="#">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
                <a href="#">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <ul className="shopping-footer-links footer-promises">
              <li className="footer-original d-flex justify-content-center align-items-center">
                <div className="me-3">
                  <img
                    src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                    alt=""
                    style={{ width: "80px", height: "40px" }}
                  />
                </div>
                <div className="">
                  <strong> 100% ORIGINAL guarantee </strong> for all products at
                  myntra.com
                </div>
              </li>
              <li className="footer-original d-flex justify-content-center align-items-center">
                <div className="me-3">
                  <img
                    src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                    alt=""
                    style={{ width: "65px", height: "40px" }}
                  />
                </div>
                <div className="">
                  <strong> Return within 14days</strong> of receiving your order
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- row end --> */}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
