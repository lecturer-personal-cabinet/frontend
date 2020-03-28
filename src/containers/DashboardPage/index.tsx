import React from 'react';
import {Avatar, Grid, Hidden, Paper, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import InformationPaper from "../../components/InformationPaper";
import Timeline from '../../components/Timeline';
import {UserTimelineItem} from "../../types/user_timeline";
import TimelinePostForm from "../../components/forms/TimelinePostForm";

interface DashboardPageProps extends WithStyles<typeof styles> {

}

interface DashboardPageState {
    timeline: {
        insertPopupState: boolean,
        items: UserTimelineItem[],
    },
}

class DashboardPage extends React.Component<DashboardPageProps, DashboardPageState> {
    constructor(props: DashboardPageProps) {
        super(props);
        this.state = {
            timeline: {
                insertPopupState: false,
                items: [
                    {
                        id: '1',
                        title: 'Post title 1',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        timestamp: '08/02/2018 12:56',
                        sender: {
                            id: 'string',
                            firstName: 'Vladimir',
                            lastName: 'Baklan',
                            email: 'string',
                        },
                    },
                    {
                        id: '1',
                        title: 'Post title 1',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        timestamp: '08/02/2018 12:56',
                        sender: {
                            id: 'string',
                            firstName: 'Vladimir',
                            lastName: 'Baklan',
                            email: 'string',
                        },
                    },
                    {
                        id: '1',
                        title: 'Post title 1',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        timestamp: '08/02/2018 12:56',
                        sender: {
                            id: 'string',
                            firstName: 'Vladimir',
                            lastName: 'Baklan',
                            email: 'string',
                        },
                    },
                    {
                        id: '1',
                        title: 'Post title 1',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        timestamp: '08/02/2018 12:56',
                        sender: {
                            id: 'string',
                            firstName: 'Vladimir',
                            lastName: 'Baklan',
                            email: 'string',
                        },
                    },
                    {
                        id: '1',
                        title: 'Post title 1',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        timestamp: '08/02/2018 12:56',
                        sender: {
                            id: 'string',
                            firstName: 'Vladimir',
                            lastName: 'Baklan',
                            email: 'string',
                        },
                    },
                    {
                        id: '1',
                        title: 'Post title 1',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        timestamp: '08/02/2018 12:56',
                        sender: {
                            id: 'string',
                            firstName: 'Vladimir',
                            lastName: 'Baklan',
                            email: 'string',
                        },
                    },
                    {
                        id: '1',
                        title: 'Post title 1',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        timestamp: '08/02/2018 12:56',
                        sender: {
                            id: 'string',
                            firstName: 'Vladimir',
                            lastName: 'Baklan',
                            email: 'string',
                        },
                    },
                    {
                        id: '1',
                        title: 'Post title 1',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        timestamp: '08/02/2018 12:56',
                        sender: {
                            id: 'string',
                            firstName: 'Vladimir',
                            lastName: 'Baklan',
                            email: 'string',
                        },
                    },
                ]
            },
        };
    }


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

    private switchStateTimelinePostInsertPopup = () => {
      this.setState({
          ...this.state,
          timeline: {
              ...this.state.timeline,
              insertPopupState: !this.state.timeline.insertPopupState,
          }
      });
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <Grid container spacing={3}>
                    <Hidden xsDown>
                        <Grid item md={2} sm={12}>
                            {this.avatarBlock('Vladimir Baklan', 'https://www.un.org/development/desa/youth/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png')}
                        </Grid>
                    </Hidden>
                    <Grid item md={10} xs={12} sm={12}>
                        {this.informationBlock('Vladimir',
                            'Baklan',
                            'Факультет информационных технологий',
                            '16-ИТ-1',
                            '08.02.1999')}
                    </Grid>
                    <Grid item md={12}>
                        <InformationPaper
                            title={'О себе'}
                            content={'Seamless Pay is a payment system integrated into the SeamlessDocs platform. Seamless payment allows customers to set up payment for forms, add various payment gateways, perform transactions (partial, purchase, authorization, etc.), track and manage payment configuration and transactions, generate reports, in-app and email notifications.'}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TimelinePostForm
                            open={this.state.timeline.insertPopupState}
                            handleClose={this.switchStateTimelinePostInsertPopup}
                        />
                        <Timeline
                            items={this.state.timeline.items}
                            onPostAddClick={this.switchStateTimelinePostInsertPopup}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(DashboardPage)