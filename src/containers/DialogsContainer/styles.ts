import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
        height: '75vh',
    },
    table: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    dialogRow: {
        cursor: 'pointer',
        marginTop: theme.spacing(1),
    }
});

export default styles;