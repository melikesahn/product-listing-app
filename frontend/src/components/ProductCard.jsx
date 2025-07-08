import { useState } from 'react';
import Carousel from './Carousel.jsx';
import ColorPicker from './ColorPicker.jsx';

function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState('yellow');

  return (
    <div className="card">
      <Carousel image={product.images[selectedColor]} />
      <h3 className="title">{product.name}</h3>
      <p className="price">${product.price} USD</p>
      <p className="popularity">{product.popularityOutOf5}/5</p>
      <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
    </div>
  );
}

export default ProductCard;