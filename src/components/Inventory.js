import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import base, { firebaseApp } from '../base'

export default class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  }

  state = {
    uid: null,
    owner: null
  }

  authHandler = async authData => {
    const store = await base.fetch(this.props.storeId, { context: this })
    console.log('store', store)

    if(!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      })
    }

    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })

    console.log(authData)
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
  }

  render () {
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />
    }

    if (this.state.uid !== this.state.owner) {
      return
      <div>
        You are not the owner
      </div>
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish} />)
          )}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>load sample fishes</button>
      </div>
    )
  }
}
