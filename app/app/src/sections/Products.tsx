import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye, Plus } from 'lucide-react';
import { products } from '@/data/products';
import type { Product } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export function Products({ onAddToCart }: ProductsProps) {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const getPrice = (product: Product) => {
    return i18n.language === 'zh' ? product.priceCN : product.price;
  };

  return (
    <section
      id="products"
      ref={ref}
      className="w-full py-20 lg:py-32 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            {t('products.title')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ${
                index === 1 ? 'lg:-translate-y-5' : ''
              } ${index === 3 ? 'lg:-translate-y-3' : ''}
              `}
              whileHover={{
                y: -20,
                scale: 1.03,
                transition: { duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] },
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <motion.img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <motion.div
                    initial={{ x: '-100%', rotate: 45 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100"
                >
                  <Button
                    size="sm"
                    className="flex-1 bg-[#f94e4e] hover:bg-[#e04545] text-white"
                    onClick={() => onAddToCart(product)}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    {t('products.addToCart')}
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-black mb-1 group-hover:text-[#f94e4e] transition-colors">
                  {t(product.nameKey)}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {t(product.descriptionKey)}
                </p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.3,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className="flex items-center justify-between"
                >
                  <span className="text-xl font-bold text-[#f94e4e]">
                    {t('currency')}
                    {getPrice(product)}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{t(selectedProduct.nameKey)}</DialogTitle>
                <DialogDescription>{t(selectedProduct.descriptionKey)}</DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-50">
                  <img
                    src={selectedProduct.image}
                    alt={t(selectedProduct.nameKey)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-3xl font-bold text-[#f94e4e] mb-4">
                      {t('currency')}
                      {getPrice(selectedProduct)}
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#f94e4e] rounded-full" />
                        专业级品质
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#f94e4e] rounded-full" />
                        一年质保
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#f94e4e] rounded-full" />
                        免费配送
                      </li>
                    </ul>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-[#f94e4e] hover:bg-[#e04545] text-white mt-6"
                    onClick={() => {
                      onAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {t('products.addToCart')}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
