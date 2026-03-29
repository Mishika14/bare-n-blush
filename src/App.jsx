import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Products from './pages/Products'
import About from './pages/About'
import { CartProvider } from './context/CartContext'
import CartSidebar from './components/CartSidebar'

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <div className='flex min-h-screen flex-col bg-background text-foreground'>
        <NavBar />
        <CartSidebar />
        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  </BrowserRouter>
)

export default App
