import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    historyWindow:false,
    menuWindow:false
}


const windowSlice = createSlice({
    name:"window",
    initialState:initialState,
    reducers:{
        toggleHistoryWindow: (state,action) => { state.historyWindow  = action.payload },
        toggleMenuWindow: (state,action) => {state.menuWindow = action.payload},
    }
})

export const {toggleHistoryWindow , toggleMenuWindow} = windowSlice.actions;
export default windowSlice.reducer;