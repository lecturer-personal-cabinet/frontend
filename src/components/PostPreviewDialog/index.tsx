import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withStyles,
    WithStyles
} from "@material-ui/core";
import React from "react";
import styles from "./styles";
import PostSignature from "../PostSignature";

interface Props extends WithStyles<typeof styles> {
    open: boolean,
    handleClose: () => void,
    content: string,
    title: string,
    signerFullName: string,
    signerTimestamp: string,
}

function PostPreviewDialog (props: Props) {
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.content}
                </DialogContentText>
                <PostSignature
                    fullName={props.signerFullName}
                    timestamp={props.signerTimestamp}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default withStyles(styles)(PostPreviewDialog);