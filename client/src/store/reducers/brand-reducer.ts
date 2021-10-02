import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypeBrandType} from "../../../types";
import {deviceApi} from "../../http/deviceApi";

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async (param, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await deviceApi.fetchBrands()
        return data
    } catch (e) {
        return rejectWithValue(null)
    }
})

const brandsSlice = createSlice({
    name: 'brands',
    initialState: {
        brands: [] as TypeBrandType[],
        selectedBrand: {} as TypeBrandType
    },
    reducers: {
        setSelectedBrand(state, action: PayloadAction<TypeBrandType>) {
            state.selectedBrand = action.payload
        }
    },
    extraReducers:builder => {
        builder.addCase(fetchBrands.fulfilled, (state,action) => {
            state.brands = action.payload
        })
    }
})

export const {
    setSelectedBrand
} = brandsSlice.actions

export default brandsSlice.reducer