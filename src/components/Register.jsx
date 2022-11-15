import React from 'react';
import {register} from '../api';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    // let message = "please register before logging in"

async function handleSubmit(event){
    try {
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        const registerUser= await register(username, password);
        const token = registerUser.token
        if(token){
            console.log("success")
            event.target[0].value = null
            event.target[1].value = null
            navigate('/login')
        }else{
            // message = "failed to register, username is taken"
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
        {/* <div>{`${message}`}</div> */}
        </div>
        </>
    )
}

export default Register;