import React from 'react';
import {Button, Grid, Link, TextField, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


interface SignUpPageProps extends WithStyles<typeof styles> {}

interface SignUpPageState {
    values: {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        repeatPassword: string
    }
}

class SignUpPage extends React.Component<SignUpPageProps, SignUpPageState> {
    state: Readonly<SignUpPageState> = {
        values: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    };
    // constructor(props: SignUpPageProps) {
    //     super(props);
    //     this.state = {
    //         values: {
    //             email: ''
    //         }
    //     }
    // }
    //
    // private onError = () => {};
    //
    // private handleSubmit = () => {};
    //
    private handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {value, name} = e.currentTarget;
        switch (name) {
            case 'firstName':
                this.updateState('firstName', value);
                break;
            case 'lastName':
                this.updateState('lastName', value);
                break;
            case 'email':
                this.updateState('email', value);
                break;
            case 'password':
                this.updateState('password', value);
                break;
            case 'repeatPassword':
                this.setState({

                })
                this.updateState('repeatPassword', value);
                break;
        }
    };

    private updateState = (key: string, value: string) => (
        prevState: SignUpPageState
    ): SignUpPageState => ({
        values: {
            ...prevState.values,
            [key]: value
        },
    });

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={this.props.classes.paper}>
                    <Avatar className={this.props.classes.avatar}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={this.props.classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={this.state.values.firstName}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    value={this.state.values.lastName}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={this.state.values.email}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.values.password}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="repeatPassword"
                                    label="Repeat password"
                                    type="repeatPassword"
                                    id="repeatPassword"
                                    autoComplete="current-password"
                                    value={this.state.values.repeatPassword}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.props.classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default withStyles(styles)(SignUpPage);
