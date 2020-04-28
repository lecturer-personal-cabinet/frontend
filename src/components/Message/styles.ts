import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    message: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    messageContent: {
        display: 'flex',
        backgroundSize: 'cover',
        borderRadius: '7px',
        backgroundColor: '#3F50B5',
        color: '#fff',
        padding: '10px',
    },
    avatar: {
        display: 'flex',
        alignItems: 'center'
    }
});

export default styles;