import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3, 0, 3, 3),
    },
    mainText: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        fontFamily: 'Ubuntu',
        fontSize: '1.5em'
    },
    actions: {

    },
    actionsList: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    actionItem: {
        cursor: 'pointer',
        fontSize: '1.7em',
    },
});

export default styles;