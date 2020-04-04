import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    withStyles,
    WithStyles
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {ChangeEvent} from "react";
import styles from "./styles";

interface Props extends WithStyles<typeof styles> {
    open: boolean,
    handleClose: () => void,
    handleSave: (title: string, content: string) => void,

    initialTitle?: string,
    initialContent?: string,
}

function TimelinePostForm (props: Props) {
    const [formValues, setFormValues] = React.useState({
        title: props.initialTitle || '',
        content: props.initialContent || '',
    });

    const [formErrors, setFormErrors] = React.useState({
        title: '',
        content: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const error = validateInput(e);
        setFormErrors({
            ...formErrors,
            [e.target.name]: error,
        });

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const validateInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        switch(e.target.name) {
            case 'title': return validateTitle(e.target.value);
            case 'content': return validateContent(e.target.value);
            default: return '';
        }
    };

    const validateTitle = (value: string) => {
        if(value.length > 100 || value.length < 5) {
            return 'Заголовок не может быть меньше 5 и не больше 100 символов.';
        } else {
            return '';
        }
    };

    const validateContent = (value: string) => {
        if(value.length < 10) {
            return 'Содержание не должно быть меньше 10 символов.';
        } else {
            return '';
        }
    };

    const purgeForm = () => {
        setFormValues({
            title: '',
            content: ''
        });
        setFormErrors({
           title: '',
           content: ''
        });
    };

    const validateAll = () => {
        const titleError = validateTitle(formValues.title);
        const contentError = validateContent(formValues.content);

        setFormErrors({
           title: titleError,
           content: contentError
        });

        return titleError.length === 0 || contentError.length === 0;
    };

    const submit = () => {
        if (!validateAll()) return;
        purgeForm();
        props.handleSave(formValues.title, formValues.content);
    };

    const cancel = () => {
        purgeForm();
        props.handleClose();
    };

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth={true}
            maxWidth={"md"}
        >
            <DialogTitle id="form-dialog-title">Добавить новую запись</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Заголовок"
                    type="title"
                    fullWidth
                    variant="outlined"
                    name={'title'}
                    onChange={handleChange}
                    value={formValues.title}
                    error={formErrors.title.length > 0}
                    helperText={formErrors.title}
                />
                <TextField
                    style={{marginTop: '10px'}}
                    id="content"
                    label="Содержание"
                    type="content"
                    multiline
                    rows="10"
                    fullWidth
                    variant="outlined"
                    name={'content'}
                    onChange={handleChange}
                    value={formValues.content}
                    error={formErrors.content.length > 0}
                    helperText={formErrors.content}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => cancel()} color="primary">
                    Отменить
                </Button>
                <Button onClick={() => submit()} color="primary">
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default withStyles(styles)(TimelinePostForm);