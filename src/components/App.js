import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes }

    fishes[`fish${Date.now()}`] = fish

    this.setState({ fishes })
  }

  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}
