import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    actionIcon: {
        fontSize: '30px',
        cursor: 'pointer',
        marginLeft: '10px',
        color: '#E54B49'
    },
});

export default styles;