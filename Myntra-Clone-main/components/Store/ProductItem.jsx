import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { buyAction } from "../../src/store/buyItem";

function ProductItem({ item }) {
  const dispatch = useDispatch();

  const handleAddToBuy = () => {
    dispatch(buyAction.clickToBuy(item.id));
  };

  return (
    <li className="product-item" onClick={handleAddToBuy}>
      <Link to="/buy">
        <div className="product-img-container">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="product-rating-container">
          <span className="product-rating">{item.rating}</span>
          <span className="product-rating-star">⭐</span>
          <span className="product-rating-separator">|</span>
          <span className="product-rating-count"> 1400</span>
        </div>
        <div className="product-info-container">
          <h3 className="product-brand">{item.brand}</h3>
          <h4 className="product-product">{item.title}</h4>
          <div className="product-price">
            <span>
              <span className="product-discount-price">Rs.{item.price}</span>
              <span className="product-strike">Rs. 1999</span>
            </span>
            <span className="product-discount-percentage">
              ({item.discountPercentage}% OFF)
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
export default ProductItem;
