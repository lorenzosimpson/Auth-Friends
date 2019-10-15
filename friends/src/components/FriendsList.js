import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
    
    return (
        <div className='friends-list'>
            <form>
                <input type='text' name='name' placeholder='Name' value={newFriend.name} onChange={handleChange}/>
                <input type='text' name='age' placeholder='Age' value={newFriend.age} onChange={handleChange}/>
                <input type='text' name='email' placeholder='Email' value={newFriend.email} onChange={handleChange}/>
                <button>Add Friend</button>
            </form>

            {friends.map(friend => (
                <Friend name={friend.name} key={friend.id} age={friend.age} email={friend.email} />
            ))}
        </div>
    )
}

export default FriendsList;