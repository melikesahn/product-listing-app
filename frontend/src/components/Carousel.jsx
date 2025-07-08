import { useState, useRef } from 'react';

function Carousel({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 40) prev();
    else if (diff < -40) next();
    touchStartX.current = null;
  };

  // Mouse events for swipe (desktop)
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
  };
  const handleMouseUp = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.clientX - touchStartX.current;
    if (diff > 40) prev();
    else if (diff < -40) next();
    touchStartX.current = null;
  };

  if (!images.length) return null;

  return (
    <div
      className="carousel"
      style={{ position: 'relative', width: 200, userSelect: 'none' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {images.length > 1 && (
        <button
          onClick={prev}
          style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.7)', border: 'none', fontSize: '1.5em', cursor: 'pointer', zIndex: 2 }}
          aria-label="Previous image"
        >&#8592;</button>
      )}
      <img
        src={images[current]}
        alt="Product"
        width="200"
        
        style={{ borderRadius: '8px', display: 'block', margin: '0 auto' }}
        draggable={false}
      />
      {images.length > 1 && (
        <button
          onClick={next}
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.7)', border: 'none', fontSize: '1.5em', cursor: 'pointer', zIndex: 2 }}
          aria-label="Next image"
        >&#8594;</button>
      )}
    </div>
  );
}

export default Carousel;
