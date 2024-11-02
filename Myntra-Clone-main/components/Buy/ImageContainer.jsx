function ImageContainer({ image }) {
  // console.log(image);
  return (
    <div className="image-container">
      <div
        className="img image-grid-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
  );
}
export default ImageContainer;
