import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  zh: {
    translation: {
      nav: {
        home: '首页',
        products: '产品',
        categories: '分类',
        about: '关于我们',
        contact: '联系我们',
      },
      hero: {
        title1: '专业级',
        title2: '恢复设备',
        subtitle: '体验极致放松，感受我们创新的冷热按摩解决方案。',
        ctaPrimary: '立即选购',
        ctaSecondary: '了解更多',
      },
      categories: {
        title: '按分类选购',
        subtitle: '找到适合您恢复需求的完美设备',
        massager: {
          title: '冷热按摩仪',
          description: '体验极致舒缓',
        },
        gun: {
          title: '筋膜枪',
          description: '释放肌肉张力',
        },
      },
      products: {
        title: '热门产品',
        subtitle: '客户最爱的专业级设备',
        addToCart: '加入购物车',
        viewDetails: '查看详情',
        items: {
          massager: {
            name: '冷热按摩仪',
            description: '专业级冷热疗法',
          },
          gun: {
            name: '筋膜枪',
            description: '深层组织放松',
          },
          mini: {
            name: '迷你筋膜枪',
            description: '便携动力',
          },
          heads: {
            name: '按摩头套装',
            description: '完整恢复套装',
          },
        },
      },
      features: {
        title: '为什么选择我们',
        subtitle: '让我们与众不同的品质',
        items: {
          shipping: {
            title: '免费配送',
            description: '所有订单满¥299免运费',
          },
          support: {
            title: '专业支持',
            description: '专家随时为您提供帮助',
          },
          payment: {
            title: '安全支付',
            description: '100%安全交易保障',
          },
          return: {
            title: '退换货政策',
            description: '30天无忧退换',
          },
        },
      },
      testimonials: {
        title: '客户评价',
        subtitle: '看看客户怎么说',
        items: {
          1: {
            title: '卓越品质',
            content: '这款按摩枪改变了我的恢复方式。制造精良，效果显著。',
            author: '李明',
          },
          2: {
            title: '物超所值',
            content: '以这个价格来说，品质令人惊喜。绝对推荐！',
            author: '王芳',
          },
          3: {
            title: '专业级',
            content: '和我物理治疗师用的品质一样。太棒了！',
            author: '张伟',
          },
        },
      },
      cart: {
        title: '购物车',
        empty: '购物车是空的',
        total: '总计',
        checkout: '结算',
        remove: '移除',
        quantity: '数量',
      },
      footer: {
        newsletter: {
          title: '保持联系',
          placeholder: '输入您的邮箱',
          button: '订阅',
        },
        links: {
          about: {
            title: '关于',
            story: '我们的故事',
            careers: '职业机会',
            press: '新闻中心',
          },
          support: {
            title: '支持',
            contact: '联系我们',
            faq: '常见问题',
            shipping: '配送信息',
          },
          policy: {
            title: '政策',
            privacy: '隐私政策',
            terms: '服务条款',
            returns: '退换货政策',
          },
          social: {
            title: '社交媒体',
          },
        },
        copyright: '© 2024 ThermoPulse Recovery。保留所有权利。',
      },
      currency: '¥',
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        categories: 'Categories',
        about: 'About',
        contact: 'Contact',
      },
      hero: {
        title1: 'Professional Grade',
        title2: 'Recovery Equipment',
        subtitle: 'Experience ultimate relaxation with our innovative hot & cold massage solutions.',
        ctaPrimary: 'Shop Now',
        ctaSecondary: 'Learn More',
      },
      categories: {
        title: 'Shop by Category',
        subtitle: 'Find the perfect device for your recovery needs',
        massager: {
          title: 'Hot & Cold Massager',
          description: 'Experience ultimate relief',
        },
        gun: {
          title: 'Massage Gun',
          description: 'Release muscle tension',
        },
      },
      products: {
        title: 'Hot Products',
        subtitle: 'Customer favorites with professional quality',
        addToCart: 'Add to Cart',
        viewDetails: 'View Details',
        items: {
          massager: {
            name: 'Hot & Cold Massager',
            description: 'Professional grade therapy',
          },
          gun: {
            name: 'Massage Gun',
            description: 'Deep tissue relaxation',
          },
          mini: {
            name: 'Mini Massage Gun',
            description: 'Portable power',
          },
          heads: {
            name: 'Massage Head Set',
            description: 'Complete recovery kit',
          },
        },
      },
      features: {
        title: 'Why Choose Us',
        subtitle: 'Qualities that set us apart',
        items: {
          shipping: {
            title: 'Free Shipping',
            description: 'Free delivery on orders over $49',
          },
          support: {
            title: 'Expert Support',
            description: 'Experts ready to help you',
          },
          payment: {
            title: 'Secure Payment',
            description: '100% secure transactions',
          },
          return: {
            title: 'Return Policy',
            description: '30-day hassle-free returns',
          },
        },
      },
      testimonials: {
        title: 'Customer Reviews',
        subtitle: 'See what our customers say',
        items: {
          1: {
            title: 'Excellent Quality',
            content: 'This massage gun has transformed my recovery routine. Well-built and effective.',
            author: 'John Smith',
          },
          2: {
            title: 'Great Value',
            content: 'Amazing quality for the price. Highly recommended!',
            author: 'Sarah Johnson',
          },
          3: {
            title: 'Professional Grade',
            content: 'Same quality my physical therapist uses. Fantastic!',
            author: 'Mike Chen',
          },
        },
      },
      cart: {
        title: 'Shopping Cart',
        empty: 'Your cart is empty',
        total: 'Total',
        checkout: 'Checkout',
        remove: 'Remove',
        quantity: 'Quantity',
      },
      footer: {
        newsletter: {
          title: 'Stay Connected',
          placeholder: 'Enter your email',
          button: 'Subscribe',
        },
        links: {
          about: {
            title: 'About',
            story: 'Our Story',
            careers: 'Careers',
            press: 'Press',
          },
          support: {
            title: 'Support',
            contact: 'Contact Us',
            faq: 'FAQ',
            shipping: 'Shipping Info',
          },
          policy: {
            title: 'Policy',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            returns: 'Return Policy',
          },
          social: {
            title: 'Social Media',
          },
        },
        copyright: '© 2024 ThermoPulse Recovery. All rights reserved.',
      },
      currency: '$',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
