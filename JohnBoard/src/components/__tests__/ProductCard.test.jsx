import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://placehold.co/600x400',
    description: 'Premium noise-cancelling headphones'
  };

  const mockAddToCart = vi.fn();

  it('renders without crashing', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);
  });

  it('displays the product name', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
  });

  it('displays the product price', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('contains an "Add to Cart" button', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);
    expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeInTheDocument();
  });

  // New interaction test
  it('calls onAddToCart when "Add to Cart" button is clicked', async () => {
    const user = userEvent.setup();
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    const button = screen.getByRole('button', { name: /Add to Cart/i });
    await user.click(button);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});