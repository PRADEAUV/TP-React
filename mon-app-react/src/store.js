import { configureStore } from '@reduxjs/toolkit';
import fruitReducer from './components/features/fruit/fruitSlice';

export const store=configureStore({
    reducer:{
        fruit:fruitReducer
    },
})