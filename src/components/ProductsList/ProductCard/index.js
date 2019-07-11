import React from 'react'
import Card from '../../Card'
import styles from './product-card.module.scss'

import { Link } from 'react-router-dom'

const ProductCard = (name, img_url, price, description, id,) => {
  return (
    <Link to={`/products/${id}`} >
      <Card> <h2> Product Card </h2>
        <img className={styles.image} src={img_url} alt="product" />
        {/* <p> {name} </p> */}
        <p> Price: ${price / 100}.00 </p>
      </Card>
    </Link>
  )
}

export default ProductCard