import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard.jsx';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const scrollBy = (offset) => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <p className='main-title'>Product List</p>
      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button
          className="scroll-arrow left"
          onClick={() => scrollBy(-300)}
          style={{ position: 'absolute', left: 0, zIndex: 2, background: 'white', border: 'none', fontSize: '2em', cursor: 'pointer', height: '100%' }}
        >&lt;</button>
        <div className="product-list" ref={listRef}>
          {products.map((p, idx) => (
            <div style={{ minWidth: '260px', flex: '0 0 auto' }} key={p.name + idx}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <button
          className="scroll-arrow right"
          onClick={() => scrollBy(300)}
          style={{ position: 'absolute', right: 0, zIndex: 2, background: 'white', border: 'none', fontSize: '2em', cursor: 'pointer', height: '100%' }}
        >&gt;</button>
      </div>
    </>
  );
}

export default App;
