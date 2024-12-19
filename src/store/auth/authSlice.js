import { AUTH_STATUS } from '@/constants/auth'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    status: AUTH_STATUS.checking,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action)=> {
            state.status = AUTH_STATUS.authenticated,
            state.user = action.payload
        },
        logout: ( state ) => {
            state.user = undefined
            state.status = AUTH_STATUS.notAuthenticated
        }
    },
})

export const { login, logout } = authSlice.actions
