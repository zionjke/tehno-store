import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        user: {}
    },
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        setUser(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    }
})

export const {
setIsAuth
} = userSlice.actions


export default userSlice.reducer