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
import React from "react";
import styles from "./styles";

interface Props extends WithStyles<typeof styles> {
    open: boolean,
    handleClose: () => void,
}

function TimelinePostForm (props: Props) {
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
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
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Отменить
                </Button>
                <Button onClick={props.handleClose} color="primary">
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default withStyles(styles)(TimelinePostForm);