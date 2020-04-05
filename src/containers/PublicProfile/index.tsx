import React from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import Grid from '@material-ui/core/Grid';
import {RootState} from "../../store";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import ProfileInformation from "../../components/ProfileImpormation";
import InformationPaper from "../../components/InformationPaper";
import {UserTimelineItem} from "../../types/user_timeline";
import {User, UserInfo} from "../../types/users";
import {getAllPosts, savePost} from "../../actions/user_timeline";
import {setProfileInfoLoading, setProfileLoading, setTimelineLoading} from "../../actions/loadings";
import {getProfile, getProfileInfo} from "../../actions/users";
import TimelinePost from "../../components/TimelinePost";
import PageLoader from "../../components/PageLoader";
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    userId: string,
}

interface MapStateToProps extends WithStyles<typeof styles>, RouteComponentProps<MatchParams> {
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

interface MapDispatchToProps {
    getAllPosts: (userId: string) => void,
    setTimelineLoading: (loading: boolean) => void,
    setProfileLoading: (loading: boolean) => void,
    setProfileInfoLoading: (loading: boolean) => void,
    getProfile: (userId: string) => void,
    getProfileInfo: (userId: string) => void,
}

type Props = MapStateToProps & MapDispatchToProps;

interface State {

}

class PublicProfile extends React.Component<Props, State> {
    UNSAFE_componentWillMount(): void {
        this.props.setTimelineLoading(true);
        this.props.setProfileLoading(true);
        this.props.setProfileInfoLoading(true);
        this.props.getProfile(this.props.match.params.userId);
        this.props.getProfileInfo(this.props.match.params.userId);
        this.props.getAllPosts(this.props.match.params.userId);
    }

    constructor(props: Props) {
        super(props);
    }

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
                        />
                    </Grid>
                    <Grid item md={12}>
                        <InformationPaper
                            title={'О себе'}
                            content={this.props.profileInfo.description}
                        />
                    </Grid>
                    <Grid item md={12}>
                        {this.props.timeline.items.map(item => (
                            <div style={{marginTop: '10px'}}>
                                <TimelinePost item={item} />
                            </div>
                        ))}
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
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PublicProfile))