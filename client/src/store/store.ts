import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import brandReducer from "./reducers/brand-reducer";
import deviceReducer from "./reducers/device-reducer";
import typeReducer from "./reducers/type-reducer";


const rootReducer = combineReducers({
    devices: deviceReducer,
    types: typeReducer,
    brands: brandReducer,
    auth: authReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>