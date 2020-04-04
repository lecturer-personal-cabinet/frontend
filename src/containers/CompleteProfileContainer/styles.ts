import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1.5),
    },
    inputWithDefault: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    dialog: {
        width: '100%',
    }
});

export default styles;
