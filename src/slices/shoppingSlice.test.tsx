import shoppingListReducer,
{
  increment,
  remove,
  ShoppingListState 
} from './shoppingSlice'

describe('shoppingList reducer', () => {
  const initialState: ShoppingListState = {
    value: [
      {
        Index: 0,
        Name: "Pineapple",
        Quantity: 5
      }
    ]
  }

  it('should handle initial state', () => {
    expect(shoppingListReducer(undefined, { type: 'known' })).toEqual({
      value: [
        {
          Index: 0,
          Name: "Pineapple",
          Quantity: 5
        }
      ]
    })
  })

  it('should handle increment', () => {
    const newItem = { Index: 1, Name: 'Beef Steak', Quantity: 3 };
    const actual = shoppingListReducer(initialState, increment(newItem));
    expect(actual.value).toEqual([
      ...initialState.value,
      newItem
    ])
  })

  it('should handle remove last item', () => {
    const actual = shoppingListReducer(initialState, remove(0))
    expect(actual.value).toEqual([])
  })
})