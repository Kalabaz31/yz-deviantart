import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarExpanded: false,
};


export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        reset: (state) => {
            state.isSidebarExpanded = false;
        },
        toggleSidebar: (state) => {
            state.isSidebarExpanded = !state.isSidebarExpanded
        }
    },
});

export const { reset, toggleSidebar } = layoutSlice.actions;

export default layoutSlice.reducer;
