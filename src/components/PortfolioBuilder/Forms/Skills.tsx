import {Grid} from "@material-ui/core";
import React from "react";
import {ArrayHelpers, Field, FieldArray, Formik} from "formik";
import * as Yup from 'yup';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {BuilderModalProps} from "./common/types";

export const Skills = (builderProps: BuilderModalProps) => {
    const save = (skills: string[], title: string) => {
        console.log(skills);
        const item = {
            type: 'skills',
            order: 0,
            metadata: {
                skills,
                title
            }
        };

        builderProps.onSave(item);
    };

    const minusButton = (arrayHelpers: ArrayHelpers, index: number) => (
        <Button
            // style={{margin: '5px'}}
            variant="contained"
            color="primary"
            onClick={() => arrayHelpers.remove(index)}
        >
            -
        </Button>
    );

    const plusButton = (arrayHelpers: ArrayHelpers, index: number) => (
        <Button
            // style={{margin: '5px'}}
            variant="contained"
            color="primary"
            onClick={() => arrayHelpers.insert(index, '')}
        >
            +
        </Button>
    );

    return (
        <Formik
            initialValues={{
                skills: [],
                title: '',
            }}
            validationSchema={Yup.object().shape({
                skills: Yup.array()
                    .required('Компетенции обязательны')
                    .min(1)
                    .max(100),
                title: Yup.string()
                    .required('Подзаголовок обязателен')
                    .min(5)
                    .max(20)
            })}
            onSubmit={fields => save(fields.skills, fields.title)}>
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
                        <TextField
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
                        <FieldArray
                            name="skills"
                            render={arrayHelpers => (
                                <div>
                                    {values.skills && values.skills.length > 0 ? (
                                        values.skills.map((skill, index) => (
                                            <div key={index}>
                                                <Grid container
                                                      spacing={2}
                                                      alignItems="center"
                                                      justify="center">
                                                    <Grid item md={10}>
                                                        <TextField
                                                            autoFocus
                                                            margin="dense"
                                                            label="Компетенция"
                                                            type="text"
                                                            fullWidth
                                                            variant="outlined"
                                                            onChange={handleChange}
                                                            value={values.skills[index]}
                                                            name={`skills.${index}`}
                                                        />
                                                    </Grid>
                                                    <Grid item md={1}>{plusButton(arrayHelpers, index)}</Grid>
                                                    <Grid item md={1}>{minusButton(arrayHelpers, index)}</Grid>
                                                </Grid>
                                            </div>
                                        ))
                                    ) : (
                                        <Button
                                            fullWidth
                                            onClick={() => arrayHelpers.push('')}
                                            variant="contained"
                                            color="primary"
                                            type="submit">
                                            Добавить компетенцию
                                        </Button>
                                    )}
                                    <Button
                                        style={{marginTop: '10px'}}
                                        variant="contained"
                                        color="primary"
                                        type="submit">
                                        Сохранить
                                    </Button>
                                </div>
                            )}
                        />
                    </form>
                )
            }}
        </Formik>
    )
};