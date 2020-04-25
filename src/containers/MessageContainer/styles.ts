import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        marginTop: theme.spacing(-3),
        padding: theme.spacing(3),
        height: '91vh',
    },
    dialogWrapper: {
        margin: theme.spacing(3),
        padding: theme.spacing(1),
        height: '100%',
    }
});

export default styles;