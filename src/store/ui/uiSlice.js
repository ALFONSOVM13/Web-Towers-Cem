import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleSideMenu: true,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSideMenu: ( state )=>{
            state.toggleSideMenu = !state.toggleSideMenu            
        },
        hideSideMenu: ( state ) => {
            state.toggleSideMenu = false
        }
    },
});

export const { toggleSideMenu, hideSideMenu } = uiSlice.actions;
