import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TLoginInputs } from '../../types/User/login';
import InputErrorMessage from '../../features/Inputs/InputErrorMessage';
import { signIn, signOut, useSession } from 'next-auth/react';
import { userAsyncLogin } from './slice';
import cn from 'classnames';

import useStyles from '../../styles/mui/signIn';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TLoginInputs>();
    const dispatch = useDispatch();
    const styles = useStyles();

    const onSubmit: SubmitHandler<TLoginInputs> = formData => {
        dispatch(userAsyncLogin(formData));
    }

    const handleSignIn = () => {
        signIn();
    }


    return (
        <Grid container className="demo-1 render imgloaded">
            <Grid className="glitch">
                <div className="glitch__img" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/coffeeblend/images/xbg_2.jpg.pagespeed.ic.1CZ91rANlw.webp)` }} />
                <div className="glitch__img" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/coffeeblend/images/xbg_2.jpg.pagespeed.ic.1CZ91rANlw.webp)` }} />
                <div className="glitch__img" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/coffeeblend/images/xbg_2.jpg.pagespeed.ic.1CZ91rANlw.webp)` }} />
                <div className="glitch__img" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/coffeeblend/images/xbg_2.jpg.pagespeed.ic.1CZ91rANlw.webp)` }} />
                <div className="glitch__img" style={{ backgroundImage: `url(https://preview.colorlib.com/theme/coffeeblend/images/xbg_2.jpg.pagespeed.ic.1CZ91rANlw.webp)` }} />
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <Grid
                        item
                        lg={6}
                    >
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            height="100vh"
                            className={styles.gridBox}
                        >
                            <Grid
                                item
                                lg={4}
                                md={6}
                                xs={10}
                            >
                                <form
                                    action="#"
                                    className={cn('login-form', styles.loginForm)}
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <TextField
                                                    name="name"
                                                    placeholder="Your Name"
                                                    fullWidth
                                                    variant="filled"
                                                    className={styles.multilineColor}
                                                    {...register('name',  { required: true })}
                                                    error={!!errors.name}
                                                />
                                                {errors.name && <InputErrorMessage message="Name is required" />}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <TextField
                                                    name="email"
                                                    placeholder="Your Email"
                                                    fullWidth
                                                    variant="filled"
                                                    className={styles.multilineColor}
                                                    {...register('email',  { required: true })}
                                                    error={!!errors.email}
                                                />
                                                {errors.email && <InputErrorMessage message="Email is required" /> }
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <TextField
                                                    name="password"
                                                    placeholder="Your Password"
                                                    fullWidth
                                                    variant="filled"
                                                    className={styles.multilineColor}
                                                    {...register('password',  { required: true })}
                                                    error={!!errors.password}
                                                />
                                                {errors.password && <InputErrorMessage message="Password is required" /> }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Sign In" className="btn btn-primary py-3 px-5" />
                                    </div>
                                </form>
                                <div className="form-group" >
                                    <input
                                        type="button"
                                        value="With Social"
                                        className="btn btn-primary py-3 px-5"
                                        onClick={handleSignIn}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Login;