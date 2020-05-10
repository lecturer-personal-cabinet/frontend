import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
    },
    text: {
        textTransform: 'uppercase',
    }
});

export default styles;