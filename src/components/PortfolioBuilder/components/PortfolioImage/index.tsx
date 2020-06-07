import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Grid, Paper, Typography, WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    url: string,
}

function PortfolioImage(props: Props) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >

        <Grid item xs={12}>
          <img src={props.url} className={props.classes.image} />
        </Grid>

      </Grid>
    );
}

export default withStyles(styles)(PortfolioImage);