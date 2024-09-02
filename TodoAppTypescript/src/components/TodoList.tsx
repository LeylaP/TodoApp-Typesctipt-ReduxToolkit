import React from 'react'
import Todo from './Todo';
import { RootState } from '../redux/store';
import { useSelector }  from 'react-redux';
import { TodoType } from '../types/Types';

export default function TodoList() {

        // useState kullanarak initial state içindeki todo state mizi çekiyoruz ve tipini belirliyoruz
    const{todos} =useSelector((state:RootState)=>state.todo)

  return (
    <div>
        {todos && todos.map((todo:TodoType)=>(
            <Todo key={todo.id} todoProps={todo}/>

        ))}
      
    </div>
  )
}
