import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

export default function Todo() {
  return (
    <div className='flex-row todo-content' >
      <div>Ben şlk todoyum...</div>
      <div>
      <FaCheck className='icons'/>
      <IoMdRemoveCircleOutline className='icons'/>
      <FaRegEdit className='icons'/>
      </div>
    </div>
  )
}
