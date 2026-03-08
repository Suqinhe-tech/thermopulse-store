import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Headphones, Shield, RefreshCw } from 'lucide-react';

const features = [
  {
    id: 'shipping',
    icon: Truck,
    titleKey: 'features.items.shipping.title',
    descKey: 'features.items.shipping.description',
  },
  {
    id: 'support',
    icon: Headphones,
    titleKey: 'features.items.support.title',
    descKey: 'features.items.support.description',
  },
  {
    id: 'payment',
    icon: Shield,
    titleKey: 'features.items.payment.title',
    descKey: 'features.items.payment.description',
  },
  {
    id: 'return',
    icon: RefreshCw,
    titleKey: 'features.items.return.title',
    descKey: 'features.items.return.description',
  },
];

export function Features() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="features"
      ref={ref}
      className="w-full py-20 lg:py-32 bg-[#f5f5f5]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4"
          >
            {t('features.title')}
          </motion.h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          style={{ perspective: '1200px' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const rotations = [8, 3, -3, -8];
            const delays = [0.2, 0.32, 0.44, 0.56];

            return (
              <motion.div
                key={feature.id}
                initial={{
                  opacity: 0,
                  rotateY: index < 2 ? 90 : -90,
                  x: index < 2 ? -50 : 50,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        rotateY: rotations[index],
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  delay: delays[index],
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  rotateY: 0,
                  translateZ: 40,
                  scale: 1.05,
                  zIndex: 10,
                }}
                className="group relative bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${-20 + Math.abs(index - 1.5) * 10}px)`,
                }}
              >
                {/* Hexagon Icon Container */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    delay: delays[index] + 0.2,
                    duration: 0.5,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className="relative w-16 h-16 mb-6 mx-auto"
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-full bg-[#f94e4e]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#f94e4e]/20 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-[#f94e4e] group-hover:scale-110 group-hover:rotate-10 transition-all duration-300" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: delays[index] + 0.3, duration: 0.4 }}
                  className="text-center"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-black mb-2 group-hover:text-[#f94e4e] transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {t(feature.descKey)}
                  </p>
                </motion.div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f94e4e]/30 rounded-xl transition-colors duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
