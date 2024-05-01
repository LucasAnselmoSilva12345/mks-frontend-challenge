import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Products } from '@/components/products';
import { getProducts } from '@/util/getProducts';

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Header />
      <main>
        <Products products={products} />
      </main>
      <Footer />
    </>
  );
}
