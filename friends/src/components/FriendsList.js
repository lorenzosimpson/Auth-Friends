import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';


const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)

        })
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div className='friends-list'>
            {friends.map(friend => (
                <Friend name={friend.name} key={friend.id}/>
            ))}
        </div>
    )
}

export default FriendsList;