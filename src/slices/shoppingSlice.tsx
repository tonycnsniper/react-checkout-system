import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ShoppingListItem {
    Index: Number,
    Name: String,
    Quantity: Number
}

//define a type for shopping list state
export interface ShoppingListState {
    value: Array<ShoppingListItem>
}

const initialState: ShoppingListState = {
    value: [
        {
            "Index": 0,
            "Name": "Pineapple",
            "Quantity": 5
        }
    ]
}

export const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<ShoppingListItem>) => {
            state.value.push(action.payload)
        },
        remove: (state, action: PayloadAction<Number>) => {
            return {
                ...state,
                value: state.value.filter(shoppingItem => shoppingItem.Index !== action.payload)
            }
        }
    }
})

export const { increment, remove } = shoppingListSlice.actions;

export const selectShoppingList = (state: RootState) => state.shoppingList.value

export default shoppingListSlice.reducer