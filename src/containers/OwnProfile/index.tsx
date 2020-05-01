import React from 'react';
import {Avatar, Grid, Paper, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import InformationPaper from "../../components/InformationPaper";
import Timeline from '../../components/Timeline';
import {UserTimelineItem} from "../../types/user_timeline";
import TimelinePostForm from "../../components/forms/TimelinePostForm";
import {RootState} from "../../store";
import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";
import PageLoader from "../../components/PageLoader";
import {User, UserInfo} from "../../types/users";
import {setProfileInfoLoading, setProfileLoading, setTimelineLoading} from "../../actions/loadings";
import {getProfile, getProfileInfo} from "../../actions/users";
import {getAllPosts, savePost} from "../../actions/user_timeline";
import ProfileInformation from "../../components/ProfileImpormation";
import {isAuthenticated} from "../../actions/authentication";

interface StateToProps extends WithStyles<typeof styles> {
    timeline: {
        items: UserTimelineItem[]
    },
    loading: {
        timelineLoading: boolean,
        profileLoading: boolean,
        profileInfoLoading: boolean,
    },
    profile: User,
    profileInfo: UserInfo,
}

interface DispatchToProps {
    getAllPosts: (userId: string) => void,
    setTimelineLoading: (loading: boolean) => void,
    setProfileLoading: (loading: boolean) => void,
    setProfileInfoLoading: (loading: boolean) => void,
    getProfile: (userId: string) => void,
    getProfileInfo: (userId: string) => void,
    savePost: (userId: string, title: string, content: string, sender: User) => void,
}

type Props = StateToProps & DispatchToProps

interface State {
    timeline: {
        insertPopupState: boolean,
    },
}

class OwnProfile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            timeline: {
                insertPopupState: false,
            },
        };
    }

    UNSAFE_componentWillMount(): void {
        this.props.setTimelineLoading(true);
        this.props.setProfileLoading(true);
        this.props.setProfileInfoLoading(true);
        this.props.getProfile(localStorage.getItem('userId') || '');
        this.props.getProfileInfo(localStorage.getItem('userId') || '');
        this.props.getAllPosts(localStorage.getItem('userId') || '');
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

    private switchStateTimelinePostInsertPopup = () => {
      this.setState({
          ...this.state,
          timeline: {
              ...this.state.timeline,
              insertPopupState: !this.state.timeline.insertPopupState,
          }
      });
    };

    private savePost = (title: string, content: string) => {
        this.props.savePost(
            this.props.profile.id || localStorage.getItem('userId') || '',
            title,
            content,
            this.props.profile);
        this.switchStateTimelinePostInsertPopup();
    };

    render() {
        if(this.props.loading.timelineLoading ||
            this.props.loading.profileLoading ||
            this.props.loading.profileInfoLoading) return <PageLoader />;
        return (
            <div className={this.props.classes.root}>
                <Grid container spacing={3}>
                    <Grid item md={12} xs={12} sm={12}>
                        <ProfileInformation
                            firstName={this.props.profile.firstName}
                            lastName={this.props.profile.lastName}
                            faculty=''
                            groupNumber={''}
                            formattedBirthdayDate={''}
                            isAuthenticated={isAuthenticated()}
                            withActiveBar={false}
                            onSendMessageClick={() => {}}
                            onPortfolioClick={() => {}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InformationPaper
                            title={'О себе'}
                            content={this.props.profileInfo.description}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TimelinePostForm
                            open={this.state.timeline.insertPopupState}
                            handleClose={this.switchStateTimelinePostInsertPopup}
                            handleSave={this.savePost}
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
        items: state.userTimelineState.posts
    },
    loading: {
        timelineLoading: state.loadingState.timeline,
        profileLoading: state.loadingState.profile,
        profileInfoLoading: state.loadingState.profileInfo,
    },
    profile: state.userState.profile!,
    profileInfo: state.userState.profileInfo!,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getAllPosts: (userId: string) => dispatch(getAllPosts(userId)),
    setTimelineLoading: (loading: boolean) => dispatch(setTimelineLoading(loading)),
    setProfileLoading: (loading: boolean) => dispatch(setProfileLoading(loading)),
    setProfileInfoLoading: (loading: boolean) => dispatch(setProfileInfoLoading(loading)),
    getProfile: (userId: string) => dispatch(getProfile(userId)),
    getProfileInfo: (userId: string) => dispatch(getProfileInfo(userId)),
    savePost: (userId: string, title: string, content: string, sender: User) => dispatch(savePost(userId, title, content, sender)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OwnProfile))