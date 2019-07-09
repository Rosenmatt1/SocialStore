import React, { Component } from 'react'

class Products extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    console.log('mounted')

    fetch('http://localhost:4000/api/products')
    .then(res => res.json())
    .then(products => {
      console.log(products)
      this.setState({
        products: products
      }, () => {
          // console.log("products111", this.state.products[0])
      })
    })
    
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1> Products </h1>
        </header>
      </div>
    )
  }
}

export default Products