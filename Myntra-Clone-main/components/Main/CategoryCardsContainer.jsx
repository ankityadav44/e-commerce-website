import CategoryCardContainer from "./CategoryCardContainer";
import "./CategoryCardContainer.css";

function CategoryCardsContainer({ shopByCategory }) {
  console.log(shopByCategory);
  return (
    <div className="category-cards-container ">
      {shopByCategory.map((elem) => {
        return <CategoryCardContainer key={elem.id} {...elem} />;
      })}
    </div>
  );
}
export default CategoryCardsContainer;
