import React, {Component} from 'react'

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
      <Card>
      <h2> Product ID: {this.state.product.name} </h2>
        <img src={this.state.product.img_url} alt="product" />
        {/* <p> {name} </p> */}
        <p> Price: ${this.state.product.price / 100}.00 </p>
      </Card>
    )
  }
}

export default ProductDetail