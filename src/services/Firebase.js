import firebase from 'firebase'
import 'firebase/database'
import { firebase as firebaseConfig } from '../config'

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.database = firebase.database
  }
}

//export singleton instance
export default new Firebase()
