import {withStyles, WithStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import React from "react";
import styles from "./styles";
import * as Yup from "yup";
import {Formik} from "formik";

interface SignUpFormProps extends WithStyles<typeof styles> {
    submit: (firstName: string, lastName: string, email: string, password: string, patronymic?: string) => void,
}


function SignUpForm(globalProps: SignUpFormProps) {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                patronymic: '',
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                    .required('Имя обязательно')
                    .min(2, 'Минимальная длина имени - 2 символа')
                    .max(40, 'Максимальная длина имени - 40 символов'),
                lastName: Yup.string()
                    .required('Фамилия обязательна')
                    .min(2, 'Минимальная длина фамлиии - 2 символа')
                    .max(40, 'Максимальная длина фамилии - 40 символов'),
                email: Yup.string()
                    .email()
                    .required('Электронная почта обязательна'),
                password: Yup.string()
                    .required('Пароль обязательный.')
                    .min(6, 'Минимальная длина пароля - 6 символов')
                    .matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы и цифры')
            })}
            onSubmit={fields => globalProps.submit(fields.firstName, fields.lastName, fields.email, fields.password, fields.patronymic)}>
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Имя"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.firstName && touched.firstName) && errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Фамилия"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.lastName && touched.lastName) && errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Отчество"
                                    name="patronymic"
                                    value={values.patronymic}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.patronymic && touched.patronymic) && errors.patronymic}
                                />
                            </Grid>
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
                                    label="Пароль"
                                    name="password"
                                    type="password"
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
                            Создать аккаунт
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to='/sign-in'>
                                    Уже есть аккаунт? Войти
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                )
            }}
        </Formik>
    )
}

export default withStyles(styles)(SignUpForm);