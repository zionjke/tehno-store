import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemText,
    Rating,
    Typography
} from '@material-ui/core';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {OneDeviceType} from "../http/deviceApi";
import { RootState } from '../store/store';
import {fetchOneDevice} from "../store/reducers/device-reducer";


export const DevicePage = () => {
    const device = useSelector<RootState,OneDeviceType>(state => state.devices.device)
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<number | null>(2);
    const {id} = useParams<{ id: string }>()

    useEffect(() => {
        dispatch(fetchOneDevice(id))
    },[])

    console.log(device)
    return (
        <Box sx={{flexGrow: 3, padding: 5}}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img style={{width: '400px', height: '400px'}} src={process.env.REACT_APP_API_URL + '/' + device.img} alt=""/>
                </Grid>
                <Grid textAlign={"center"} item xs={3}>
                    <Card sx={{minWidth: 275, padding: 4}}>
                        <CardContent>
                            <Typography variant={"h3"}>
                                {device.name}
                            </Typography>
                            <Rating size={"large"} name="read-only" value={value} readOnly/>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                Цена: {device.price}
                            </Typography>
                        </CardContent>
                        <Button variant={"contained"} size="small">Добавить в корзину</Button>
                    </Card>
                </Grid>
                <Grid  item xs={6}>
                    <List disablePadding>
                        <Typography sx={{marginBottom:1}} variant={"h4"}>
                            Характеристики
                        </Typography>
                        {device.info && device.info.map((d,i) => (
                            <ListItem style={{padding: '0'}} key={d.id}>
                                <ListItemText style={{background: i % 2 === 0 ? 'lightgray' : "transparent",padding:'8px'}}>
                                    {d.title}: {d.description}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};