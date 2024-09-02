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
    }
   
  },
})


export const { createTodo} = todoSlice.actions

export default todoSlice.reducer