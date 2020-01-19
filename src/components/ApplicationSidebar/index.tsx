import React from 'react';
import clsx from 'clsx';
import {withStyles, WithStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Badge, IconButton} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import styles from "./styles";
import {SidebarItem} from "./types";

interface ApplicationSidebarProps extends WithStyles<typeof styles> {
    openState: boolean,
    sidebarItems: SidebarItem[][],
}

function ApplicationSidebar(props: ApplicationSidebarProps) {
    return (
        <Drawer
            variant="permanent"
            className={clsx(props.classes.drawer, {
                [props.classes.drawerOpen]: props.openState,
                [props.classes.drawerClose]: !props.openState,
            })}
            classes={{
                paper: clsx({
                    [props.classes.drawerOpen]: props.openState,
                    [props.classes.drawerClose]: !props.openState,
                }),
            }}
        >
            <div className={props.classes.toolbar}>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={6} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
            </div>
            <Divider/>
            {props.sidebarItems.map(section => (
                <div>
                    <List>
                        {section.map(sidebarItem => (
                            <ListItem button key={sidebarItem.path} className={clsx({
                                [props.classes.activeMenuButton]: sidebarItem.isActive,
                            })}>
                                <ListItemIcon><Icon>{sidebarItem.itemIcon}</Icon></ListItemIcon>
                                <ListItemText primary={sidebarItem.itemTitle}/>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                </div>
            ))}
        </Drawer>
    );
}

export default withStyles(styles)(ApplicationSidebar)