import * as React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Rating, Typography} from "@material-ui/core";
import {DeviceType} from "../../types";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

type Props = {
    device: DeviceType
};

export const Device = ({device}: Props) => {
    const history = useHistory()
    return (
        <Card sx={{ maxWidth: 355, marginRight: 10, marginTop: 2,marginBottom: 5}}>
            <CardHeader sx={{cursor:'pointer'}} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
                title={device.name}
            />
            <CardMedia
                component="img"
                height="194"
                image={device.img}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                   Цена: {device.price}
                </Typography>
                <Rating name="read-only" value={device.rating} readOnly />
            </CardContent>
        </Card>
    );
};