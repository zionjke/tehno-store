import * as React from 'react';
import {DeviceType} from "../../types";
import {Device} from "./Device";
import {Box} from "@material-ui/core";

type Props = {
    devices: DeviceType[]
};
export const DeviceList = ({devices}: Props) => {
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