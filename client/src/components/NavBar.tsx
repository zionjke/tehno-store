import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../store/store';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import {NavLink} from 'react-router-dom';
import { setIsAuth } from '../store/reducers/user-reducer';


type Props = {};
export const NavBar = (props: Props) => {
    const isAuth = useSelector<RootState, boolean>(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <NavLink style={{color:'white'}} to={'/'}>
                            Магазин электроники
                        </NavLink>
                    </Typography>
                    {
                        isAuth
                            ? <Box>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mr: 2}}
                                >
                                    <ShoppingCartIcon/>
                                </IconButton>
                                <Button style={{marginRight: '10px'}} variant={'outlined'} color="inherit">Админ
                                    панель</Button>
                                <Button onClick={() => dispatch(setIsAuth(false))} variant={'outlined'} color="inherit">Выйти</Button>
                            </Box>
                            : <Box>
                                <Button onClick={() => dispatch(setIsAuth(true))} variant={'outlined'} color="inherit">Авторизация</Button>
                            </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};