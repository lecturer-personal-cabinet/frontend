import {createStyles, Theme} from "@material-ui/core";

const defaultHeight = 40;

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
    },
    item: {
        height: theme.spacing(defaultHeight),
    },
    informationBlockItem: {
        height: theme.spacing(defaultHeight),
        padding: theme.spacing(3),
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    name: {
        fontWeight: 'bold',
        fontFamily: 'Ubuntu',
        fontSize: theme.spacing(5),
    }
});

export default styles;