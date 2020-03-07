import {withStyles, WithStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import React from "react";
import styles from "./styles";

interface SignInFormProps extends WithStyles<typeof styles> {

}

function SignInForm (props: SignInFormProps) {
    return (
        <form className={props.classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={props.classes.submit}>
                Войти
            </Button>
            <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                    <Link to='/sign-up'>
                        {"Нет аккаунта? Зарегистрируйтесь"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default withStyles(styles)(SignInForm);