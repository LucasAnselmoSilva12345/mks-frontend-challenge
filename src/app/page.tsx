import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Products } from '@/components/products';
import { getProducts } from '@/util/getProducts';

import '../scss/main.scss';

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Header />
      <main className="main-container">
        <section>
          <Products products={products} />
        </section>
      </main>
      <Footer />
    </>
  );
}
