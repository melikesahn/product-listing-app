import React from 'react';

function StarRating({ rating, outOf = 5 }) {
  return (
    <div className="star-rating">
      {[...Array(outOf)].map((_, i) => (
        <span key={i} style={{ color: i < rating ? '#FFC107' : '#E0E0E0', fontSize: '1.2em' }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating; 