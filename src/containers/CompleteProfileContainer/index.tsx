import React, {ChangeEvent} from 'react';
import {Button, Dialog, Grid, Paper, TextField, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import {RootState} from "../../store";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {User, UserInfo} from "../../types/users";
import {getProfile, getProfileInfo, saveProfileAndProfileInfo} from "../../actions/users";
import {setProfileInfoLoading, setProfileLoading} from "../../actions/loadings";
import PageLoader from "../../components/PageLoader";

interface MapStateToProps extends WithStyles<typeof styles> {
    profile: User,
    profileInfo?: UserInfo,

    loading: {
        profile: boolean,
        profileInfo: boolean,
    },
}

interface MapDispatchToProps {
    getProfile: (userId: string) => void,
    getProfileInfo: (userId: string) => void,
    setProfileLoading: (loading: boolean) => void,
    setProfileInfoLoading: (loading: boolean) => void,
    saveProfileAndProfileInfo: (info: UserInfo, profile: User) => void,
}

type Props = MapStateToProps & MapDispatchToProps;

interface State {
    form: {
        firstName: string,
        lastName: string,
        description: string,
        address: string,
        phoneNumber: string,
    },
    error: {
        firstName: string,
        lastName: string,
        description: string,
        address: string,
        phoneNumber: string,
    }
}

class CompleteProfileContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                description: '',
                address: '',
                phoneNumber: '',
            },
            error: {
                firstName: '',
                lastName: '',
                description: '',
                address: '',
                phoneNumber: '',
            }
        }
    }

    UNSAFE_componentWillMount(): void {
        this.props.setProfileLoading(true);
        this.props.setProfileInfoLoading(true);
        this.props.getProfile(localStorage.getItem('userId') || '');
        this.props.getProfileInfo(localStorage.getItem('userId') || '');
    }

    private isLoading = () => this.props.loading.profile || this.props.loading.profileInfo;

    private inputWithDefault = (label: string, name: string, error: string, maybeValue?: string) => (
        <TextField
            className={this.props.classes.inputWithDefault}
            label={label}
            value={maybeValue}
            onChange={this.onChange}
            name={name}
            error={error.length > 0}
            helperText={error}
            variant="outlined"/>
    );

    private multilineInputWithDefault = (label: string, lines: number, name: string, error: string, maybeValue?: string) => (
        <TextField
            className={this.props.classes.inputWithDefault}
            multiline
            rows={lines}
            label={label}
            value={maybeValue}
            onChange={this.onChange}
            name={name}
            error={error.length > 0}
            helperText={error}
            variant="outlined"/>
    );

    private title = () => (
        <Paper className={this.props.classes.paper}>
            {this.props.profileInfo && <h1>Редактирование профиля</h1> || <h1>Завершите настройку профиля</h1>}
        </Paper>
    );

    private userData = (user: User) => (
        <Paper className={this.props.classes.paper}>
            <Grid container>
                <Grid item xs={12}>
                    {this.inputWithDefault('Имя',
                        'firstName',
                        this.state.error.firstName,
                        this.state.form.firstName || user.firstName)}
                </Grid>
                <Grid item xs={12}>
                    {this.inputWithDefault('Фамилия',
                        'lastName',
                        this.state.error.lastName,
                        this.state.form.lastName || user.lastName)}
                </Grid>
            </Grid>
        </Paper>
    );

    private userInfo = (userInfo?: UserInfo) => (
        <Paper className={this.props.classes.paper}>
            <Grid container>
                <Grid item xs={12}>
                    {this.multilineInputWithDefault('О себе',
                        5,
                        'description',
                        this.state.error.description,
                        this.state.form.description || userInfo?.description)}
                </Grid>
                <Grid item xs={12}>
                    {this.inputWithDefault('Адрес',
                        'address',
                        this.state.error.address,
                        this.state.form.address || userInfo?.address)}
                </Grid>
            </Grid>
        </Paper>
    );

    private onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const error = this.validateInput(e);

        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
            error: {
                ...this.state.error,
                [e.target.name]: error,
            }
        })
    };

    private validateInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const name = e.target.name;
        let error = '';
        switch (name) {
            case 'firstName':
                error = this.validateFirstName(e.target.value);
                break;
            case 'lastName':
                error = this.validateLastName(e.target.value);
                break;
            case 'description':
                error = this.validateDescription(e.target.value);
                break;
            case 'address':
                error = this.validateAddress(e.target.value);
                break;
            case 'phoneNumber':
                error = this.validatePhoneNumber(e.target.value);
                break;
        }

        return error;
    };

    private validateFirstName = (value: string) => {
        if (value.length < 3) {
            return 'Имя не может быть меньше 3 символов';
        } else if (value.length > 50) {
            return 'Имя не может быть больше 50 символов';
        } else {
            return '';
        }

    };

    private validateLastName = (value: string) => {
        if (value.length < 3) {
            return 'Фамилия не может быть меньше 3 символов';
        } else if (value.length > 50) {
            return 'Фамилия не может быть больше 50 символов';
        } else {
            return '';
        }
    };

    private validateDescription = (value: string) => {
        if (value.length < 10) {
            return 'Описание не может быть меньше 10 символов';
        } else if (value.length > 2000) {
            return 'Описание не может быть больше 2000 символов';
        } else {
            return '';
        }
    };

    private validateAddress = (value: string) => {
        if (value.length < 10) {
            return 'Адрес не может быть меньше 10 символов';
        } else if (value.length > 50) {
            return 'Адрес не может быть больше 50 символов';
        } else {
            return '';
        }
    };

    private validatePhoneNumber = (value: string) => {
        return '';
    };

    private validateAll = () => {
        const firstNameError = this.validateFirstName(this.state.form.firstName || this.props.profile.firstName);
        const lastNameError = this.validateLastName(this.state.form.lastName || this.props.profile.lastName);
        const descriptionError = this.validateDescription(this.state.form.description || this.props.profileInfo?.description || '');
        const addressError = this.validateAddress(this.state.form.address || this.props.profileInfo?.address || '');
        const phoneError = this.validatePhoneNumber(this.state.form.phoneNumber || this.props.profileInfo?.phoneNumber || '');

        this.setState({
            ...this.state,
            error: {
                firstName: firstNameError,
                lastName: lastNameError,
                description: descriptionError,
                address: addressError,
                phoneNumber: phoneError
            }
        });

        return firstNameError.length === 0 &&
            lastNameError.length === 0 &&
            descriptionError.length === 0 &&
            addressError.length === 0 &&
            phoneError.length === 0;
    };

    private submit = () => {
        const isValid = this.validateAll();
        if (!isValid) return;

        const profile = {
            id: this.props.profile.id,
            firstName: this.state.form.firstName || this.props.profile.firstName,
            lastName: this.state.form.lastName || this.props.profile.lastName,
            email: this.props.profile.email,
        };

        const info = {
            description: this.state.form.description || this.props.profileInfo?.description || '',
            timezone: '',
            address: this.state.form.address || this.props.profileInfo?.address || '',
            phoneNumber: this.state.form.phoneNumber || this.props.profileInfo?.phoneNumber || '',
        };

        this.setState({
            form: {
                firstName: '',
                lastName: '',
                description: '',
                address: '',
                phoneNumber: '',
            },
            error: {
                firstName: '',
                lastName: '',
                description: '',
                address: '',
                phoneNumber: '',
            }
        }, () => this.props.saveProfileAndProfileInfo(info, profile));
    };

    render() {
        if (this.isLoading()) return <PageLoader/>;
        return (
            <Dialog open={true} fullWidth={true} maxWidth={"md"}>
                <div className={this.props.classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {this.title()}
                        </Grid>
                        <Grid item xs={12}>
                            {this.userData(this.props.profile)}
                        </Grid>
                        <Grid item xs={12}>
                            {this.userInfo(this.props.profileInfo)}
                        </Grid>
                        <Grid container item xs={12} justify="flex-end">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => this.submit()}
                            >
                                Сохранить
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Dialog>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    profile: state.userState.profile!,
    profileInfo: state.userState.profileInfo,
    availableTimezones: state.commonState.timezones,
    loading: {
        profile: state.loadingState.profile,
        profileInfo: state.loadingState.profileInfo,
        timezones: state.loadingState.timezones,
    }
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getProfile: (userId: string) => dispatch(getProfile(userId)),
    getProfileInfo: (userId: string) => dispatch(getProfileInfo(userId)),
    setProfileLoading: (loading: boolean) => dispatch(setProfileLoading(loading)),
    setProfileInfoLoading: (loading: boolean) => dispatch(setProfileInfoLoading(loading)),
    saveProfileAndProfileInfo: (info: UserInfo, profile: User) => dispatch(saveProfileAndProfileInfo(info, profile)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CompleteProfileContainer))
