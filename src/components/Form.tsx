import React from 'react';
import useNewUserForm from '../hooks/useNewUserForm';
import {User} from '../types'


interface FormProps {
  onNewUser: (newUser: User) => void
}

const Form = ({onNewUser}: FormProps) => {
  const [inputValues, dispatch] = useNewUserForm()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewUser(inputValues)
    handleClear()
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value} = e.target
   dispatch({
    type: 'change_value',
    payload:{
      inputName: name,
      inputValue:value
    }
   })
  }

  const handleClear = () => {
    dispatch({
      type:'clear'
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={inputValues.nick} name="nick" placeholder="nick" />
        <input onChange={handleChange} type="number" value={inputValues.subMonths} name="subMonths" placeholder="subMonths" />
        <input onChange={handleChange} type="text" value={inputValues.avatar} name="avatar" placeholder="avatar" />
        <textarea onChange={handleChange} name="description" value={inputValues.description} placeholder="description" />
        <button type="submit">Save new user</button>
      </form>
    </div>
  );
};

export default Form;
