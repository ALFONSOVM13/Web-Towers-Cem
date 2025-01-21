import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imageCategories: {
        currentPage: 0,
        totalPages: 0,
        pageSize: 0,
        totalEvents: 0,
        data: []
    }
}

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImageCategories: (state, action)=> {
            state.imageCategories = action.payload
        },
    }
})

export const { setImageCategories } = imagesSlice.actions