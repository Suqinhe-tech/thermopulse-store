import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #f94e4e 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Diagonal Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="45"
            y1="0"
            x2="55"
            y2="100"
            stroke="#f94e4e"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                {/* Title */}
                <div className="space-y-2">
                  <motion.h1
                    initial={{ clipPath: 'inset(0 100% 0 0)', x: -30 }}
                    animate={{ clipPath: 'inset(0 0% 0 0)', x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight"
                  >
                    {t('hero.title1')}
                  </motion.h1>
                  <motion.h1
                    initial={{ clipPath: 'inset(0 100% 0 0)', x: -30 }}
                    animate={{ clipPath: 'inset(0 0% 0 0)', x: 0 }}
                    transition={{ delay: 0.52, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  >
                    <span className="text-[#f94e4e]">{t('hero.title2')}</span>
                  </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0"
                >
                  {t('hero.subtitle')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
                  >
                    <Button
                      size="lg"
                      className="bg-[#f94e4e] hover:bg-[#e04545] text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-[#f94e4e]/25 hover:shadow-xl hover:shadow-[#f94e4e]/30 transition-all duration-300 group"
                      asChild
                    >
                      <a href="#products">
                        {t('hero.ctaPrimary')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
                      asChild
                    >
                      <a href="#features">{t('hero.ctaSecondary')}</a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Product Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ rotateY: -25, x: 100, opacity: 0 }}
                animate={{ rotateY: 0, x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                style={{ perspective: '1200px' }}
              >
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-[#f94e4e] rounded-full blur-[100px]"
                />
                
                {/* Product Image */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 1, 0, -1, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  <img
                    src="/images/hero-product.jpg"
                    alt="Professional Massage Gun"
                    className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] h-auto drop-shadow-2xl"
                  />
                </motion.div>

                {/* Floating Decorations */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-[#f94e4e]/10 rounded-full blur-xl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#f94e4e]/10 rounded-full blur-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#categories"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-gray-400 hover:text-[#f94e4e] transition-colors"
        >
          <span className="text-xs mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
