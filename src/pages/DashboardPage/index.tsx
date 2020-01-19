import React from 'react';
import {Avatar, Grid, Paper, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";

interface DashboardPageProps extends WithStyles<typeof styles> {

}

interface DashboardPageState {

}

class DashboardPage extends React.Component<DashboardPageProps, DashboardPageState> {
    private avatarBlock = (alt: string, src: string) => (
        <Paper className={this.props.classes.item}>
            <Avatar
                variant="square"
                className={this.props.classes.avatar}
                alt={alt}
                src={src}/>
        </Paper>
    );

    private informationBlock = () => (
      <Paper className={this.props.classes.informationBlockItem}>
          <div className={this.props.classes.name}>Vladimir Baklan</div>
      </Paper>
    );

    render() {
        return (
            <div className={this.props.classes.root}>
                <Grid container spacing={3}>
                    <Grid item md={2}>
                        {this.avatarBlock('Vladimir Baklan', 'https://www.un.org/development/desa/youth/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png')}
                    </Grid>
                    <Grid item md={10}>
                        {this.informationBlock()}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(DashboardPage)