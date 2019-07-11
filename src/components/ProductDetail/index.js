import React, { Component } from 'react'
import Card from '../Card'

class ProductDetail extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    console.log("this.props", this.props)
    const id = this.props.match.params.id
    console.log("id", id)

    fetch(`http://localhost:4000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        this.setState({
          product: data.product
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h2> Product Detail </h2>
        <Card>
          <h2> Product ID: {this.state.product.name} </h2>
          <img src={this.state.product.img_url} alt="product" />
          <p> {this.state.product.description} </p>
          <h3> Price: ${this.state.product.price / 100}.00 </h3>
        </Card>
      </div>
    )
  }
}

export default ProductDetail