import React from 'react';
import {Avatar, Grid, WithStyles, withStyles} from "@material-ui/core";
import styles from "./styles";

interface Props extends WithStyles<typeof styles> {
    avatarSrc?: string,
    message: string,
    isOwnMessage: boolean,
    isRead: boolean,
}

function Message (props: Props) {
    return (
        <Grid
            container
            direction={props.isOwnMessage ? 'row-reverse' : 'row'}
        >
            <Grid item md={1} className={props.classes.avatar} justify={"center"} alignItems={"center"}>
                <Avatar src={props.avatarSrc} />
            </Grid>
            <Grid item md={6} className={props.classes.message}>
                <div className={props.classes.messageContent}>{props.message}</div>
            </Grid>

        </Grid>
    )
}

export default withStyles(styles)(Message);