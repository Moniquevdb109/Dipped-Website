// src/components/Hero.jsx

import { useEffect, useRef } from 'react'
import { products } from '../data/products'

const featuredProduct = products.find(p => p.featured)

function Hero() {
  const sprinklesRef = useRef(null)

  useEffect(() => {
    const container = sprinklesRef.current
    if (!container) return

    const colours = [
      '#F2C4CE', '#D98CA0', '#C9956B',
      '#FAE8ED', '#B5637A', '#FDF6EF'
    ]

    for (let i = 0; i < 18; i++) {
      const s = document.createElement('div')
      const w = Math.random() * 6 + 4
      s.style.cssText = `
        position: absolute;
        width: ${w}px;
        height: ${w * 3}px;
        background: ${colours[Math.floor(Math.random() * colours.length)]};
        left: ${Math.random() * 100}%;
        bottom: -20px;
        border-radius: 100px;
        opacity: 0.35;
        transform: rotate(${Math.random() * 360}deg);
        animation: sprinkleDrift ${Math.random() * 8 + 6}s ${Math.random() * 6}s linear infinite;
      `
      container.appendChild(s)
    }
  }, [])

  return (
    <section className="hero">

      <div className="heroLeft">
        <div className="heroTag">Handcrafted with love</div>
        <h1 className="heroTitle">
          Sweet treats,<br />
          <em>dipped in</em><br />
          magic.
        </h1>
        <p className="heroSubtitle">
          Handcrafted cake pops, dipped pretzels, chocolate strawberries
          and more — made to order for every occasion that deserves a
          little something special.
        </p>
        <div className="heroButtons">
          <a
            href="#products"
            className="btnPrimary"
            onClick={e => {
              e.preventDefault()
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore our treats
          </a>
          <a
            href="#order"
            className="btnGhost"
            onClick={e => {
              e.preventDefault()
              document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Place an order
          </a>
        </div>
      </div>

      <div className="heroRight">
        <div className="heroSprinkles" ref={sprinklesRef} />
        <div className="heroImageGrid">
          <div className="heroImgCell heroImgCellTall">
            <img src={featuredProduct.images[0]} alt={featuredProduct.name} />
          </div>
          <div className="heroImgCell">
            <img src={featuredProduct.images[1]} alt={featuredProduct.name} />
          </div>
          <div className="heroImgCell">
            <img src={featuredProduct.images[2]} alt={featuredProduct.name} />
          </div>
        </div>
        <div className="heroBadge">
          <span>100%</span>
          <span>Made<br />to Order</span>
        </div>
      </div>

    </section>
  )
}

export default Hero