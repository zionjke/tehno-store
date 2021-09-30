import {createSlice} from "@reduxjs/toolkit";

const typesSlice = createSlice({
    name: 'types',
    initialState: [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Смартфоны'},
    ],
    reducers: {
        setTypes(state, action) {
            return action.payload
        }
    }
})

export default typesSlice.reducer