import {withStyles, WithStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import React from "react";
import styles from "./styles";

interface SignUpFormProps extends WithStyles<typeof styles> {
    submit: (firstName: string, lastName: string, email: string, password: string) => boolean,
}

function SignUpForm(props: SignUpFormProps) {
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        pwdValue: ''
    });

    const [errors, setErrors] = React.useState({
        firstName: false,
        lastName: false,
        email: false,
        pwdValue: false,
        hasErrors: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.currentTarget;
        setValues(prevState => ({...prevState, [name]: value}));
        updateErrors(name, value);
    };

    const updateErrors = (name: string, value: string) => {
        let validationState = false;
        switch (name) {
            case 'firstName':
                validationState = !isNameValid(value);
                break;
            case 'lastName':
                validationState = !isNameValid(value);
                break;
            case 'email':
                validationState = !isEmailValid(value);
                break;
            case 'pwdValue':
                validationState = !isPasswordValid(value);
                break;
        }

        setErrors(prevState => ({
            ...prevState,
            [name]: validationState,
            hasErrors: !isFormValid()
        }));
    };

    const isFormValid = () => {
        return isPasswordValid(values.pwdValue) &&
            isEmailValid(values.email) &&
            isNameValid(values.firstName) &&
            isNameValid(values.lastName);
    };

    const isPasswordValid = (value: string): boolean => {
        const passwordRegexp = /^(?!.* )(?=.*\d)(?=.*[A-Z]).{8,15}$/;
        return passwordRegexp.test(value);
    };

    const isEmailValid = (value: string): boolean => {
        const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        return emailRegexp.test(value);
    };

    const isNameValid = (value: string): boolean => {
        return value.length > 3;
    };

    const handleSubmit = () => {
        if (!isFormValid()) return false;
        props.submit(values.firstName, values.lastName, values.email, values.pwdValue);
    };

    return (
        <form className={props.classes.form} onSubmit={handleSubmit} noValidate autoComplete="off">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="Имя"
                        autoFocus
                        value={values.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Фамилия"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{display: 'none'}}
                        variant="outlined"
                        name="password"
                        label="Password"
                        type="password"/>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="pwdValue"
                        label="Пароль"
                        name="pwdValue"
                        type="password"
                        value={values.pwdValue}
                        onChange={handleChange}
                        error={errors.pwdValue} />
                </Grid>
            </Grid>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={props.classes.submit}
                disabled={errors.hasErrors}
                onClick={() => handleSubmit()}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link to='/sign-in'>
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default withStyles(styles)(SignUpForm);