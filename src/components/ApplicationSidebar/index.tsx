import React from 'react';
import clsx from 'clsx';
import {withStyles, WithStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TocIcon from '@material-ui/icons/Toc';
import {Badge, IconButton} from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import PersonIcon from '@material-ui/icons/Person';
import ClassIcon from '@material-ui/icons/Class';
import GroupIcon from '@material-ui/icons/Group';
import styles from "./styles";

interface ApplicationSidebarProps extends WithStyles<typeof styles> {
    openState: boolean,
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
            {/*TODO: Заметки*/}
            <List>
                <ListItem button key={'timetable-lectures'}>
                    <ListItemIcon><TocIcon/></ListItemIcon>
                    <ListItemText primary={'Расписание занятий'}/>
                </ListItem>
                <ListItem button key={'timetable-credit'}>
                    <ListItemIcon><AccessAlarmIcon/></ListItemIcon>
                    <ListItemText primary={'Расписание зачетов'}/>
                </ListItem>
                <ListItem button key={'timetable-exams'}>
                    <ListItemIcon><AlarmOnIcon/></ListItemIcon>
                    <ListItemText primary={'Расписание экзаменов'}/>
                </ListItem>
                <ListItem button key={'marks'}>
                    <ListItemIcon><AlarmOnIcon/></ListItemIcon>
                    <ListItemText primary={'Оценки'}/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button key={'lecturers'}>
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    <ListItemText primary={'Преподаватели'}/>
                </ListItem>
                <ListItem button key={'students'}>
                    <ListItemIcon><GroupIcon/></ListItemIcon>
                    <ListItemText primary={'Студенты'}/>
                </ListItem>
                <ListItem button key={'classroom-codes'}>
                    <ListItemIcon><ClassIcon/></ListItemIcon>
                    <ListItemText primary={'Коды для Google Classroom'}/>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default withStyles(styles)(ApplicationSidebar)