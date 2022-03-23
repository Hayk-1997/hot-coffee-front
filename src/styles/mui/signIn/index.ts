import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    container: {
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
    },
    gridBox: {
        backgroundColor: '#3a3a3a78'
    },
    multilineColor: {
        "& .MuiFilledInput-root": {
            background: "rgb(0 0 0 / 29%)",
            color: theme.palette.primary.main
        },
    },
    loginForm: {
        width: '100%',
    }
}));