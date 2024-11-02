import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { itemActions } from "../../src/store/itemSlice";

function ProductsContainer({ itemcount }) {
  const items = useSelector((Store) => Store.items);

  return (
    <ul className="products-container">
      {items.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
export default ProductsContainer;
