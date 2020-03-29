import React from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {RootState} from "../../store";
import {connect} from "react-redux";
import SignInForm from "../../components/forms/SignInForm";
import {showError, showNotification} from "../../actions/notifications";
import {ThunkDispatch} from "redux-thunk";
import GoogleLogin, {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import config from '../../config.json';
import {onGoogleSuccess} from "../../actions/authentication";

interface SignInMapStateToProps extends WithStyles<typeof styles> {}
interface SignInMapDispatchToProps {
    showNotification: (message: string) => void;
    onGoogleSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
}

type SignInProps = SignInMapStateToProps & SignInMapDispatchToProps;

interface SignInState {}

class SignInPage extends React.Component<SignInProps, SignInState> {
    private onGoogleFailure = (error: any): void => {
        showError('Ошибка взаимодействия с Google');
    };

    render() {
        return (
            <Grid container component="main" className={this.props.classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={this.props.classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={this.props.classes.socialNetworks}>
                        <GoogleLogin
                            clientId={config.GOOGLE_CLIENT_ID}
                            buttonText="Google login"
                            onSuccess={this.props.onGoogleSuccess}
                            onFailure={this.onGoogleFailure}
                        />
                    </div>
                    <div className={this.props.classes.paper}>
                        <SignInForm />
                    </div>
                </Grid>
            </Grid>
        );
    }
}
const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    showNotification: (message: string) => dispatch(showNotification(message)),
    onGoogleSuccess : (response: GoogleLoginResponse | GoogleLoginResponseOffline) => dispatch(onGoogleSuccess(response)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SignInPage))
