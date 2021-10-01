import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypeBrandType} from "../../../types";

const brandsSlice = createSlice({
    name: 'brands',
    initialState: {
        brands: [{id: 1, name: 'Samsung'}, {id: 2, name: 'Apple'}],
        selectedBrand: {} as TypeBrandType
    },
    reducers: {
        setBrands(state, action: PayloadAction<TypeBrandType[]>) {
            state.brands = action.payload
        },
        setSelectedBrand(state, action: PayloadAction<TypeBrandType>) {
            state.selectedBrand = action.payload
        }
    }
})

export const {
    setSelectedBrand
} = brandsSlice.actions

export default brandsSlice.reducer