import useStyles from "../../../styles/mui/input";

export default function InputErrorMessage({ message }) {
    const styles = useStyles();

    return <p className={styles.errorMessage}>{message}</p>
}