import * as React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {DeviceType} from "../../types";
import {Device} from "./Device";
import {Box} from "@material-ui/core";

type Props = {

};
export const DeviceList = (props: Props) => {
    const devices = useSelector<RootState,DeviceType[]>(state => state.devices)
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 0,
        }}>
            {devices.map(device => (
                <Device key={device.id} device={device}/>
            ))}
        </Box>
    );
};