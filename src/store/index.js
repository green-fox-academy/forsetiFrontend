import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import 'firebase/database';
import 'firebase/firestore';
import { firebase as fbConfig } from './config';
import firebase from 'firebase/app';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';


export default function configureStore(initialState = {}, history) {
  firebase.initializeApp(fbConfig);

  const reduxFirebaseConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableLogging: false
  };

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase, reduxFirebaseConfig),
    reduxFirestore(firebase),
    typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )(createStore);
  const store = createStoreWithMiddleware(rootReducer);
  return store;
}
