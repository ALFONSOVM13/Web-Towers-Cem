import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imageCategories: {
        currentPage: 0,
        totalPages: 0,
        pageSize: 0,
        totalImageCategories: 0,
        data: []
    },
    images: {
        // "cat:1-page:1": {
        //     currentPage: 1,
        //     totalPages: 1,
        //     pageSize: 10,
        //     totalImages: 10,
        //     data: [
        //         {
        //             id: 1,
        //             url: 'https://www.google.com',
        //             imageCategory: 1
        //         },
        //         {
        //             id: 2,
        //             url: 'https://www.google.com',
        //             imageCategory: 1
        //         },
        //         {
        //             id: 3,
        //             url: 'https://www.google.com',
        //             imageCategory: 1
        //         }
        //     ]
        // },
    }
}

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImageCategories: (state, action)=> {
            state.imageCategories = action.payload
        },
        setImages: ( state, action )=> {
            const { payload } = action
            state.images[`cat:${payload.imageCategory}-page:${payload.currentPage}`] = payload
        }
    }
})

export const { setImageCategories, setImages } = imagesSlice.actions
