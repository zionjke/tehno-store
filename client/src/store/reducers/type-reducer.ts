import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypeBrandType} from "../../../types";
import {deviceApi} from "../../http/deviceApi";

export const fetchTypes = createAsyncThunk('types/fetchTypes', async (param, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await deviceApi.fetchTypes()
        return data
    } catch (e) {
        return rejectWithValue(null)
    }
})

export const createType = createAsyncThunk('types/createType', async (name: string, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await deviceApi.createType(name)
        return data
    } catch (e) {
        return rejectWithValue(null)
    }
})

const typesSlice = createSlice({
    name: 'types',
    initialState: {
        types: [] as TypeBrandType[],
        selectedType: {} as TypeBrandType
    },
    reducers: {
        setSelectedType(state, action: PayloadAction<TypeBrandType>) {
            state.selectedType = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTypes.fulfilled, (state, action) => {
            state.types = action.payload
        });
        builder.addCase(createType.fulfilled, (state, action) => {
            state.types.unshift(action.payload)
        });
    }
})

export const {
    setSelectedType
} = typesSlice.actions

export default typesSlice.reducer