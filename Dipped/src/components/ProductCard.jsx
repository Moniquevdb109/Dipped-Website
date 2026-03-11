// src/components/ProductCard.jsx

import { useState } from 'react'

function ProductCard({ product, onCustomise, delay }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div
      className="productCard fadeUp"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setActiveImage(1)}
      onMouseLeave={() => setActiveImage(0)}
    >
      <div className="productCardImg">
        <img
          src={product.images[activeImage]}
          alt={product.name}
        />
      </div>
      <div className="productCardBody">
        <h4 className="productCardName">{product.name}</h4>
        <p className="productCardDesc">{product.description}</p>
        <div className="productCardFooter">
          <span className="productCardPrice">
            From R{product.priceFrom}
          </span>
          <button
            className="productCardCustomise"
            onClick={() => onCustomise(product)}
          >
            Customise →
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard