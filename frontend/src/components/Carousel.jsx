function Carousel({ image }) {
  return (
    <div className="carousel">
      <img src={image} alt="Product" width="200" style={{ borderRadius: '8px' }} />
    </div>
  );
}

export default Carousel;
