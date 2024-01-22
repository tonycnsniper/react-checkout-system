import React from 'react'
import { render, screen } from '@testing-library/react'
import { useAppSelector } from '../hooks'
import { RootState } from '../store'
import GroceryList from './GroceryList'

jest.mock('../hooks', () => ({
  useAppSelector: jest.fn()
}))

test('renders the shopping list items', () => {
  const mockShoppingList: any = [{
    Index: 1,
    Name: 'Apples',
    Quantity: 2
  }, {
    Index: 2,
    Name: 'Pear Ya',
    Quantity: 5
  }];

  (useAppSelector as jest.Mock).mockImplementation((state: RootState) => mockShoppingList)
  render(<GroceryList />)
  expect(screen.getByText('Apples - Quantity: 2')).toBeInTheDocument();
  expect(screen.getByText('Pear Ya - Quantity: 5')).toBeInTheDocument();
})