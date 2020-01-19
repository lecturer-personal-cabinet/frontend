import React from 'react';
import {withStyles, WithStyles} from "@material-ui/core";
import styles from "../StudentApplication/styles";

interface LecturerApplicationProps extends WithStyles<typeof styles> {

}

interface LecturerApplicationState {
    currentPage: {
        title: string
    }
}

class LecturerApplication extends React.Component<LecturerApplicationProps, LecturerApplicationState> {
    constructor(props: LecturerApplicationProps) {
        super(props);
        this.state = {
            currentPage: {
                title: 'Лобби преподавателя'
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.currentPage.title}
            </div>
        )
    }
}

export default withStyles(styles)(LecturerApplication);