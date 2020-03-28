import React from 'react';
import {Avatar, Grid, Hidden, Paper, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import InformationPaper from "../../components/InformationPaper";
import Timeline from '../../components/Timeline';
import {UserTimelineItem} from "../../types/user_timeline";
import TimelinePostForm from "../../components/forms/TimelinePostForm";
import {RootState} from "../../store";
import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";
import {getAllPosts, setTimelineLoading} from "../../actions/user_timeline";
import PageLoader from "../../components/PageLoader";

interface StateToProps extends WithStyles<typeof styles> {
    timeline: {
        items: UserTimelineItem[]
    },
    loading: {
        timelineLoading: boolean,
    }
}

interface DispatchToProps {
    getAllPosts: (userId: string) => void,
    setTimelineLoading: (loading: boolean) => void,
}

type Props = StateToProps & DispatchToProps

interface State {
    timeline: {
        insertPopupState: boolean,
    },
}

class DashboardPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            timeline: {
                insertPopupState: false,
            },
        };
    }

    componentWillMount(): void {
        this.props.setTimelineLoading(true);
        this.props.getAllPosts('USR1');
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
        if(this.props.loading.timelineLoading) return <PageLoader />;
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
                            items={this.props.timeline.items}
                            onPostAddClick={this.switchStateTimelinePostInsertPopup}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    timeline: {
        items: state.userTimelineState.ownPosts
    },
    loading: {
        timelineLoading: state.userTimelineState.ownTimelineLoading,
    }
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getAllPosts: (userId: string) => dispatch(getAllPosts(userId)),
    setTimelineLoading: (loading: boolean) => dispatch(setTimelineLoading(loading)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DashboardPage))