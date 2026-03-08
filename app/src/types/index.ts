export interface Product {
  id: string;
  name?: string;
  nameKey: string;
  description?: string;
  descriptionKey: string;
  price: number;
  priceCN: number;
  image: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  titleKey: string;
  contentKey: string;
  author: string;
}

export interface Feature {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}
