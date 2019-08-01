import React, { Component } from 'react'
import Card from '../Card'
import Loader from '../Loader'
import styles from './productDetail.module.scss'

class ProductDetail extends Component {
  state = {
    product: {},
    isLoaded: false
  }

  componentDidMount() {
    console.log("this.props", this.props)
    const id = this.props.match.params.id
    fetch(`http://localhost:4000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        this.setState({
          product: data.product,
          isLoaded: true
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  initiateStripeCheckout = async () => {
    console.log("Checkout")
    const stripe = window.Stripe('pk_test_KvKqn0sBllyJWVVK04UUBaQN00tZcJimdy')
    const { product } = this.state

    const lineItem = {
      name: product.name,
      description: product.description,
      images: [product.img_url],
      amount: product.price,
      currency: 'usd',
      quantity: 1,
    }

    try {
      // Initiate checkout session to get session id
      const response = await fetch('http://localhost:4000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(lineItem)
      })

      const data = await response.json()
      const sessionId = data.session.id

      // Redirect to checkout
      const result = await stripe.redirectToCheckout({ sessionId })
      // TODO: add error handling for result.error
    } catch (error) {
      console.log('STRIPE ERROR', error)
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h2> Product Detail </h2>


        {this.state.isLoaded
          ?
          // <div className={styles.card}>
          <Card>
            <h2> Product ID: {this.state.product.name} </h2>
            <img src={this.state.product.img_url} alt="product" />
            <p> {this.state.product.description} </p>
            <h3> Price: ${this.state.product.price / 100}.00 </h3>
            <button onClick={this.initiateStripeCheckout}> Purchase </button>
          </Card>
          // </div>
          :
          <Loader />
        }
      </div>
    )
  }
}

export default ProductDetail