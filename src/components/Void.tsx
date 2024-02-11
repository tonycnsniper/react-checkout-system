import React from 'react'
import { Button } from 'react-bootstrap'

import { useAppDispatch, useAppSelector } from '../hooks'
import { remove } from '../slices/shoppingSlice'


function Void() {
  const dispatch = useAppDispatch();
  const currentShoppingList = useAppSelector((state) =>
    state.shoppingList.value);

  const lastItem = currentShoppingList[currentShoppingList.length - 1];
  const isEmptyList = !currentShoppingList.length;
    
  return (
    <Button onClick={() => dispatch(remove(lastItem.Index))} disabled={isEmptyList}>
      Void
    </Button>
  )
}

export default Void