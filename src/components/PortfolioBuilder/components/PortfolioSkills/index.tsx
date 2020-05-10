import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Chip, Paper, Typography, WithStyles} from "@material-ui/core";
import nanoid from "nanoid";

interface Props extends WithStyles<typeof styles> {
    title: string,
    skills: string[],
}

function PortfolioSkills(props: Props) {
    return (
        <Paper className={props.classes.root}>
            <Typography variant="h5" component="h5">
                <span className={props.classes.subtitle}>{props.title}</span>
            </Typography>
            <Typography align='center'>
                {props.skills.map(skill => (
                    <Chip key={nanoid()} className={props.classes.chip} label={skill} color={'primary'} />
                ))}
            </Typography>
        </Paper>
    );
}

export default withStyles(styles)(PortfolioSkills);