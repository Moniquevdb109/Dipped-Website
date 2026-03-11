// src/components/Products.jsx

import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

const featuredProduct = products.find(p => p.featured)
const gridProducts = products.filter(p => !p.featured)

function Products({ onCustomise }) {
  const [activeImage, setActiveImage] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState({
    flavour: featuredProduct.options.flavours?.[0] ?? null,
    coating: featuredProduct.options.coatings?.[0] ?? null,
    topping: featuredProduct.options.toppings?.[0] ?? null,
  })

  const selectOption = (type, value) => {
    setSelectedOptions(prev => ({ ...prev, [type]: value }))
  }

  return (
    <section className="products" id="products">

      {/* Header */}
      <div className="productsHeader">
        <div>
          <div className="sectionTag">Our treats</div>
          <h2 className="sectionTitle">
            Every bite,<br /><em>beautifully made</em>
          </h2>
        </div>
        <p className="productsHeaderText">
          Each treat is handcrafted to order and fully customisable —
          pick your colours, flavours, and toppings.
        </p>
      </div>

      {/* Featured product */}
      <div className="productsFeatured fadeUp">
        <div className="featuredImg">
          <span className="featuredLabel">Fan Favourite</span>
          <img
            src={featuredProduct.images[activeImage]}
            alt={featuredProduct.name}
          />
          {/* Thumbnail strip */}
          <div className="featuredThumbs">
            {featuredProduct.images.map((img, i) => (
              <button
                key={i}
                className={`featuredThumb ${activeImage === i ? 'featuredThumbActive' : ''}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={img} alt={`${featuredProduct.name} ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="featuredInfo">
          <h3 className="featuredName">{featuredProduct.name}</h3>
          <p className="featuredDesc">{featuredProduct.description}</p>

          <div className="customiseOptions">
            {featuredProduct.options.flavours && (
              <div className="optionGroup">
                <span className="optionLabel">Cake flavour</span>
                <div className="optionButtons">
                  {featuredProduct.options.flavours.map(f => (
                    <button
                      key={f}
                      className={`optionBtn ${selectedOptions.flavour === f ? 'optionBtnActive' : ''}`}
                      onClick={() => selectOption('flavour', f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {featuredProduct.options.coatings && (
              <div className="optionGroup">
                <span className="optionLabel">Coating</span>
                <div className="optionButtons">
                  {featuredProduct.options.coatings.map(c => (
                    <button
                      key={c}
                      className={`optionBtn ${selectedOptions.coating === c ? 'optionBtnActive' : ''}`}
                      onClick={() => selectOption('coating', c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {featuredProduct.options.toppings && (
              <div className="optionGroup">
                <span className="optionLabel">Toppings</span>
                <div className="optionButtons">
                  {featuredProduct.options.toppings.map(t => (
                    <button
                      key={t}
                      className={`optionBtn ${selectedOptions.topping === t ? 'optionBtnActive' : ''}`}
                      onClick={() => selectOption('topping', t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="featuredFooter">
            <div className="featuredPrice">
              From R{featuredProduct.priceFrom}
              <span> / {featuredProduct.priceUnit}</span>
            </div>
            <button
              className="btnPrimary"
              onClick={() => onCustomise(featuredProduct)}
            >
              Order These
            </button>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="productsGrid">
        {gridProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            onCustomise={onCustomise}
            delay={i * 0.1}
          />
        ))}
      </div>

    </section>
  )
}

export default Products