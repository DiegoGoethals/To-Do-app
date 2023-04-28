import './AddItem.css';
import { useState } from 'react';

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
        </div>
    );
}

export default LogIn;