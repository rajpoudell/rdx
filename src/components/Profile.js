import React from 'react'
import {useSelector } from 'react-redux'

export  const Profile = () => {
    const user = useSelector((state) => state.user.value)
  return(
    <div>
        <button>Profile Page</button>
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}
export default Profile