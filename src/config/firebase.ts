import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, Firestore, collection } from 'firebase/firestore';





const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const Providers = {google: new GoogleAuthProvider()}
export const db: Firestore = getFirestore(app);
export const getHelmetsCollection = () => collection(db, 'Helmets');
export {app as firebase}
