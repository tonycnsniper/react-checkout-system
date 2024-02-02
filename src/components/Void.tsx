import React from 'react'
import { Button } from 'react-bootstrap'

import { useAppDispatch, useAppSelector } from '../hooks'
import { remove } from '../slices/shoppingSlice'


function Void() {
  const dispatch = useAppDispatch();
  const lastItem = useAppSelector((state) =>
    state.shoppingList.value[state.shoppingList.value.length - 1]);
    
  return (
    <Button onClick={() => dispatch(remove(lastItem.Index))}>
      Void
    </Button>
  )
}

export default Void