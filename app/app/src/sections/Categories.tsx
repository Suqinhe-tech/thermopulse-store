import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    id: 'massager',
    image: '/images/category-massager.jpg',
    titleKey: 'categories.massager.title',
    descKey: 'categories.massager.description',
  },
  {
    id: 'gun',
    image: '/images/category-gun.jpg',
    titleKey: 'categories.gun.title',
    descKey: 'categories.gun.description',
  },
];

export function Categories() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="categories"
      ref={ref}
      className="w-full py-20 lg:py-32 bg-[#f5f5f5]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div
          className="grid md:grid-cols-2 gap-6 lg:gap-10"
          style={{ perspective: '1000px' }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, rotateY: index === 0 ? -90 : 90 }}
              animate={isInView ? { opacity: 1, rotateY: index === 0 ? 1 : -1 } : {}}
              transition={{
                delay: 0.2 + index * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: index === 0 ? -3 : 3,
                scale: 1.02,
              }}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer ${
                index === 1 ? 'md:translate-y-10' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <a href="#products" className="block">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={t(category.titleKey)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  />
                  {/* Overlay Gradient */}
                  <motion.div
                    initial={{ height: '100%' }}
                    whileHover={{ height: '0%' }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent"
                  />
                </div>

                {/* Content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-2 group-hover:text-[#f94e4e] transition-colors">
                    {t(category.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {t(category.descKey)}
                  </p>
                </motion.div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#f94e4e]/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
