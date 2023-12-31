'use client'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import API from '../services/axiosInterceptorInstance';
import { useDispatch } from 'react-redux';
// import { login } from '../../services/authService';
import { useForm } from 'react-hook-form';
import SweatAlert from '@/config/SweatAlert';
import { signIn, useSession } from 'next-auth/react'

export default function SignIn() {
    const { data: session } = useSession();

    const router = useRouter();
    // const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        signIn('credentials', {
            username: data.username,
            password: data.password,
            redirect: false,
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                SweatAlert("Login Successfully", "success");
                router.push('/admin/dashboard')
            } else if (response.status === 401) {
                SweatAlert(response.error, "warning");
            } else {
                SweatAlert("Internal Server Error, Please Contact Your Administrator", "error");
            }
        }).catch(
            (error) => {
                SweatAlert(error, "error");
            }
        )
    }

    // const onSubmit = async (data) => {
    //     const result = await signIn('credentials', {
    //         username: data.username,
    //         password: data.password,
    //         redirect: false,
    //     })
    //     if (result.error) {
    //         SweatAlert(result.error, "error");
    //     } else {
    //         SweatAlert(result.message, "success");
    //         router.push('/admin/dashboard')
    //     }
    // }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login Admin
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        {...register("username", { required: true })}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register("password", { required: true })}
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="warning"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Lupa password?
                            </Link>
                        </Grid>
                        {/* <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid> */}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}