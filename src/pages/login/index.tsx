import useStyles from '../../styles/mui/signIn';

export default function Login () {
    const styles = useStyles();

    return (
        <div className={'container mt-5 ' + styles.root}>
            <div className={'col-md-8 ' + styles.container}>
                <form action="#" className={'login-form ' + styles.loginForm}>
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
            </div>
        </div>
    )
}