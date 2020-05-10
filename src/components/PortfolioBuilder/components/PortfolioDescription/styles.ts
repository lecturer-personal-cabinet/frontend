import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
    },
    subtitle: {
        fontWeight: 'bold',
    },
    content: {
        marginTop: theme.spacing(3),
    }
});

export default styles;