import React from 'react'
import { Container } from '../styles/Container.style'
export default function ItemContainer({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}
