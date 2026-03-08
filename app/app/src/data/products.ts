import type { Product, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: 'massager',
    name: '冷热按摩仪',
    nameKey: 'products.items.massager.name',
    description: '专业级冷热疗法',
    descriptionKey: 'products.items.massager.description',
    price: 199,
    priceCN: 1299,
    image: '/images/product-massager.jpg',
    category: 'massager',
  },
  {
    id: 'gun',
    name: '筋膜枪',
    nameKey: 'products.items.gun.name',
    description: '深层组织放松',
    descriptionKey: 'products.items.gun.description',
    price: 139,
    priceCN: 899,
    image: '/images/product-gun.jpg',
    category: 'gun',
  },
  {
    id: 'mini',
    name: '迷你筋膜枪',
    nameKey: 'products.items.mini.name',
    description: '便携动力',
    descriptionKey: 'products.items.mini.description',
    price: 89,
    priceCN: 599,
    image: '/images/product-mini.jpg',
    category: 'gun',
  },
  {
    id: 'heads',
    name: '按摩头套装',
    nameKey: 'products.items.heads.name',
    description: '完整恢复套装',
    descriptionKey: 'products.items.heads.description',
    price: 29,
    priceCN: 199,
    image: '/images/product-heads.jpg',
    category: 'accessory',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    titleKey: 'testimonials.items.1.title',
    contentKey: 'testimonials.items.1.content',
    author: '李明',
  },
  {
    id: '2',
    titleKey: 'testimonials.items.2.title',
    contentKey: 'testimonials.items.2.content',
    author: '王芳',
  },
  {
    id: '3',
    titleKey: 'testimonials.items.3.title',
    contentKey: 'testimonials.items.3.content',
    author: '张伟',
  },
];
