import React, { useState } from 'react';
import {User} from '../types'

interface FormState {
  inputsValues: User
}
interface FormProps {
  onNewUser: (newUser: User) => void
}

const Form = ({onNewUser}: FormProps) => {
  const [inputsValues, setInputsValues] = useState<FormState['inputsValues']>({
    nick: '',
    subMonths: '',
    avatar: '',
    description: '',
  });

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewUser(inputsValues)
    setInputsValues({
      nick: '',
      subMonths: '',
      avatar: '',
      description: '',
    })
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputsValues({
      ...inputsValues,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={inputsValues.nick} name="nick" placeholder="nick" />
        <input onChange={handleChange} type="number" value={inputsValues.subMonths} name="subMonths" placeholder="subMonths" />
        <input onChange={handleChange} type="text" value={inputsValues.avatar} name="avatar" placeholder="avatar" />
        <textarea onChange={handleChange} name="description" value={inputsValues.description} placeholder="description" />
        <button type="submit">Save new user</button>
      </form>
    </div>
  );
};

export default Form;
