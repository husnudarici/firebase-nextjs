import React from 'react'
import type { ProductsList } from './types'

const ProductsList:React.FC<ProductsList> = ({ items }) => {
  return (
    <>
      <div>ProductsList</div>
      <ul>
        {items?.map((p) => (
          <li key={p.id}>
            {p.name} — {p.price}₺
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductsList