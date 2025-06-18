import { createSlice } from "@reduxjs/toolkit";

interface messageType{
    text:string;
    sender:"bot" | string;
}

const initialState:messageType[] = [];


const messageSlice = createSlice({
    name:"message",
    initialState:initialState,
    reducers:{
        addMessage:(state,action)=>{
            state.push(action.payload);
        },
        setMessage:(state,action)=>{
            state = action.payload;
        }
    }
})

export const {addMessage,setMessage} = messageSlice.actions;
export default messageSlice.reducer;