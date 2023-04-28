import {auth} from '../../firebase_setup/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password).then((_) => {
        console.log("User logged in");
    }).catch((error) => {
        console.log(error.message);
    });
}

export default login;