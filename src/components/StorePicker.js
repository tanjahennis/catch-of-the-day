import React, { Component } from 'react'
import { getFunName } from "../helpers"

export default class StorePicker extends Component {
  myInput = React.createRef()

  goToStore = event => {
    event.preventDefault()
    console.log(this)
  }

  render () {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required placeholder="Store Name"
          defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}
