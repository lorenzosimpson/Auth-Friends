import React, { useState } from 'react';


const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })


    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        

    }
    console.log(credentials)
    return (
        <div className='login'>
            <form onSubmit={login}>
                <input type='text' name='username' value={credentials.username} onChange={handleChanges} />
                <input type='password' name='password' value={credentials.password} onChange={handleChanges} />
            </form>
        </div>
    )
}

export default Login;