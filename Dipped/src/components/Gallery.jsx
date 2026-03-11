// src/components/Gallery.jsx

import { products } from '../data/products'

// Pull all images from all products into one flat array
const allImages = products.flatMap(product =>
  product.images.map(img => ({
    src: img,
    alt: product.name,
  }))
)

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="galleryHeader">
        <div className="sectionTag">Gallery</div>
        <h2 className="sectionTitle">
          Made with <em>love & detail</em>
        </h2>
      </div>

      <div className="galleryGrid">
        {allImages.map((image, i) => (
          <div className="galleryItem fadeUp" key={i}>
            <img src={image.src} alt={image.alt} />
            <div className="galleryOverlay" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery