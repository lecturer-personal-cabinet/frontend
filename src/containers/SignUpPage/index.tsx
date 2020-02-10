import React from 'react';
import {Typography, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {RootState} from "../../store";
import {connect} from "react-redux";
import SignUpForm from "../../components/forms/SignUpForm";
import {showNotification} from "../../actions/notifications";
import {signUp} from "../../actions/users";
import {ThunkDispatch} from "redux-thunk";
import {Link, Redirect} from "react-router-dom";

interface SignUpProps extends WithStyles<typeof styles> {
    signUp: {
        failure: {
            isFailure: boolean,
            errorMessage: string,
        }
    },
    showNotification: (message: string) => void;
    signUpMethod: (firstName: string, lastName: string, email: string, password: string) => void;
}

interface SignUpState {}

class SignUpPage extends React.Component<SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.showMessage = this.showMessage.bind(this);
    }

    private onSubmit(firstName: string, lastName: string, email: string, password: string): boolean {
        this.props.signUpMethod(firstName, lastName, email, password);
        return true;
    }

    private showMessage(message: string) {
        this.props.showNotification(message);
    }

    render() {
        return (
            <Grid container component="main" className={this.props.classes.root}>
                {this.props.signUp.failure.isFailure && this.showMessage(this.props.signUp.failure.errorMessage)}

                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={this.props.classes.paper}>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <SignUpForm submit={this.onSubmit} />
                    </div>
                </Grid>
                <Grid item xs={false} sm={4} md={7} className={this.props.classes.image} />
            </Grid>
        );
    }
}
const mapStateToProps = (state: RootState) => ({
    signUp: state.userState.signUp,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    showNotification: (message: string) => dispatch(showNotification(message)),
    signUpMethod: (firstName: string, lastName: string, email: string, password: string) => dispatch(signUp(firstName, lastName, email, password)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SignUpPage))
