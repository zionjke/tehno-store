import {createSlice} from "@reduxjs/toolkit";

const brandsSlice = createSlice({
    name: 'brands',
    initialState: [
        {id: 1, name: 'Samsung'},
        {id: 2, name: 'Apple'},
    ],
    reducers: {
        setBrands(state, action) {
            return action.payload
        }
    }
})

export default brandsSlice.reducer