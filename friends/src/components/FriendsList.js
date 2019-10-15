import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/api/data')
        .then(res => {
            console.log(res)
            setFriends(res.data)

        })
    }, [])
    
    return (
        <div className='friends-list'>
            <h1>hello from friends list</h1>
        </div>
    )
}

export default FriendsList;