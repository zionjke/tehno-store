import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DeviceType} from "../../../types";
import {deviceApi, OneDeviceType} from "../../http/deviceApi";

export const fetchDevices = createAsyncThunk('devices/fetchDevices', async (param, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await deviceApi.fetchDevices()
        const devices = data.rows
        const count = data.count
        return {devices, count}
    } catch (e) {
        return rejectWithValue(null)
    }
})


export const fetchOneDevice = createAsyncThunk('devices/fetchOneDevice', async (id:string, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await deviceApi.fetchOneDevice(id)
        return data
    } catch (e) {
        return rejectWithValue(null)
    }
})

const deviceSlice = createSlice({
    name: 'devices',
    initialState: {
        count: 0,
        devices: [] as DeviceType[],
        device: {} as OneDeviceType
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchDevices.fulfilled, (state, action) => {
            state.devices = action.payload.devices
            state.count = action.payload.count
        });
        builder.addCase(fetchOneDevice.fulfilled,(state,action) => {
            state.device = action.payload
        })
    },
})

export default deviceSlice.reducer