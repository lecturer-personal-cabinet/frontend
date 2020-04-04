import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    informationBlockItem: {
        height: theme.spacing(40),
        padding: theme.spacing(3),
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
});

export default styles;