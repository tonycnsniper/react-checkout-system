import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { useAppSelector } from '../hooks';

interface ShoppingListItem {
  Index: Number,
  Name: String,
  Quantity: Number
}

function GroceryList() {
  const shoppingList = useAppSelector(state => state.shoppingList.value)
  return (
    <ListGroup>
      {
        shoppingList.map((shoppingItem: ShoppingListItem, index: Number) => (
          <ListGroupItem key={ index.toString() }>
            {shoppingItem.Name} - Quantity: {shoppingItem.Quantity.toString()}
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}

export default GroceryList;