import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Paper, WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    firstName: string,
    lastName: string,
    faculty: string,
    groupNumber: string,
    formattedBirthdayDate: string
}

function ProfileInformation(props: Props) {
    return (
        <Paper className={props.classes.informationBlockItem}>
            <div className={props.classes.name}>{`${props.firstName} ${props.lastName}`}</div>
            <div className={props.classes.secondaryInformation}>{`${props.faculty} ${props.groupNumber}`}</div>
            <div className={props.classes.secondaryInformation}>{props.formattedBirthdayDate}</div>
        </Paper>
    );
}

export default withStyles(styles)(ProfileInformation);