import React from 'react';
import clsx from 'clsx';
import {
    AppBar,
    Badge,
    Button,
    CssBaseline,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    withStyles,
    WithStyles
} from "@material-ui/core";
import ApplicationSidebar from "../ApplicationSidebar";
import styles from "./styles";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import {SidebarItem} from "../ApplicationSidebar/types";
import {RootState} from "../../store";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {logout} from "../../actions/authentication";

interface MapStateToProps {}

interface MapDispatchToProps {
    logout: () => void,
}

interface ApplicationHeaderProps extends WithStyles<typeof styles> {
    title: string,
    sidebarItems: SidebarItem[][],
    userName?: string,
    withNotifications: boolean,
    withMenu: boolean,
}

type Props = MapStateToProps & MapDispatchToProps & ApplicationHeaderProps;

interface ApplicationHeaderState {
    sidebar: {
        state: boolean,
    },
    header: {
        accountMenuState: boolean,
        anchorElement: Element | null,
    }
}

class ApplicationHeader extends React.Component<Props, ApplicationHeaderState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            sidebar: {
                state: false
            },
            header: {
                accountMenuState: false,
                anchorElement: null,
            },
        };
    }

    private handleSidebarState = () => {
        this.setState({
            sidebar: {
                ...this.state.sidebar,
                state: !this.state.sidebar.state
            }
        })
    };

    private handleAccountMenuState = (e: React.MouseEvent<HTMLElement>) => {
        this.setState({
            header: {
                ...this.state.header,
                accountMenuState: !this.state.header.accountMenuState,
                anchorElement: e.target as Element,
            }
        })
    };

    render() {
        return (
            <div>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(this.props.classes.appBar, {
                        [this.props.classes.appBarShift]: this.state.sidebar.state,
                    })}
                >
                    <Toolbar className={this.props.classes.toolbar}>
                        <IconButton
                            color="inherit"
                            area-label="open draw"
                            onClick={this.handleSidebarState}
                            edge="start"
                            className={this.props.classes.sidebarButton}>
                            {this.state.sidebar.state ?
                                <ChevronLeft/> :
                                <Badge badgeContent={this.props.withNotifications ? 1 : undefined} color="secondary">
                                    <ChevronRight/>
                                </Badge>
                            }
                        </IconButton>
                        <Typography variant="h6" noWrap className={this.props.classes.pageTitle}>
                            {this.props.title}
                        </Typography>
                        {this.props.withMenu &&
                            <Button color="inherit"
                                    aria-controls="account-menu"
                                    aria-haspopup="true"
                                    className={this.props.classes.accountMenuButton}
                                    onClick={this.handleAccountMenuState}>
                                {!this.props.userName ? 'Меню' : this.props.userName}
                            </Button>
                        }
                        <Menu
                            id="account-menu"
                            keepMounted
                            anchorEl={this.state.header.anchorElement}
                            open={this.state.header.accountMenuState}
                            onClose={this.handleAccountMenuState}
                        >
                            <MenuItem
                                onClick={() => this.props.logout()}
                            >
                                Выйти
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <ApplicationSidebar
                    openState={this.state.sidebar.state}
                    sidebarItems={this.props.sidebarItems}
                    withNotifications={this.props.withNotifications}
                />

                <main
                    className={clsx({
                        [this.props.classes.contentShift]: this.state.sidebar.state,
                        [this.props.classes.contentWidth]: !this.state.sidebar.state,
                    })}
                >
                    (<div className={this.props.classes.drawerHeader}/>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    logout: () => dispatch(logout()),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ApplicationHeader))