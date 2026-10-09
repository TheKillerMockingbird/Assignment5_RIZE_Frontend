import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import CartItem from '../CartItem';

describe('CartItem', () => {
  const mockItem = {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99
  };

  const mockOnRemove = vi.fn();

  it('renders without crashing', () => {
    render(<CartItem item={mockItem} onRemove={mockOnRemove} />);
  });

  it('displays the item name', () => {
    render(<CartItem item={mockItem} onRemove={mockOnRemove} />);
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
  });

  it('displays the item price', () => {
    render(<CartItem item={mockItem} onRemove={mockOnRemove} />);
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('calls onRemove when the Remove button is clicked', async () => {
    const user = userEvent.setup();
    render(<CartItem item={mockItem} onRemove={mockOnRemove} />);

    const removeButton = screen.getByRole('button', { name: /Remove/i });
    await user.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledTimes(1);
  });
});