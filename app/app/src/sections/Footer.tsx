import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageCircle, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [email, setEmail] = useState('');

  const footerLinks = [
    {
      title: t('footer.links.about.title'),
      links: [
        { label: t('footer.links.about.story'), href: '#' },
        { label: t('footer.links.about.careers'), href: '#' },
        { label: t('footer.links.about.press'), href: '#' },
      ],
    },
    {
      title: t('footer.links.support.title'),
      links: [
        { label: t('footer.links.support.contact'), href: '#' },
        { label: t('footer.links.support.faq'), href: '#' },
        { label: t('footer.links.support.shipping'), href: '#' },
      ],
    },
    {
      title: t('footer.links.policy.title'),
      links: [
        { label: t('footer.links.policy.privacy'), href: '#' },
        { label: t('footer.links.policy.terms'), href: '#' },
        { label: t('footer.links.policy.returns'), href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: MessageCircle, href: '#', label: 'WeChat' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer
      ref={ref}
      className="w-full bg-black text-white pt-16 lg:pt-24 pb-8"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 pb-12 border-b border-white/10">
          {/* Logo & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#hero" className="inline-block mb-6">
              <span className="text-2xl lg:text-3xl font-bold">
                Thermo<span className="text-[#f94e4e]">Pulse</span>
              </span>
            </a>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4">
                {t('footer.newsletter.title')}
              </h3>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={isInView ? { width: '100%', opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-2 max-w-md"
              >
                <Input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#f94e4e]"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
                >
                  <Button className="bg-[#f94e4e] hover:bg-[#e04545] text-white px-6">
                    <Send className="w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 + sectionIndex * 0.1,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        delay: 0.2 + sectionIndex * 0.1 + linkIndex * 0.05,
                        duration: 0.3,
                      }}
                    >
                      <a
                        href={link.href}
                        className="group relative text-gray-300 hover:text-[#f94e4e] transition-all duration-300 inline-block"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f94e4e] group-hover:w-full transition-all duration-300" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.4 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center sm:text-left">
            {t('footer.copyright')}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.5,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.2,
                    rotate: 10,
                  }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f94e4e] flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
