import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';

function Balance () {
    const shoppingList = useAppSelector((state: RootState) => state.shoppingList.value)
    return (
        <>
            <Container>
                <Row>Balance: { shoppingList.length }</Row>
            </Container>
        </>
    )
}

export default Balance;