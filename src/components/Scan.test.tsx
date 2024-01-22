import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Scanner from './Scan'
import { useAppDispatch } from '../hooks'
import { increment } from '../slices/shoppingSlice'

jest.mock('../hooks', () => ({
    useAppDispatch: jest.fn()
}))

jest.mock('../slices/shoppingSlice', () => ({
    increment: jest.fn()
}))

describe('Scanner Component', () => {
    it('dispatches increment action with correct payload when button is clicked', () => {
        const mockDispatch = jest.fn();
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

        render(<Scanner />)
        const buttonElement = screen.getByText('Scanner');
        fireEvent.click(buttonElement);

        expect(increment).toHaveBeenCalledWith({
            Index: 2,
            Name: "Pear Gold",
            Quantity: 4
        });

        expect(mockDispatch).toHaveBeenCalledWith(increment({
            Index: 2,
            Name: "Pear Gold",
            Quantity: 4
        }))
    })
})