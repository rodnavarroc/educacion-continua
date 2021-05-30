import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCOtys0Hg8LjB94ziDgqfCtECDCD2RGK18",
    authDomain: "educacion-continua-af4e1.firebaseapp.com",
    projectId: "educacion-continua-af4e1",
    storageBucket: "educacion-continua-af4e1.appspot.com",
    messagingSenderId: "1064333076388",
    appId: "1:1064333076388:web:13508c80b9f0065df2c331"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
