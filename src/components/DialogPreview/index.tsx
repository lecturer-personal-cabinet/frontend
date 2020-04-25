import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Avatar, Grid, WithStyles} from "@material-ui/core";
import TextTruncate from "react-text-truncate";
import { Dialog } from '../../types/dialogs';

interface Props extends WithStyles<typeof styles> {
    dialog: Dialog,
    userId: string,
}

function DialogPreview(props: Props) {
    const dialogName = () => {
      const fullNames = props.dialog.participants
          .flatMap(p => p.user)
          .filter(p => p.id !== props.userId)
          .map(p => `${p.firstName} ${p.lastName}`);

      return fullNames.length == 1 ? fullNames[0] : fullNames.join(',');
    };

    return (
        <Grid
            container
            alignItems='center'
        >
            <Grid item md={1}>
                <Avatar/>
            </Grid>
            <Grid item md={11}>
                <Grid container direction='column'>
                    <Grid item className={props.classes.fullName}>
                        {dialogName()}
                    </Grid>
                    <Grid item className={props.classes.messagePreview}>
                        <TextTruncate
                            line={1}
                            element="span"
                            truncateText="…"
                            text={props.dialog.messages[0].content}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(DialogPreview);