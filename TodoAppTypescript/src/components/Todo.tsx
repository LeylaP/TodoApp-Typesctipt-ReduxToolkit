import React, {useState} from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById , updateTodo} from '../redux/todoSlice';

interface TodoProps{
  todoProps:TodoType,
}

export default function Todo({todoProps}:TodoProps) {

  // initial state içindeki verimizi destruction ederek id ve contentini aldık
const {id,content}= todoProps;

// sclice içindeni fonksionlara ulaşmak için import ettik ve tanımladık
const dispatch = useDispatch();

const [editable, setEditable]=useState<boolean>(false);
const [newTodo,setNewTodo]=useState<string>(content);

  // icona tıklandığında o id ye sahip elementin id sini slicer içindeki fontsiyona state den filtreleyip silmesi için gönderen fonksion yazdık
const handleRemoveTodo=()=>{
  dispatch(removeTodoById(id))
}
const handleUpdateTodo=()=>{
  const payload:TodoType={
    id: id,
    content:newTodo
  }
  dispatch(updateTodo(payload))
  setEditable(false);
}

// inputun başlangıç değeri --> value={newTodo}

  return (
    <div className='flex-row todo-content' >
      
    {editable ? <input className='todo-content' type="text"  style={{width:'80%', border:'none', borderBottom:'1px solid lightgrey', outline:'none', backgroundColor:' #242424'}} value={newTodo} onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {setNewTodo(e.target.value)}}/> : <div>{content}</div>}
      <div>
      
      <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons'/>
      {editable ? <FaCheck className='icons' onClick={handleUpdateTodo}/> : <FaRegEdit onClick={()=>setEditable(true)} className='icons'/> }
      
      </div>
    </div>
  )
}
