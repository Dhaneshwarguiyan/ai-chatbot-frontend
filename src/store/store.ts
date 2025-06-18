import { configureStore } from "@reduxjs/toolkit";
import windowReducer from '@/slices/windowSlice';
import messageReducer from '@/slices/messageSlice';

export const store =  configureStore({
    reducer: {
        window:windowReducer,
        message:messageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;