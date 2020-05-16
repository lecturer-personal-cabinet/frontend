import {withStyles, WithStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import React from "react";
import styles from "./styles";
import * as Yup from "yup";
import {Formik} from "formik";

interface SignInFormProps extends WithStyles<typeof styles> {
    onSubmit: (email: string, password: string) => void,
}

function SignInForm (globalProps: SignInFormProps) {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .required('Электронный адрес обязателен'),
                password: Yup.string()
                    .required('Пароль обязателен'),
            })}
            onSubmit={fields => globalProps.onSubmit(fields.email, fields.password)}>
            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return (
                    <form onSubmit={handleSubmit} style={{padding: '10px'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Электронная почта"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.email && touched.email) && errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="password"
                                    label="Пароль"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.password && touched.password) && errors.password}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            disabled={!dirty || isSubmitting}
                            className={globalProps.classes.submit}
                            variant="contained"
                            color="primary"
                            type="submit">
                            Войти
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to='/sign-up'>
                                    Нет аккаунта? Зарегистрируйтесь
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                )
            }}
        </Formik>
    )
}

export default withStyles(styles)(SignInForm);