import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from './Panel';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Control Panel Component', () => {
  const initialState = {
    shoppingList: {
      value: [{
        "Index": 1,
        "Name": "Apple",
        "Quantity": 10
      }]
    }
  };
  const mockStore = configureStore();
  let store;

  it('render control panel', () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Panel />
      </Provider>
    );
    const targetElement = screen.getByTestId('control-panel');
    expect(targetElement).toBeInTheDocument();
  })

  it('render login button', () => {
    store = mockStore(initialState);
  
      render(
        <Provider store={store}>
          <Panel />
        </Provider>
      );
    const targetElement = screen.getByTestId('checkout-login');
    expect(targetElement.textContent).toBe('Login');
  })
})

