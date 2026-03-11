import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Gallery from './components/Gallery'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'
import CustomiseModal from './components/CustomiseModal'
import './App.css'

function App() {
  const [modalProduct, setModalProduct] = useState(null)

  const openModal = (product) => setModalProduct(product)
  const closeModal = () => setModalProduct(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fadeUp').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products onCustomise={openModal} />
        <Gallery />
        <OrderForm />
      </main>
      <Footer />
      {modalProduct && (
        <CustomiseModal
          product={modalProduct}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export default App