import React from 'react';
import {useDispatch} from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';
import { useState } from 'react';

export default function TodoCreate() {

    const dispatch = useDispatch();

    const[newTodo,setNewTodo]=useState<string>('');

   const handleCreateTodo=()=>{

    // inputumuzun içinde veri çevresindeki boşluklar kırpıldıktan sonra yok ise alert dön !
    if(newTodo.trim().length==0){
        alert("todo giriniz!")
        return;
    }
    const payload:TodoType ={

        //Math.random() --> 0-1 arasında değer üretir
        // Math.floor() --> yuverlar
        id:Math.floor(Math.random()*99999999),
        content: newTodo,
    }
    dispatch(createTodo(payload))
    setNewTodo('');
   }

   // e 'nin tipi her zaman React ın kendisinden gelen tipdir --> React.ChangeEvent<HTMLInputElement>

  return (
    <div className='todo-create'>
    <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)} className='todo-input' placeholder='Todo Giriniz ...' type="text"/>
    <button onClick={handleCreateTodo} className='todo-create-button'>Olustur</button>
      
    </div>
  )
}
