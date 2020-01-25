import React from 'react';
import {TransitionProps} from "@material-ui/core/transitions";
import {Dialog, Slide, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";

interface SendMessageDialogProps extends WithStyles<typeof styles>{
    openDialog: boolean,
    onDialogClose: () => void,
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SendMessageDialog(props: SendMessageDialogProps) {
    return (
        <Dialog open={props.openDialog}
                TransitionComponent={Transition}
                onClose={props.onDialogClose}
                keepMounted>
            saedsad
        </Dialog>
    )
}

export default withStyles(styles)(SendMessageDialog);