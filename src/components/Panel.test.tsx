import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from './Panel';

test('render control panel', () => {
    render(<Panel/>);
    const targetElement = screen.getByTestId('control-panel');
    expect(targetElement).toBeInTheDocument();
})

test('render login button', () => {
    render(<Panel />);
    const targetElement = screen.getByTestId('checkout-login');
    expect(targetElement.textContent).toBe('Login');
})