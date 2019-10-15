import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Friend from './Friend';


const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState({})

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)

        })
        .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name] : e.target.value
        })
        console.log(newFriend)
    }

    const submitForm = e => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            setFriends({
                ...friends,
                newFriend
            })
            console.log(friends, 'friends arr')
        }
        )
    }
    return (
        <div className='friends-list-c'>
            <div class='form-container'>
            {/* <form onSubmit={submitForm}>
                <input type='text' name='name' placeholder='Name' value={newFriend.name} onChange={handleChange}/>
                <input type='text' name='age' placeholder='Age' value={newFriend.age} onChange={handleChange}/>
                <input type='text' name='email' placeholder='Email' value={newFriend.email} onChange={handleChange}/>
                <button>Add Friend</button>
            </form> */}
            

        <Form onSubmit={submitForm}>
        <FormGroup row>
          <Label for="Name" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type='text' name='name' placeholder='Name' value={newFriend.name} onChange={handleChange} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="name" sm={2}>Age</Label>
          <Col sm={10}>
            <Input type='text' name='age' placeholder='Age' value={newFriend.age} onChange={handleChange} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="name" sm={2}>Age</Label>
          <Col sm={10}>
            <Input type='text' name='email' placeholder='Email' value={newFriend.email} onChange={handleChange}/>
          </Col>
        </FormGroup>
        
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
            </div>
            
            <div className='friends-container'>
            {friends.map(friend => (
                <Friend name={friend.name} key={friend.id} age={friend.age} email={friend.email} />
            ))}
            </div>
            
        </div>
    )
}

export default FriendsList;



      
 
  
