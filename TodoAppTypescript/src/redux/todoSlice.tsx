import { createSlice } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'
import type { PayloadAction } from '@reduxjs/toolkit'

// statte kullanacagımız verilerin tipini tanımlıyoruz
// bunu Types.tsx te genel tanımlamasını yaptık ve buraya import ettik

// state'lerimizi tanımlıyoruz
const initialState: TodoInitialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    // * action:PayloadAction<TodoType> --> actionun tipi PayloadAction sonucu fonksiona gelecek verinin tipini veriyoruz tipi Generik tip <TodoType>  olacak tipin türünü Types.tsx klasöründe belirledik
    createTodo:(state:TodoInitialState , action:PayloadAction<TodoType>)=>{

        // action.payload --> aksion sonucu dönen <TodoType> tipinde veriyi state' mizin üzerine setliyor 
        state.todos=[...state.todos,action.payload]
    },

    // burada action:PayloadAction sonucu dönen verimiz state --> id olduğu için onu da type.tsx içinde <number> olarak belirttiğimiz için <number> oluyr
    removeTodoById:(state:TodoInitialState, action:PayloadAction<number>)=>{

        // id verilen veriyi silme işlemi için payload dan gelen verinin id sine eşit olmayan state 'i filtreleyip state'e setledik
        state.todos = [...state.todos.filter((todo:TodoType)=> todo.id != action.payload)]
    },
    updateTodo:(state:TodoInitialState, action:PayloadAction<TodoType>)=>{
        state.todos=[...state.todos.map((todo:TodoType)=>todo.id !== action.payload.id ? todo :action.payload)]
    }
   
  },
})


export const { createTodo,removeTodoById , updateTodo} = todoSlice.actions

export default todoSlice.reducer