import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../../http/userApi";
import {setIsAuth} from "./auth-reducer";

export const initializeApp = createAsyncThunk('app/initialize', async (param, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setIsAuth(true))
         return  await authApi.check()
    } catch (e) {
        return rejectWithValue(null)
    }
})

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isInitialized: false
    },
    reducers:{

    },
    extraReducers: builder => {
        builder.addCase(initializeApp.fulfilled, (state, action) => {
            state.isInitialized = true
        })
    }
})

export default appSlice.reducer
