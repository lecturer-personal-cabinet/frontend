import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {WithStyles} from "@material-ui/core";
import TimelineControlPanel from "../TimelineControlPanel";
import TimelinePost from "../TimelinePost";
import {UserTimelineItem} from "../../types/user_timeline";
import nanoid from 'nanoid';

interface Props extends WithStyles<typeof styles> {
    items: UserTimelineItem[],
    onPostAddClick: () => void,
}

function Timeline(props: Props) {
    return (
        <div>
            <TimelineControlPanel onPostAddClick={props.onPostAddClick} />
            {props.items.map(item => (
                <div className={props.classes.timelinePost} key={nanoid()}>
                    <TimelinePost item={item} />
                </div>
            ))}
        </div>
    );
}

export default withStyles(styles)(Timeline);