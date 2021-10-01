import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypeBrandType} from "../../../types";

const typesSlice = createSlice({
    name: 'types',
    initialState: {
        types: [{id: 1, name: 'Холодильники'}, {id: 2, name: 'Смартфоны'}],
        selectedType: {} as TypeBrandType
    },
    reducers: {
        setTypes(state, action:PayloadAction<TypeBrandType[]>) {
            state.types = action.payload
        },
        setSelectedType(state,action:PayloadAction<TypeBrandType>) {
            state.selectedType = action.payload
        }
    }
})

export const {
    setSelectedType
} = typesSlice.actions

export default typesSlice.reducer