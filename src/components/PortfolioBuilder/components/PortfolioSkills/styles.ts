import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
    },
    subtitle: {
        fontWeight: 'bold',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
});

export default styles;