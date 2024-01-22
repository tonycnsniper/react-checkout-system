import React from 'react'
import Button from 'react-bootstrap/Button'

import { useAppDispatch } from '../hooks'
import { increment } from '../slices/shoppingSlice'

function Scanner() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Button variant="secondary" size="lg" onClick={()=> dispatch(increment({
        "Index": 2,
        "Name": "Pear Gold",
        "Quantity": 4
      }))}>
        Scanner
      </Button>
    </>
  )
}

export default Scanner;