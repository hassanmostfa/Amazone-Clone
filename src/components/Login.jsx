import React  from 'react'
import {Link} from "react-router-dom"

function Login() {
    
    return (
        <div className='login'>
        <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className='login__logo' />
        </Link>
        <div className="login__container">
            <h1>Sign In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="email" />
                <h5>Password</h5>
                <input type="password"/>
                <br />
                <button className='login__signInButton' type='submit'>Sign In</button>
            </form>
            <p>By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button className='login__registerButton'>Create Your Amazone Account</button>
        </div>
    </div>
    )
}

export default Login ;