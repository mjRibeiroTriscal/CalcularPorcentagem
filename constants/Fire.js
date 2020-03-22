import * as firebase from 'firebase'
import '@firebase/firestore'

var firebaseConfig = {
	apiKey: "AIzaSyD-VwiuG0lrB1PLtS9jPY1tr8GcMUwKIVc",
	authDomain: "primeiro-app-backend.firebaseapp.com",
	databaseURL: "https://primeiro-app-backend.firebaseio.com",
	projectId: "primeiro-app-backend",
	storageBucket: "primeiro-app-backend.appspot.com",
	messagingSenderId: "88965980484",
	appId: "1:88965980484:web:a14e399f1549b3e17d3711",
	measurementId: "G-MQL9J9XDE0"
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
