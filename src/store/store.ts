import { configureStore } from "@reduxjs/toolkit";
import windowReducer from '@/slices/windowSlice';

export const store =  configureStore({
    reducer: {
        window:windowReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;