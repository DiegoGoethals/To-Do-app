import './AddItem.css';
import './Users.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <h1>Log In</h1>
            <form>
                <label>Email</label>
                <input type="email" id="email" required value={email} onChange={e => {
                    setEmail(e.target.value);
                }} autoComplete='off'/>
                <label>Password</label>
                <input type="password" id="password" required value={password} onChange={e => {
                    setPassword(e.target.value);
                }}/>
                <button type="submit">Log In</button>
            </form>
            <Link to="/signup">
                <p>Don't have an account yet?<br/> Click here to sign up and keep track of your own to do's wherever and whenever you want</p>
                <button>Sign up</button>
            </Link>
        </div>
    );
}

export default LogIn;