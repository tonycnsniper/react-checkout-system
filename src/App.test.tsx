import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders control panel', () => {
  render(<App />);
  const targetElement = screen.getByTestId("control-panel")
  expect(targetElement).toBeInTheDocument();
});

test('render grocery list', () => {
  render(<App />);
  const targetElement = screen.getByTestId("grocery-list");
  expect(targetElement).toBeInTheDocument();
})
