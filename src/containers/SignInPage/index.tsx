import React, {Dispatch} from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {RootState} from "../../store";
import {connect} from "react-redux";
import {AnyAction} from 'redux';
import SignInForm from "../../components/forms/SignInForm";
import {showNotification} from "../../actions/notifications";
import {ThunkDispatch} from "redux-thunk";

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
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SignInPage))
