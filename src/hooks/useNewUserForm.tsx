import { useReducer } from 'react'
import {User} from '../types'

interface FormState {
    inputsValues: User
}

const initalState= {
    nick: '',
    subMonths: '',
    avatar: '',
    description: '',
  }

type FormReducerAction = {
    type: 'change_value',
    payload: {
      inputName: string,
      inputValue: string
    }
  } | {
    type: 'clear'
  }

const formReducer = (state:FormState['inputsValues'], action: FormReducerAction) => {
    switch(action.type){
      case 'change_value':
        const {inputName, inputValue} = action.payload
        return {
          ...state, 
          [inputName]: inputValue
        }
      case 'clear':
        return initalState
    }
  }

export default function useNewUserForm() {
  return useReducer(formReducer, initalState)
}
