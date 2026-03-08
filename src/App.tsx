import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Categories } from '@/sections/Categories';
import { Products } from '@/sections/Products';
import { Features } from '@/sections/Features';
import { Testimonials } from '@/sections/Testimonials';
import { Cart } from '@/sections/Cart';
import { Footer } from '@/sections/Footer';
import { useCart } from '@/hooks/useCart';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import './i18n';
import './App.css';

function App() {
  const { t } = useTranslation();
  const {
    items,
    isOpen,
    setIsOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
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

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={totalItems} onCartClick={() => setIsOpen(true)} />
      
      <main>
        <Hero />
        <Categories />
        <Products onAddToCart={handleAddToCart} />
        <Features />
        <Testimonials />
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

export default App;
