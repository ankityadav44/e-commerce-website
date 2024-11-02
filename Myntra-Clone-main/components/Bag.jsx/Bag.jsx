import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import "./Bag.css";
import { useSelector } from "react-redux";

function Bag() {
  const bag = useSelector((store) => store.bag);
  console.log(bag);

  const items = useSelector((store) => store.items);

  const finalItem = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });

  // console.log("fianl item", finalItem);

  return (
    <main>
      <div className="bag-page">
        {/* bag item container */}
        {finalItem.map((item) => {
          return <BagItem key={item.id} item={item} />;
        })}
        {/* <BagItem item={item} /> */}

        <BagSummary finalItems={finalItem} />
      </div>
    </main>
  );
}
export default Bag;
