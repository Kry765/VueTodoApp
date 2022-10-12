import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import '@firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBCY41BT3zV_5_U0ylQwy4JAT53OodtDKo',
	authDomain: 'register-login-553d3.firebaseapp.com',
	projectId: 'register-login-553d3',
	storageBucket: 'register-login-553d3.appspot.com',
	messagingSenderId: '672120037155',
	appId: '1:672120037155:web:0ad8cb0a348ba032a1b696',
	measurementId: 'G-DDE3D2Y80C',
}

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
