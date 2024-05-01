'use client';
import { getProducts } from '@/util/getProducts';
import { useQuery } from '@tanstack/react-query';

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

  if (error) return <div>Error fetching products</div>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data.products.map((product: ProductsProps) => (
          <li key={product.id}>
            <img src={product.photo} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
