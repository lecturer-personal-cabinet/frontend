import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Paper, WithStyles} from "@material-ui/core";
import {UserTimelineItem} from "../../types/user_timeline";
import PostPreviewDialog from "../PostPreviewDialog";
import PostSignature from "../PostSignature";

interface Props extends WithStyles<typeof styles> {
    item: UserTimelineItem,
}

function TimelinePost(props: Props) {
    const [openPreview, setOpenPreview] = React.useState(false);

    const title = (title: string) => (<h2>{title}</h2>);

    const content = (content: string) => (
        <div className={props.classes.description}>
            {content}
        </div>
    );

    return (
        <div>
            <PostPreviewDialog
                open={openPreview}
                handleClose={() => setOpenPreview(false)}
                title={props.item.title}
                content={props.item.content}
                signerFullName={`${props.item.sender.firstName} ${props.item.sender.lastName}`}
                signerTimestamp={props.item.timestamp}
            />
            <Paper className={props.classes.root} onClick={() => setOpenPreview(true)}>
                {title(props.item.title)}
                {content(props.item.content)}
                <PostSignature
                    fullName={`${props.item.sender.firstName} ${props.item.sender.lastName}`}
                    timestamp={props.item.timestamp}
                />
            </Paper>
        </div>
    );
}

export default withStyles(styles)(TimelinePost);