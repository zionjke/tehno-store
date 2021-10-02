import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authApi, UserParamsType, UserResponceType} from "../../http/userApi";


export const login = createAsyncThunk('auth/login', async (userData: UserParamsType, {dispatch, rejectWithValue}) => {
    try {
        return await authApi.login(userData)
    } catch (e) {
        return rejectWithValue(null)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: {} as UserResponceType
    },
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        logOut(state,action:PayloadAction) {
            state.isAuth = false
        }
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state,action) => {
            // @ts-ignore
            state.user = action.payload
            state.isAuth = true
        })
    }
})

export const {
    setIsAuth,logOut
} = authSlice.actions


export default authSlice.reducer