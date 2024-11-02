import "./Buy.css";
import { FaRegHeart } from "react-icons/fa";
import ImageContainer from "./ImageContainer";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../src/store/bagSlice";
import { Link } from "react-router-dom";

function Buy() {
  // checking the data to be fetched
  // taking all the values in storage for flltering
  const items = useSelector((store) => store.items);
  console.log(items.length);

  const dispatch = useDispatch();
  //taking the value  (id of product) from buy item which was clicked om storage page
  const buyItem = useSelector((store) => store.buyItem);
  console.log(buyItem);

  // filterign the value from with id of buy item
  const [item] = items.filter((item) => {
    return item.id == buyItem;
  });
  console.log(item);

  // storaging in session tp prevent page load error
  sessionStorage.setItem("buyItem", item.id.toString());
  let lastItem = sessionStorage.getItem("buyItem");
  // console.log(lastItem);

  // add to bag
  const bag = useSelector((store) => store.bag);
  console.log(bag);
  const handleAddToBag = () => {
    console.log("add to bag add hua", item.id);

    dispatch(bagActions.addToBag(item.id));
    console.log(bag);
  };

  // const bagItems = useSelector((store) => store.bagItems);
  // console.log(bagItems);
  // const handleOnBag = () => {
  //   dispatch(bagActions.addToBag(item));
  // };

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="url-container border-dark">
            <ul className="buy-urls d-flex url-list">
              <li className="url-item">
                <a href="#">Home / </a>
              </li>
              <li className="url-item">
                <a href="#"> Clothing / </a>
              </li>
              <li className="url-item">
                <a href="#"> Men Clothing / </a>
              </li>
              <li className="url-item">
                <a href="#"> Shirt / </a>
              </li>
              <li className="url-item">
                <a href="#"> Mast & Harbour Shirtst More By Mast & Harbour</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row product-container ">
          {/* <!-- product images --> */}
          <div className="col-7 product-images-container border-dark">
            <div className="images-container d-flex">
              {item.images.map((image) => {
                return <ImageContainer key={image} image={image} />;
              })}
              {/* <ImageContainer />
              <ImageContainer />
              <ImageContainer /> */}
            </div>
          </div>
          <div className="col-5 product-info-container border-dark">
            <div className="product info">
              <h1 className="product-title">{item.brand}</h1>
              <h1 className="product-name">{item.title}</h1>
              <div className="product-item-rating-container d-flex align-content-center justify-content-center">
                <div className="product-rating-number">{item.rating}</div>
                <span className="product-star-icon">⭐</span>
                <div className="rating-separator">|</div>
                <div className="rating-count">140 Rating</div>
              </div>
              <div className="product-price-container d-flex">
                <span className="product-price">
                  <strong>₹{item.price}</strong>
                </span>
                <span className="product-mrp">
                  MRP <s>₹999</s>
                </span>
                <span className="product-discount">(Rs. 780 OFF)</span>
              </div>
              <p className="product-including-taxes">
                <span className="product-tax-info">inclusive of all taxes</span>
              </p>
            </div>

            <div>
              {/* <!-- colors --> */}
              {/* <div className="colors-container">
                <p className="colors-heading">
                  <strong>More Colors</strong>
                </p>
                <a href="#">
                  <img
                    className="color-image"
                    src="https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25060274/2023/9/27/628fabb7-8d25-4fec-b5cc-50082ce1c2cf1695815273239-Roadster-Men-Tshirts-5711695815272717-1.jpg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="color-image"
                    src="https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25060268/2023/9/27/840b96ea-e204-4d7a-95a0-538e7052d2a11695815242371-Roadster-Men-Tshirts-8071695815241959-1.jpg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="color-image"
                    src="https://assets.myntassets.com/f_auto,h_150,q_auto:best,w_112/assets/images/25060276/2023/9/27/b9b29ad9-4cc2-4215-8380-af9f57150d591695815282071-Roadster-Men-Tshirts-8951695815281743-1.jpg"
                    alt=""
                  />
                </a>
              </div> */}
              {/* <!-- product size container --> */}
              <div className="product-size-container">
                <div className="product-size-header">
                  <h4 className="product-select-size">SELECT SIZE</h4>
                  <span className="product-size-chart">
                    <button className="product-size-chart-btn">
                      Size Chart
                    </button>
                    <span className="size-chat-arrow"></span>
                  </span>
                </div>
                <div className="product-size-buttons d-flex">
                  <div className="size-btns-container">
                    <button className="size-button position-relative">
                      <p className="size-btn-unified-size">S</p>
                      <p className="size-btn-sku-price">Rs. 219</p>
                    </button>
                  </div>
                  <div className="size-btns-container">
                    <button className="size-button position-relative">
                      <p className="size-btn-unified-size">M</p>
                      <p className="size-btn-sku-price">Rs. 219</p>
                    </button>
                  </div>
                  <div className="size-btns-container">
                    <button className="size-button position-relative">
                      <p className="size-btn-unified-size">L</p>
                      <p className="size-btn-sku-price">Rs. 219</p>
                    </button>
                  </div>
                  <div className="size-btns-container">
                    <button className="size-button position-relative">
                      <p className="size-btn-unified-size">XL</p>
                      <p className="size-btn-sku-price">Rs. 219</p>
                    </button>
                  </div>
                  <div className="size-btns-container">
                    <button className="size-button position-relative">
                      <p className="size-btn-unified-size">XXL</p>
                      <p className="size-btn-sku-price">Rs. 219</p>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- action container (cart & wishlist) --> */}
              <div>
                <div className="product-action-container d-flex">
                  <div className=" product-add-to-bag d-flex ">
                    <Link
                      to="/bag"
                      onClick={handleAddToBag}
                      style={{ color: "#fff" }}
                    >
                      <span className="material-symbols-outlined bag-icon shopping_bag"></span>
                      ADD TO BAG
                    </Link>
                  </div>
                  <div className="product-add-to-wishlist d-flex">
                    <span className="material-symbols-outlined wishlist-icon">
                      <FaRegHeart />
                    </span>
                    <span>WISHLIST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Buy;
