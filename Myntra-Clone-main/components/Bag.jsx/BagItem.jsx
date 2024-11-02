import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiKeyReturnThin } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bagActions } from "../../src/store/bagSlice";

function BagItem({ item }) {
  console.log(item);
  const dispatch = useDispatch();

  const handleOnRemoveBagItem = () => {
    console.log("remove hua");
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="bag-items-container">
      <div className="cart-item-list">
        <div className="cart-item-container d-flex">
          <div className="cart-item-left ">
            <div style={{ width: "111px", height: "148px" }}>
              <Link to="/">
                <picture className="cart-item-image">
                  <img src={item.thumbnail} alt="" srcSet="" />
                </picture>
              </Link>
            </div>
          </div>
          <div className="cart-item-right">
            <div className="cart-item-brand">{item.brand}</div>
            <div className="cart-item-disc">{item.title}</div>
            <div className="cart-item-seller">Sold by: {item.brand}</div>
            <div className="cart-item-size-and-qty d-flex">
              <div className="cart-item-size">
                <span>Size: 38</span>
                <IoMdArrowDropdown />
              </div>
              <div className="cart-item-qty">
                <span>Qty: 1</span>
                <IoMdArrowDropdown />
              </div>
            </div>
            <div className="cart-item-price d-flex">
              <div className="cart-item-selling-price">
                <LiaRupeeSignSolid />
                {item.price * 85}
              </div>
              <div className="cart-item-discount-block d-flex">
                <div className="cart-item-strike-amount">
                  <LiaRupeeSignSolid />
                  {Math.floor(
                    (item.price +
                      (item.price * item.discountPercentage) / 100) *
                      85
                  )}
                  .00
                </div>
                <div className="cart-item-discount-amount">
                  <LiaRupeeSignSolid />
                  {Math.floor(
                    (item.price +
                      (item.price * item.discountPercentage) / 100 -
                      item.price) *
                      85
                  )}
                  .00
                  {"  "}
                  OFF
                </div>
              </div>
            </div>
            <div className="cart-item-return-period">
              <PiKeyReturnThin style={{ width: "15px", height: "15px" }} />
              <span className="cart-item-return-text">
                {item.return_period} days
              </span>
              return available
            </div>
          </div>
          <RxCross1
            className="list-item-remove-icon"
            // style={{ width: "22px", height: "22px" }}
            onClick={handleOnRemoveBagItem}
          />
        </div>
      </div>
    </div>
  );
}
export default BagItem;
