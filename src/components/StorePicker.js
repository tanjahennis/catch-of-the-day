import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getFunName } from "../helpers"

export default class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  myInput = React.createRef()

  goToStore = (event) => {
    event.preventDefault()
    console.log(this.myInput.value.value)
    console.log('second', this)

    const storeName = this.myInput.value.value

    this.props.history.push(`/store/${storeName}`)
  }

  render () {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}
