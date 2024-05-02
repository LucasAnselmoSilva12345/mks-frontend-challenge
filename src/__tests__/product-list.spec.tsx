import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Products } from '@/components/products';

describe('Product Component Rendering', () => {
  it('should render a list of products correctly', async () => {
    const mockProducts = [
      {
        id: 1,
        name: 'Iphone 11 128 GB',
        brand: 'Apple',
        description:
          'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
        photo:
          'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
        price: 5000.0
      },
      {
        id: 2,
        name: 'AirPods',
        brand: 'Apple',
        description:
          'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
        photo:
          'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
        price: 1200.0
      }
    ];

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <Products products={mockProducts} />
      </QueryClientProvider>
    );

    const productElement1 = await screen.findByText('Iphone 11 128 GB');
    const productElement2 = await screen.findByText('AirPods');

    expect(productElement1).toBeInTheDocument();
    expect(productElement2).toBeInTheDocument();
  });
});
