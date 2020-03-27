import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {GridList, GridListTile, Hidden, Paper, WithStyles} from "@material-ui/core";
import {PortfolioItem} from "../../types/portfolio";
import nanoid from "nanoid";
import PostSignature from "../PostSignature";
import PostPreviewDialog from "../PostPreviewDialog";

interface Props extends WithStyles<typeof styles> {
    item: PortfolioItem,
}

function PortfolioItemComponent(props: Props) {
    const [openPreview, setOpenPreview] = React.useState(false);
    const title = (title: string) => (<h2>{title}</h2>);

    const description = (description: string) => (
        <div className={props.classes.description}>
            {description}
        </div>
    );

    const gallery = (paths: string[]) => (
        <div className={props.classes.galleryRoot} onClick={() => {}}>
            <GridList cellHeight={160} className={props.classes.gridList} cols={3} key={nanoid()}>
                {paths.map(path => (
                    <GridListTile key={path} cols={1}>
                        <img src={path} alt={path} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );

    return (
        <div>
            <PostPreviewDialog
                open={openPreview}
                handleClose={() => setOpenPreview(false)}
                title={props.item.title}
                content={props.item.description}
                signerFullName={`${props.item.creator.firstName} ${props.item.creator.lastName}`}
                signerTimestamp={props.item.created}
            />
            <Paper className={props.classes.root} onClick={() => setOpenPreview(true)}>
                {title(props.item.title)}
                {description(props.item.description)}
                <Hidden xsDown>
                    {gallery(props.item.portfolioPhotos)}
                </Hidden>
                <PostSignature
                    fullName={`${props.item.creator.firstName} ${props.item.creator.lastName}`}
                    timestamp={props.item.created}
                />
            </Paper>
        </div>
    );
}

export default withStyles(styles)(PortfolioItemComponent);