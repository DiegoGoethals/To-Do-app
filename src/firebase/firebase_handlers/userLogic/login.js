import {auth} from '../../firebase_setup/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

async function login(email, password) {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error.message);
    }
}

export default login;