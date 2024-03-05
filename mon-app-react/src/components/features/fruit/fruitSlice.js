import { createSlice } from '@reduxjs/toolkit';

const fruitSlice=createSlice({
    name:'fruit',
    initialState:{
        value:""
    },
    reducers:{
        setFruit:(state,action)=>{
            state.value=action.payload
        }
    }
});

export const {setFruit}=fruitSlice.actions;
export default fruitSlice.reducer