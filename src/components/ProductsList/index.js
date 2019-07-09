import React, { Component } from 'react'
import ProductCard from './ProductCard'
import styles from './products-list.module.scss'

class Products extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        console.log("names", data.products[0].name)
        this.setState({
          products: data.products
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className={styles.container}>
        <header >
          <h1> Products List </h1>
        </header>
        <div className={styles.productsContainer}>
          {this.state.products.map(product => {
            return (
            <ProductCard 
              key={product.id} 
              name={product.name}
              img_url={product.img_url}
              description={product.description}
              price={product.price}
            />)
          })}
        </div>

      </div>
    )
  }
}

export default Products