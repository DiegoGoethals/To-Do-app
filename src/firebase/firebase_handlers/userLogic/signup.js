import {auth} from '../../firebase_setup/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then((_) => {
        console.log("User created");
    }).catch((error) => {
        console.log(error.message);
    });
}

export default signup;