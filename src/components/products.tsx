'use client';
import { getProducts } from '@/util/getProducts';
import { useQuery } from '@tanstack/react-query';
import '../scss/product-card-container.scss';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductsProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
}

interface ProductsPropsArray {
  products: ProductsProps[];
}

export function Products({ products }: ProductsPropsArray) {
  const { data, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    initialData: products
  });

  const { addToCart } = useCart();

  if (error) return <div>Error fetching products</div>;

  return (
    <>
      {data?.products?.map((product: ProductsProps) => (
        <div key={product.id} className="product-card-container">
          <div className="product-card-container-wrapper-img">
            <img src={product.photo} alt={product.name} />
          </div>

          <div className="product-card-container-wrapper">
            <h2>{product.name}</h2>
            <span>R${product.price / 10}</span>
          </div>

          <p className="product-card-container-wrapper-subtitle">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="product-card-container-wrapper-link-buy"
          >
            <ShoppingBag />
            Comprar
          </button>
        </div>
      ))}
    </>
  );
}
