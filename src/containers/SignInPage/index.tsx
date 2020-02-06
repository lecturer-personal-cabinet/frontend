import React, {Dispatch} from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {RootState} from "../../store";
import {connect} from "react-redux";
import {showNotification} from "../../store/notifications/actions";
import {AnyAction} from 'redux';

interface SignInMapStateToProps extends WithStyles<typeof styles> {}
interface SignInMapDispatchToProps {
    showNotification: (message: string) => void;
}

type SignInProps = SignInMapStateToProps & SignInMapDispatchToProps;

interface SignInState {}

class SignInPage extends React.Component<SignInProps, SignInState> {
    render() {
        return (
            <Grid container component="main" className={this.props.classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={this.props.classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={this.props.classes.paper}>
                        <form className={this.props.classes.form} noValidate>
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
                                className={this.props.classes.submit}
                                onClick={() => {
                                    console.log('click');
                                    this.props.showNotification('heeey');
                                }}
                            >
                                Войти
                            </Button>
                            <Grid container>
                                <Grid item xs>

                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Нет аккаунта? Зарегистрируйтесь"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    showNotification: (message: string) => dispatch(showNotification(message)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SignInPage))
