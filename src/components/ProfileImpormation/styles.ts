import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    informationBlockItem: {
        padding: theme.spacing(3),
        textAlign: 'center',
        align: 'center',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    name: {
        fontWeight: 'bold',
        fontFamily: 'Ubuntu',
        fontSize: theme.spacing(5),
    },
    secondaryInformation: {
        fontSize: theme.spacing(2.5),
        fontFamily: 'Ubuntu',
    },
    avatar: {
        height: theme.spacing(25),
        width: theme.spacing(25),
        marginBottom: theme.spacing(5),
    },
    actionsBar: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    actionButton: {
        margin: theme.spacing(0, 2, 0, 2),
    }
});

export default styles;