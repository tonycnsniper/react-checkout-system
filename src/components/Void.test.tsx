import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Void from './Void'
import { remove } from '../slices/shoppingSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import { RootState } from '../store'

jest.mock('../hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn()
}))

jest.mock('../slices/shoppingSlice', () => ({
  remove: jest.fn()
}))

describe('Void Component', () => {
  it('Dispatch void last item action correctly when void button is clicked', () => {
    const mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch)

    const mockLastItem = [{
      "Index": 1,
      "Name": "Test1"
    }];
    (useAppSelector as jest.Mock).mockImplementation((state: RootState) => mockLastItem)

    render(<Void />)

    const voidButton = screen.getByText('Void')
    fireEvent.click(voidButton)

    expect(remove).toHaveBeenCalledWith(1)
    expect(mockDispatch).toHaveBeenCalled()
  })

  it('Dispatch would not be triggered when shopping list is empty', () => {
    const mockDispatch = jest.fn();

    const mockCurrentShopingList = [];
    (useAppSelector as jest.Mock).mockImplementation(() => mockCurrentShopingList);

    render(<Void />);

    const voidButton = screen.getByText('Void');
    fireEvent.click(voidButton);

    expect(mockDispatch).not.toHaveBeenCalled();
  })
})