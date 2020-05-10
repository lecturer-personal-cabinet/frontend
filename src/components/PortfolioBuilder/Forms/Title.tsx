import {Grid} from "@material-ui/core";
import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {BuilderModalProps} from "./common/types";

export const Title = (builderProps: BuilderModalProps) =>  {
    const save = (content: string) => {
        const item = {
            type: 'title',
            order: 0,
            metadata: {
                content
            }
        };

        builderProps.onSave(item);
    };

    return (
        <Formik
            initialValues={{
                content: '',
            }}
            validationSchema={Yup.object().shape({
                content: Yup.string()
                    .required('Контент обязателен')
                    .min(5)
                    .max(400),
            })}
            onSubmit={fields => save(fields.content)}>
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
                                    label="Заголовок"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    name="content"
                                    value={values.content}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.content && touched.content) && errors.content}
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