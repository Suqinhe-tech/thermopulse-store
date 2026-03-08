import { motion } from 'framer-motion';
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PaymentCancel() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          {/* Cancel Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <XCircle className="w-10 h-10 text-orange-600" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Payment Cancelled
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-8"
          >
            Your payment was not completed. Don't worry - your cart items are still saved.
          </motion.p>

          {/* Reasons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-50 rounded-xl p-6 mb-8 text-left"
          >
            <p className="font-medium mb-3">Common reasons:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                <span>Payment method was declined</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                <span>Session timed out</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                <span>Browser was closed during payment</span>
              </li>
            </ul>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              asChild
              className="flex-1 bg-[#f94e4e] hover:bg-[#e04545]"
            >
              <a href="/checkout">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="flex-1"
            >
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cart
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
