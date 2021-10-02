import * as React from 'react';
import {Box, Button, Card, CardActions, CardContent, Grid, List, ListItem, ListItemText, Paper, Rating, Typography} from '@material-ui/core';


type Props = {};

export const DevicePage = (props: Props) => {
    const [value, setValue] = React.useState<number | null>(2);
    const device = {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-blue_3.jpg'
    }
    const descr = [
        {id:1,title:'Оперативная память',description:'5гб'},
        {id:2,title:'Камера',description:'12 МП'},
        {id:3,title:'Процессор',description:'SnapDragon'},
        {id:4,title:'Кол-во ядер',description:'4'},
        {id:5,title:'Аккумулятор',description:'4000 МАч'},
    ]
    return (
        <Box sx={{flexGrow: 3, padding: 5}}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img style={{width: '400px', height: '400px'}} src={device.img} alt=""/>
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
                        {descr.map((d,i) => (
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