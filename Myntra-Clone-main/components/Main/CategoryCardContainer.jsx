function CategoryCardContainer({ image }) {
  console.log(image);
  //   console.log("hiii");
  return (
    <div className="category-card-container">
      <img className="category-img" src={image} alt="" srcSet="" />
    </div>
  );
}

export default CategoryCardContainer;
