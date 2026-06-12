// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoKey title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoKey/i);
    expect(titleElement).toBeInTheDocument();
});
