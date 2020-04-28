import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    paperWrapper: {
        padding: theme.spacing(2),
    },
    fullName: {
        fontWeight: 'bold',
    },
    messagePreview: {},
    unreadNumber: {},
});

export default styles;