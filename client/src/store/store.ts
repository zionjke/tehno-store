import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-reducer";
import brandReducer from "./reducers/brand-reducer";
import deviceReducer from "./reducers/device-reducer";
import typeReducer from "./reducers/type-reducer";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    devices: deviceReducer,
    types: typeReducer,
    brands: brandReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>