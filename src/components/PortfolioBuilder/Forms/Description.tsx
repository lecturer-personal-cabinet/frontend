import {Grid} from "@material-ui/core";
import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {BuilderModalProps} from "./common/types";

export const Description = (builderProps: BuilderModalProps) =>  {
    const save = (subtitle: string, description: string) => {
        const item = {
            type: 'description',
            order: 1,
            metadata: {
                description,
                subtitle
            }
        };

        builderProps.onSave(item);
    };

    return (
        <Formik
            initialValues={{
                description: '',
                subtitle: '',
            }}
            validationSchema={Yup.object().shape({
                description: Yup.string()
                    .required('Описание обязателен')
                    .min(5, 'Минимум 5 символов')
                    .max(4000, 'Максимум 400 символов'),
                subtitle: Yup.string()
                    .required('Подзаголовок обязателен')
                    .min(5, 'Минимум 5 символов')
                    .max(300, 'Максимум 50 символов')
            })}
            onSubmit={fields => save(fields.subtitle, fields.description)}>
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
                    <form onSubmit={handleSubmit} style={{padding: '10px'}} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label="Подзаголовок"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    name="subtitle"
                                    value={values.subtitle}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.subtitle && touched.subtitle) && errors.subtitle}
                                />
                                <TextField
                                    margin="dense"
                                    label="Описание"
                                    type="text"
                                    fullWidth
                                    multiline
                                    rows={20}
                                    variant="outlined"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.description && touched.description) && errors.description}
                                />
                                <Button
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
};