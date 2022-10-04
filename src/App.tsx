import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {User} from './types';


interface AppState {
  users: User[]
}

const initialState = [
  {
    nick: 'Omar',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?img=65',
    description:'Un chico que esta aprendiendo a programar'
  },
  {
    nick: 'Pedro',
    subMonths: 6,
    avatar: 'https://i.pravatar.cc/150?u=Pedro'
  }
]

function App() {

  const [users, setUsers] = useState<AppState['users']>([])

  useEffect(()=>{
    setUsers(initialState)
  },[])


  const handleNewUser = (newUser: User): void => {
    setUsers(users => ([...users, newUser]))
  }

  return (
    <div className="App">
      <h1>Users</h1>
     <List users={users}/>
     <Form onNewUser={handleNewUser}/>
    </div>
  );
}

export default App;
