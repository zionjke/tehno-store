import * as React from 'react';
import {Button, Container, FormGroup, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from 'react-router-dom';

type Props = {};

export const Auth = (props: Props) => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

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
        onSubmit: (data) => {
            console.log(data)
        },

    });
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