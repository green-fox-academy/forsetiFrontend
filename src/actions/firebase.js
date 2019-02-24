import firebase from 'firebase/app';
require('dotenv').config();
const config = {
  ...process.env
};

export const app = firebase.initializeApp(config);

