import React from 'react'
import { render, screen } from '@testing-library/react'
import { useAppSelector } from '../hooks'
import Balance from './Balance'

jest.mock('../hooks', () => ({
    useAppSelector: jest.fn()
}))

describe('Balance Total Count Component', () => {
    const mockShoppingList: any = [{
        Index: 1,
        Name: 'Apples',
        Quantity: 2
    }]
    it('should show default value when loaded at the first time', () => {
        (useAppSelector as jest.Mock).mockImplementation(() => mockShoppingList);
        render(<Balance />)
        expect(screen.getByText('Balance: 1')).toBeInTheDocument();
    })
})