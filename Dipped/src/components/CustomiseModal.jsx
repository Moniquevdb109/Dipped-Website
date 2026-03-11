// src/components/CustomiseModal.jsx

import { useState, useEffect } from 'react'

function CustomiseModal({ product, onClose }) {
  const [selectedOptions, setSelectedOptions] = useState({
    flavour: product.options.flavours?.[0] ?? null,
    coating: product.options.coatings?.[0] ?? null,
    topping: product.options.toppings?.[0] ?? null,
  })
  const [quantity, setQuantity] = useState(6)
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const select = (type, value) =>
    setSelectedOptions(prev => ({ ...prev, [type]: value }))

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  const totalPrice = (product.priceFrom * quantity).toLocaleString()

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalBox" onClick={e => e.stopPropagation()}>

        <div className="modalHeader">
          <div>
            <div className="sectionTag" style={{ marginBottom: '4px' }}>Customise</div>
            <h3 className="modalTitle">{product.name}</h3>
          </div>
          <button className="modalClose" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modalImg">
          <img src={product.images[0]} alt={product.name} />
        </div>

        <div className="modalOptions">

          {product.options.flavours && (
            <div className="optionGroup">
              <span className="optionLabel">Cake flavour</span>
              <div className="optionButtons">
                {product.options.flavours.map(f => (
                  <button
                    key={f}
                    className={`optionBtn ${selectedOptions.flavour === f ? 'optionBtnActive' : ''}`}
                    onClick={() => select('flavour', f)}
                  >{f}</button>
                ))}
              </div>
            </div>
          )}

          {product.options.coatings && (
            <div className="optionGroup">
              <span className="optionLabel">Coating</span>
              <div className="optionButtons">
                {product.options.coatings.map(c => (
                  <button
                    key={c}
                    className={`optionBtn ${selectedOptions.coating === c ? 'optionBtnActive' : ''}`}
                    onClick={() => select('coating', c)}
                  >{c}</button>
                ))}
              </div>
            </div>
          )}

          {product.options.toppings && (
            <div className="optionGroup">
              <span className="optionLabel">Toppings</span>
              <div className="optionButtons">
                {product.options.toppings.map(t => (
                  <button
                    key={t}
                    className={`optionBtn ${selectedOptions.topping === t ? 'optionBtnActive' : ''}`}
                    onClick={() => select('topping', t)}
                  >{t}</button>
                ))}
              </div>
            </div>
          )}

          <div className="optionGroup">
            <span className="optionLabel">Quantity</span>
            <div className="quantityRow">
              <button className="qtyBtn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span className="qtyValue">{quantity}</span>
              <button className="qtyBtn" onClick={() => setQuantity(q => q + 1)}>+</button>
              <span className="qtyUnit">× R{product.priceFrom} / {product.priceUnit}</span>
            </div>
          </div>

          <div className="optionGroup">
            <span className="optionLabel">Special notes <em style={{ fontWeight: 400, opacity: 0.6 }}>(optional)</em></span>
            <textarea
              className="modalNotes"
              rows={3}
              placeholder="Colour scheme, event date, theme details..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
        </div>

        <div className="modalFooter">
          <div className="modalTotal">
            <span>Estimated total</span>
            <strong>R{totalPrice}</strong>
          </div>
          <button className="btnPrimary" onClick={handleSubmit} disabled={submitted}>
            {submitted ? 'Enquiry sent! 🍓' : 'Send Enquiry'}
          </button>
        </div>

      </div>
    </div>
  )
}

export default CustomiseModal
