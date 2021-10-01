import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser(state, action: PayloadAction<boolean>) {
            state.user = action.payload
        }
    }
})



export default userSlice.reducer