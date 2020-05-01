import {
    Grid,
    withStyles,
    WithStyles
} from "@material-ui/core";
import React from "react";
import styles from "./styles";
import {Formik} from "formik";
import * as Yup from 'yup';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface Props extends WithStyles<typeof styles> {
    onSavePortfolioCard: (title: string, description: string) => void,
}

function PortfolioCardForm(globalProps: Props) {
    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
            }}
            validationSchema={Yup.object().shape({
                title: Yup.string()
                    .required('Заголовок обязателен')
                    .min(5)
                    .max(250),
                description: Yup.string()
                    .required('Описание обязательно')
                    .min(10)
                    .max(300)
            })}
            onSubmit={fields => globalProps.onSavePortfolioCard(fields.title, fields.description)}>
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
                    <form onSubmit={handleSubmit} className={globalProps.classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    className={globalProps.classes.formElement}
                                    autoFocus
                                    margin="dense"
                                    label="Заголовок"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.title && touched.title) && errors.title}
                                />
                                <TextField
                                    className={globalProps.classes.formElement}
                                    margin="dense"
                                    label="Описание"
                                    type="text"
                                    fullWidth
                                    multiline
                                    rows="4"
                                    variant="outlined"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.description && touched.description) && errors.description}
                                />
                                <Button
                                    className={globalProps.classes.formElement}
                                    disabled={!dirty || isSubmitting}
                                    variant="contained"
                                    color="primary"
                                    type="submit">
                                    Сохранить
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )
            }}
        </Formik>
    )
}

export default withStyles(styles)(PortfolioCardForm);