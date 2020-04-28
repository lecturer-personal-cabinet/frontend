import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    messageWrapper: {
        paddingTop: theme.spacing(0.5),
        width: '100%',
    },
    listWrapper: {
        maxHeight: '100%',
        overflow: 'auto'
    }
});

export default styles;