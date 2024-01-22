import shoppingListReducer, { increment, ShoppingListState } from './shoppingSlice'

describe('shoppingList reducer', () => {
  const initialState: ShoppingListState = {
    value: [
      {
        Index: 1,
        Name: "Pineapple",
        Quantity: 5
      }
    ]
  }

  it('should handle initial state', () => {
    expect(shoppingListReducer(undefined, { type: 'known' })).toEqual({
      value: [
        {
          Index: 1,
          Name: "Pineapple",
          Quantity: 5
        }
      ]
    })
  })

  it('should handle increment', () => {
    const newItem = { Index: 3, Name: 'Beef Steak', Quantity: 3};
    const actual = shoppingListReducer(initialState, increment(newItem));
    expect(actual.value).toEqual([
      ...initialState.value,
      newItem
    ])
  })
})