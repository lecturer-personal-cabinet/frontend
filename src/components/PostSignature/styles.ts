import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    signature: {
        marginTop: theme.spacing(6),
    },
    signatureTimestamp: {
        textAlign: 'right',
    },
});

export default styles;