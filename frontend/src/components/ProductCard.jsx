import { useState } from 'react';
import Carousel from './Carousel.jsx';
import ColorPicker from './ColorPicker.jsx';
import StarRating from './StarRating.jsx';

function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState('yellow');

  const colorNames = {
    yellow: 'Yellow Gold',
    white: 'White Gold',
    rose: 'Rose Gold',
  };

  return (
    <div className="card" style={{ textAlign: 'left' }}>
      <Carousel images={Array.isArray(product.images[selectedColor]) ? product.images[selectedColor] : [product.images[selectedColor]]} />
      <h3 className="title">{product.name}</h3>
      <p className="price">${product.price} USD</p>
      <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <div style={{ fontSize: '0.8em', margin: '0.3em 0 0.7em 0' }}>{colorNames[selectedColor]}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em', marginTop: '-0.2em', marginBottom: '0.5em' }}>
        <StarRating rating={product.popularityOutOf5} />
        <span style={{ fontSize: '1em', color: '#444' }}>{product.popularityOutOf5}/5</span>
      </div>
    </div>
  );
}

export default ProductCard;