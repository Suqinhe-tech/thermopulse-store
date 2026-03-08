import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Categories } from '@/sections/Categories';
import { Products } from '@/sections/Products';
import { Features } from '@/sections/Features';
import { Testimonials } from '@/sections/Testimonials';
import { Cart } from '@/sections/Cart';
import { Footer } from '@/sections/Footer';
import { Checkout } from '@/pages/Checkout';
import { PaymentSuccess } from '@/pages/PaymentSuccess';
import { PaymentCancel } from '@/pages/PaymentCancel';
import { useCart } from '@/hooks/useCart';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import './i18n';
import './App.css';

// Home page component
function HomePage({ onAddToCart }: { onAddToCart: (product: any) => void }) {
  return (
    <>
      <Hero />
      <Categories />
      <Products onAddToCart={onAddToCart} />
      <Features />
      <Testimonials />
    </>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppContent() {
  const { t } = useTranslation();
  const {
    items,
    isOpen,
    setIsOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    totalPriceCN,
  } = useCart();

  const handleAddToCart = (product: {
    id: string;
    nameKey: string;
    descriptionKey: string;
    price: number;
    priceCN: number;
    image: string;
  }) => {
    addToCart(product);
    toast.success(t('products.addToCart'), {
      description: t(product.nameKey),
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={totalItems} onCartClick={() => setIsOpen(true)} />
      
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onAddToCart={handleAddToCart} />} 
          />
          <Route 
            path="/checkout" 
            element={
              <Checkout 
                items={items} 
                totalPrice={totalPrice}
                totalPriceCN={totalPriceCN}
                onClearCart={clearCart}
              />
            } 
          />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-cancel" element={<PaymentCancel />} />
        </Routes>
      </main>

      <Footer />

      <Cart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        totalPrice={totalPrice}
        totalPriceCN={totalPriceCN}
      />

      <Toaster position="top-center" richColors />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
