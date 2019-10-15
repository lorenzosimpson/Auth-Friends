import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friends')
        })
        .catch(err => console.log(err.response))
    }
    
    console.log(credentials)
    return (
        <div className='login'>
            {/* <form onSubmit={login}>
                <input type='text' name='username' value={credentials.username} onChange={handleChanges} />
                <input type='password' name='password' value={credentials.password} onChange={handleChanges} />
                <button>Log in</button>
            </form> */}


            <Form className='login-form' onSubmit={login}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type='text' name='username' value={credentials.username} onChange={handleChanges} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type='password' name='password' value={credentials.password} onChange={handleChanges} />
                </FormGroup>
                <Button>Log in</Button>
            </Form>
        </div>
    )
}

export default Login;