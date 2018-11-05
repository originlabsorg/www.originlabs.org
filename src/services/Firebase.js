import firebase from 'firebase';
import 'firebase/database';
import config from '../config/firebaseConfig';

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.database = firebase.database;
    }
}

//export singleton instance
export default new Firebase();
