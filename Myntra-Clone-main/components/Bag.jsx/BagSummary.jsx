import { Link } from "react-router-dom";

function BagSummary({ finalItems }) {
  console.log(finalItems);

  let totalPrice = 0;
  let totalDiscount = 0;

  finalItems.forEach((element) => {
    totalPrice = totalPrice + element.price;
    totalDiscount = totalDiscount + element.discountPercentage;
  });
  console.log(totalPrice);
  console.log(totalDiscount);

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">
            ₹{" "}
            {Math.floor((totalPrice + (totalPrice * totalDiscount) / 100) * 85)}
            .00
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹ {Math.floor(((totalPrice * totalDiscount) / 100) * 85)}.00
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{totalPrice * 85 + 99}.00</span>
        </div>
      </div>
      <button className="btn-place-order">
        <Link to="/login" className="" style={{ color: "#fff" }}>
          <div className="css-xjhrni">PLACE ORDER</div>
        </Link>
      </button>
    </div>
  );
}
export default BagSummary;
