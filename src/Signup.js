import './AddItem.css';
import './Users.css';
import { useState } from 'react';
import signup from './firebase/firebase_handlers/userLogic/signup';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        signup(email, password).then((res) => {
            window.location.href = "/";
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="signup">
            <h1>Sign up</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" id="email" required value={email} onChange={e => {
                    setEmail(e.target.value);
                }} autoComplete='off'/>
                <label>Password</label>
                <input type="password" id="password" required value={password} onChange={e => {
                    setPassword(e.target.value);
                }}/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default Signup;