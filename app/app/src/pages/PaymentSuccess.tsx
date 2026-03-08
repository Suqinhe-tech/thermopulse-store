import { motion } from 'framer-motion';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PaymentSuccess() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Payment Successful!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-8"
          >
            Thank you for your purchase. We've sent a confirmation email with your order details.
          </motion.p>

          {/* Order Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-50 rounded-xl p-6 mb-8 text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-5 h-5 text-[#f94e4e]" />
              <span className="font-medium">What's Next?</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#f94e4e] rounded-full mt-2 flex-shrink-0" />
                <span>We'll process your order within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#f94e4e] rounded-full mt-2 flex-shrink-0" />
                <span>You'll receive a tracking number via email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#f94e4e] rounded-full mt-2 flex-shrink-0" />
                <span>Estimated delivery: 5-7 business days</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8"
          >
            <Mail className="w-4 h-4" />
            <span>Questions? Contact support@thermopulse.com</span>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              asChild
              className="flex-1 bg-[#f94e4e] hover:bg-[#e04545]"
            >
              <a href="/">
                Continue Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="flex-1"
            >
              <a href="/#products">
                View More Products
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
