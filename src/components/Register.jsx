import React, {useState} from 'react';
import {register} from '../api';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('Please register username and password')

async function handleSubmit(event){
    try {
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        if(password.length < 8){
            setMessage('Password is less than 8 characters') 
            return
          }
        const registerUser= await register(username, password);
        const token = registerUser.token
        if(token){
            console.log("success")
            event.target[0].value = null
            event.target[1].value = null
            navigate('/login')
        }else{ 
            setMessage('Username already exists')
            console.log('failed')
        }
        localStorage.removeItem("token")

    } catch (error) {
        console.log(error)
    }
}

    return (
        <>
        <div>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Enter username here" required></input>
            <label htmlFor="password">Password:</label>
            <input type="text" placeholder="Enter password here" required></input>
            <button type="submit">
                Register
            </button>
        </form>
        <div className="registerMessage">{message}</div>
        </div>
        </>
    )
}

export default Register;