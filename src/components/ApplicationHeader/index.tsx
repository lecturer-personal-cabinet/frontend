import React from 'react';
import clsx from 'clsx';
import {AppBar, Badge, CssBaseline, IconButton, Toolbar, Typography, withStyles, WithStyles} from "@material-ui/core";
import ApplicationSidebar from "../ApplicationSidebar";
import styles from "./styles";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import {SidebarItem} from "../ApplicationSidebar/types";

export interface ApplicationHeaderProps extends WithStyles<typeof styles> {
    title: string,
    sidebarItems: SidebarItem[][]
}

interface ApplicationHeaderState {
    sidebar: {
        state: boolean,
    }
}

class ApplicationHeader extends React.Component<ApplicationHeaderProps, ApplicationHeaderState> {
    constructor(props: ApplicationHeaderProps) {
        super(props);
        this.state = {
            sidebar: {
                state: false
            }
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
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            area-label="open draw"
                            onClick={this.handleSidebarState}
                            edge="start"
                            className={clsx(this.props.classes.menuButton)}>
                            {this.state.sidebar.state ?
                                <ChevronLeft/> :
                                <Badge badgeContent={17} color="secondary">
                                    <ChevronRight/>
                                </Badge>
                            }
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ApplicationSidebar
                    openState={this.state.sidebar.state}
                    sidebarItems={this.props.sidebarItems}
                />
                <main
                    className={clsx({
                        [this.props.classes.contentShift]: this.state.sidebar.state,
                        [this.props.classes.contentWidth]: !this.state.sidebar.state
                    })}
                >
                    <div className={this.props.classes.drawerHeader}/>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(ApplicationHeader)