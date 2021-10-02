import * as React from 'react';
import {Button, FormGroup, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, Redirect, useHistory, useLocation} from 'react-router-dom';
import {authApi, UserParamsType} from "../http/userApi";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../store/store';
import {login} from "../store/reducers/auth-reducer";



export const Auth = () => {
    const isAuth = useSelector<RootState, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE


    const onAuthHandler = async (data: UserParamsType) => {
        if (isLogin) {
            dispatch(login(data))
        } else {
            await authApi.registration(data)
            history.push(LOGIN_ROUTE)
        }
    }

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: Yup
            .string()
            .min(6, 'Password should be of minimum 6 characters length')
            .required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (data) => {
            await onAuthHandler(data)
        },

    });

    if (isAuth) {
        return <Redirect to={SHOP_ROUTE}/>
    }

    return (
        <Grid container justifyContent={'center'}>
            <Grid item xs={4}>
                <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <TextField
                            {...formik.getFieldProps('email')}
                            label="Email"
                            margin="normal"
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}/>
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            margin="normal"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}/>
                        <Button type={'submit'} variant={'contained'} color={"primary"}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                        {
                            isLogin
                                ? <div style={{marginTop: '10px'}}>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                : <div style={{marginTop: '10px'}}>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                        }
                    </FormGroup>
                </form>
            </Grid>
        </Grid>
    );
};