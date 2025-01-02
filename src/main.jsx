import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/Context.jsx'
import Items from './components/Items.jsx'
createRoot(document.getElementById('root')).render(
  
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Items />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  
)
