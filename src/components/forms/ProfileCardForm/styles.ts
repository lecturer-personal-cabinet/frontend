import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3)
    },
    media: {
        height: 345
    },
    formElement: {
        marginTop: theme.spacing(2),
    }
});

export default styles;
