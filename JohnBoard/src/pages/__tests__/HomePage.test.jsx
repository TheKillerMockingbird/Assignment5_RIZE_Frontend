import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
  });

  it('displays the main heading "Why Shop with Us?"', () => {
    render(<HomePage />);
    expect(screen.getByText(/Why Shop with Us\?/i)).toBeInTheDocument();
  });

  it('displays the welcome hero text', () => {
    render(<HomePage />);
    // This matches the text inside your Hero component
    expect(screen.getByText(/Welcome to JohnBoard Store/i)).toBeInTheDocument();
  });
});