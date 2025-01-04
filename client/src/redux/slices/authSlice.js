'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload
        },
        logOut: (state) => {
            state.userInfo = null
        },
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer