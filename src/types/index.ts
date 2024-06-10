export type User = {
  id: string;
  name: string;
  first_name: string;
  address: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
  cart: string[];
  created_at: string;
}

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
  image: string;
  currency: string;
  created_at: string;
}