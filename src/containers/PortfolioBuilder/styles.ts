import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3)
    },
    mainImage: {
        width: '80%',
        marginLeft: '10%',
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    items: {
        marginTop: theme.spacing(5),
    }
});

export default styles;