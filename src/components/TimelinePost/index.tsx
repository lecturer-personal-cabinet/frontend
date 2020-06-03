import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Paper, Typography, WithStyles} from "@material-ui/core";
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
            <Typography>
                <pre style={{ fontFamily: 'inherit' }}>
                    {content}
                </pre>
            </Typography>
        </div>
    );

    return (
        <div>
            <PostPreviewDialog
                open={openPreview}
                handleClose={() => setOpenPreview(false)}
                title={props.item.title}
                content={props.item.content}
                signerFullName={`${props.item.senderFirstName} ${props.item.senderLastName}`}
                signerTimestamp={props.item.createdTs}
            />
            <Paper className={props.classes.root} onClick={() => setOpenPreview(true)}>
                {title(props.item.title)}
                {content(props.item.content)}
                <PostSignature
                    fullName={`${props.item.senderFirstName} ${props.item.senderLastName}`}
                    timestamp={props.item.createdTs}
                />
            </Paper>
        </div>
    );
}

export default withStyles(styles)(TimelinePost);