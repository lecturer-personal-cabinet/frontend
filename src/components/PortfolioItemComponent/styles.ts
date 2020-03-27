import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
    },
    description: {
        fontStyle: 'italic',
    },
    galleryRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(3),
    },
    gridList: {
        width: 700,
        height: 450,
    },
});

export default styles;