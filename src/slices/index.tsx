import { configureStore } from '@reduxjs/toolkit'

import shoppingListReducer from './shoppingSlice';

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer
  }
})

export default store;