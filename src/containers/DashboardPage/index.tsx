import React from 'react';
import {Avatar, Grid, Paper, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import InformationPaper from "../../components/InformationPaper";

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

    private informationBlock = (firstName: string,
                                lastName: string,
                                faculty: string,
                                groupNumber: string,
                                formattedBirthdayDate: string) => (
      <Paper className={this.props.classes.informationBlockItem}>
          <div className={this.props.classes.name}>{`${firstName} ${lastName}`}</div>
          <div className={this.props.classes.secondaryInformation}>{`${faculty}, ${groupNumber}`}</div>
          <div className={this.props.classes.secondaryInformation}>{formattedBirthdayDate}</div>
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
                        {this.informationBlock('Vladimir',
                            'Baklan',
                            'Факультет информационных технологий',
                            '16-ИТ-1',
                            '08.02.1999')}
                    </Grid>
                    <Grid item md={12}>
                        <InformationPaper content={'Seamless Pay is a payment system integrated into the SeamlessDocs platform. Seamless payment allows customers to set up payment for forms, add various payment gateways, perform transactions (partial, purchase, authorization, etc.), track and manage payment configuration and transactions, generate reports, in-app and email notifications.'} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(DashboardPage)