import CategoryCardsContainer from "./CategoryCardsContainer";
import SimpleImageSlider from "react-simple-image-slider";

import { HomeData, slider as images, slider } from "../../src/store/HomeData";
import { useEffect, useState } from "react";

function Main() {
  const [shopByCategory, setShopByCategory] = useState([]);

  useEffect(() => {
    HomeData().then((res) => {
      console.log(res);
      setShopByCategory(res.HomePageShopByCategory);
    });
  }, []);

  return (
    <>
      {/* sldier  */}
      <div className="p-0">
        <SimpleImageSlider
          className="d-cover"
          width="100%"
          height="400px"
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
      <main className="container-fluid p-0 ">
        <div className="hero-discount-banner mb-3">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/7b00a2f0-2c8f-47f8-938d-85617a3e75e91706788625897-FLAT-400-Off-on-1st-Purchase-Strip-----3.jpg"
            alt=""
          />
        </div>
        {/* <div className="hero-valentine-banner">
          <div className="row">
            <div className="col p-0">
              <img
                src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/5/827b697d-155a-4895-92ad-75fbb07ca8a01707154477940-Desktop_Hp_01.jpg"
                alt=""
              />
            </div>
            <div className="col p-0">
              <img
                src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/5/f6857071-a235-49de-a659-1ab08bcd41d11707154477945-Desktop_Hp_02.jpg"
                alt=""
              />
            </div>
          </div>
        </div> */}

        {/* <!-- category section --> */}
        <div className="category-section container-fluid">
          <div className="">
            <div className="">
              <img
                src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/7fa88863-9515-4688-a21e-d33783c92fe01706788473061-Shop-by-category-----2.jpg"
                alt=""
              />
              <div className="row p-0">
                <div className="col p-0">
                  {/*  Shop By Category */}

                  <CategoryCardsContainer
                    shopByCategory={shopByCategory}
                  ></CategoryCardsContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- hero-app-banner --> */}
        <div className="hero-app-banner mb-3">
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/9eb6dcc4-a508-47ce-a6c4-dcfab0c991821706788570836-App-Install-Banner-----3.jpg"
            alt=""
          />
        </div>
      </main>
    </>
  );
}
export default Main;
