import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCuBYfVVe3hjX4xhvP_varz9f-M2He6YkM",
    authDomain: "catch-of-the-day-tanja.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tanja.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
