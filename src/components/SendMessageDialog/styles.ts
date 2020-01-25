import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        padding: theme.spacing(6, 2, 2, 2),
    },
    autocompleteContainer: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    },
    container: {
        padding: theme.spacing(2, 0, 2, 0),
    },
    messageTextBox: {
        width: '100%',
    }
});

export default styles;