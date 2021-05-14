import React from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const LoginForm = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const authObject = {
            'Project-ID' : "3d80913d-4794-46b0-862a-55d8ee56141e" ,
            'User-Name' : username,
            'User-Secret' : password
        };
        try {
                axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
      
            window.location.reload();
            setError('');
          } catch (err) {
            setError('Oops, incorrect credentials.');
        }
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="UserName" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm;