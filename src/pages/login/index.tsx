import cn from 'classnames';
import { Grid } from '@mui/material';
import useStyles from '../../styles/mui/signIn';

export default function Login () {
    const styles = useStyles();

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
                        lg={4}
                        md={6}
                        xs={10}
                    >
                        <form action="#" className={cn('login-form', styles.loginForm)}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Password" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Confirm Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}