import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders homepage hero text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heroElement = screen.getByText(/hey, i'm franklin samuvel/i);
  expect(heroElement).toBeInTheDocument();
});
