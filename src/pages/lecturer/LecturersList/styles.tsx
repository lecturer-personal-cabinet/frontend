import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
    },
    actionBar: {
        padding: theme.spacing(1, 0, 3, 0),
    },
});

export default styles;