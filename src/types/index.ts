export type User = {
  id: string;
  name: string;
  first_name: string;
  address: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
  created_at: string;
  carts?: Cart[];
  products?: Product[];
}

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: string;
  tags: string[];
  image: string;
  currency: string;
  created_at: string;
  user_id: string;
  stocks: number;
  featured: boolean;
};

export type Cart = {
  id: string, 
  name: string, 
  price: number;
  image: string;
  user_id: string;
  quantity: number;
  currency: string;
  product_id: string;
  created_at: string;
}