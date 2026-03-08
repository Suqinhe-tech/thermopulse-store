import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export function Testimonials() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      rotateY: direction > 0 ? -25 : 25,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      rotateY: direction < 0 ? -25 : 25,
      opacity: 0,
      scale: 0.85,
      zIndex: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="w-full py-20 lg:py-32 bg-gradient-to-br from-black via-[#1a1a1a] to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(45deg, #f94e4e 0%, transparent 50%, #f94e4e 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          {/* Cards Container */}
          <div className="relative h-[300px] sm:h-[250px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                const isPrev =
                  index === (activeIndex - 1 + testimonials.length) % testimonials.length;
                const isNext = index === (activeIndex + 1) % testimonials.length;

                if (!isActive && !isPrev && !isNext) return null;

                return (
                  <motion.div
                    key={testimonial.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate={isActive ? 'center' : isPrev ? 'exit' : 'enter'}
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      rotateY: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                    }}
                    className={`absolute inset-0 ${
                      isActive ? 'z-10' : 'z-0 opacity-50'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform:
                        isPrev
                          ? 'translateX(-80%) rotateY(25deg) scale(0.85)'
                          : isNext
                          ? 'translateX(80%) rotateY(-25deg) scale(0.85)'
                          : undefined,
                    }}
                  >
                    <div
                      className={`h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/20 ${
                        isActive ? 'shadow-2xl shadow-black/50' : ''
                      }`}
                    >
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={isActive ? { scale: 1, rotate: 0 } : { scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
                        className="mb-4"
                      >
                        <Quote className="w-10 h-10 text-[#f94e4e]" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {t(testimonial.titleKey)}
                      </h3>
                      <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                        "{t(testimonial.contentKey)}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#f94e4e] flex items-center justify-center text-white font-bold">
                          {testimonial.author[0]}
                        </div>
                        <span className="text-white font-medium">{testimonial.author}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#f94e4e] flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#f94e4e] flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-[#f94e4e]'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
