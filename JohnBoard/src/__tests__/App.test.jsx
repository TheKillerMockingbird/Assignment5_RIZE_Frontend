import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from '../App';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    removeItem: vi.fn((key) => {
      delete store[key];
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('App', () => {
  beforeEach(() => {
    // Fully reset the mock store and call history before every test
    localStorageMock.clear();
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  it('renders without crashing', () => {
    render(<App />);
  });

  it('loads cart data from localStorage on startup', () => {
    const savedCart = [
      { id: 1, name: 'Wireless Headphones', price: 99.99 }
    ];
    
    // Make getItem return our fake cart
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(savedCart));

    render(<App />);

    // Badge should show 1
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('saves cart changes to localStorage', () => {
    // Start with an empty cart
    localStorageMock.getItem.mockReturnValueOnce(null);

    render(<App />);

    // useEffect should have saved an empty array
    expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
  });
});