import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import type { CartItem } from '@/types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  totalPrice: number;
  totalPriceCN: number;
}

export function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  totalPrice,
  totalPriceCN,
}: CartProps) {
  const { t, i18n } = useTranslation();

  const getTotal = () => {
    return i18n.language === 'zh' ? totalPriceCN : totalPrice;
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md bg-white flex flex-col">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingBag className="w-5 h-5" />
            {t('cart.title')}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-auto py-4">
          <AnimatePresence mode="popLayout">
            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center h-full text-gray-400"
              >
                <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
                <p>{t('cart.empty')}</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-4 p-3 bg-gray-50 rounded-lg"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                      <img
                        src={item.image}
                        alt={t(item.nameKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-black truncate">
                        {t(item.nameKey)}
                      </h4>
                      <p className="text-sm text-gray-500 truncate">
                        {t(item.descriptionKey)}
                      </p>
                      <p className="text-[#f94e4e] font-bold mt-1">
                        {t('currency')}
                        {i18n.language === 'zh' ? item.priceCN : item.price}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end justify-between">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>

                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </motion.button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t pt-4 space-y-4"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{t('cart.total')}</span>
              <span className="text-2xl font-bold text-[#f94e4e]">
                {t('currency')}
                {getTotal()}
              </span>
            </div>
            <Button
              size="lg"
              className="w-full bg-[#f94e4e] hover:bg-[#e04545] text-white"
              asChild
            >
              <Link to="/checkout" onClick={onClose}>
                {t('cart.checkout')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        )}
      </SheetContent>
    </Sheet>
  );
}
