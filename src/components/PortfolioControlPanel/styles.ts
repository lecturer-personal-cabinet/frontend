import {createStyles, fade, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
    },
    actionIcon: {
        fontSize: theme.spacing(5),
        marginRight: theme.spacing(3),
        cursor: 'pointer',
        color: fade('#3F50B5', 0.65),
        '&:hover': {
            color: fade('#3F50B5', 1),
        },
    }
});

export default styles;