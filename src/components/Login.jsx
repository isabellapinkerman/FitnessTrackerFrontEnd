import React from 'react';
import {login} from '../api'
import {useNavigate} from 'react-router-dom'

const Login = () => {
const navigate = useNavigate();

    async function handleSubmit(event){
        try {
            event.preventDefault();
            const username = event.target[0].value;
            const password = event.target[1].value;
            const registeredUser= await login(username, password)
            const token = registeredUser.token
            localStorage.removeItem("token")
            localStorage.setItem("token", token)
            if(token){
                console.log("success")
            }else{
                console.log('failed')
            }
            navigate('/')
            location.reload()
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
                Login
            </button>
            </form>
        </div>
        </>
    )
}

export default Login;