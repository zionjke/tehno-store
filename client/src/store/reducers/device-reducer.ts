import {createSlice} from "@reduxjs/toolkit";

const deviceSlice = createSlice({
    name: 'devices',
    initialState: [
        {id:1,name: 'Iphone 12 pro',price: 25000, rating:5, img:'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-blue_3.jpg'},
        {id:2,name: 'Iphone 12 pro',price: 25000, rating:5, img:'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-blue_3.jpg'},
        {id:3,name: 'Iphone 12 pro',price: 25000, rating:5, img:'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-blue_3.jpg'},
        {id:4,name: 'Iphone 12 pro',price: 25000, rating:5, img:'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-blue_3.jpg'},
    ],
    reducers: {
        setDevices(state,action) {
            return action.payload
        }
    }
})

export default deviceSlice.reducer