import React from 'react'
import {User} from '../types'

interface Props {
    users:Array<User>
}

const List = ({users}: Props) => {
  return (
    <ul>
    {
      users.map(user =>{
        return (
          <li key={user.nick}> 
          <img src={user.avatar} alt={`Avatar ${user.nick}`} />
          <h4>{user.nick} (<small>{user.subMonths}</small>)</h4>
          <p>{user.description}</p>
          </li>
        )
      })
    }
  </ul>
  )
}

export default List