import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Avatar, Button, Grid, Paper, WithStyles} from "@material-ui/core";
import ProfileStats from "../ProfileStats";

interface Props extends WithStyles<typeof styles> {
    firstName: string,
    lastName: string,
    faculty: string,
    groupNumber: string,
    formattedBirthdayDate: string,
    isAuthenticated: boolean,
    withActiveBar: boolean,
    image?: string,

    onSendMessageClick: () => void,
    onPortfolioClick: () => void,
    onAvatarClick: () => void,
}

function ProfileInformation(props: Props) {
    return (
        <Paper className={props.classes.informationBlockItem}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Avatar src={props.image} onClick={() => props.onAvatarClick()} className={props.classes.avatar} />
            </Grid>
            <div className={props.classes.name}>{`${props.firstName} ${props.lastName}`}</div>
            <div className={props.classes.secondaryInformation}>{`${props.faculty} ${props.groupNumber}`}</div>
            <div className={props.classes.secondaryInformation}>{props.formattedBirthdayDate}</div>

            {props.isAuthenticated && props.withActiveBar &&
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    className={props.classes.actionsBar}
                >
                    <Grid item md={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={props.classes.actionButton}
                            onClick={() => props.onSendMessageClick()}
                        >
                            Сообщение
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={props.classes.actionButton}
                            onClick={() => props.onPortfolioClick()}
                        >
                            Портфолио
                        </Button>
                    </Grid>
                </Grid>
            }

            <Grid
                container
                spacing={3}
                direction="row"
                alignItems="center"
                justify="center"
                className={props.classes.actionsBar}
            >

            </Grid>
        </Paper>
    );
}

export default withStyles(styles)(ProfileInformation);