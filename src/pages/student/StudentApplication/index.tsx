import React from 'react';
import styles from "./styles";
import {WithStyles, withStyles} from "@material-ui/core";
import ApplicationHeader from "../../../components/ApplicationHeader";
import StudentsListPage from "../StudentsList";
import {sidebarItems} from "./menu";

interface StudentApplicationProps extends WithStyles<typeof styles> {

}

interface StudentApplicationState {
    currentPage: {
        title: string
    }
}

class StudentApplication extends React.Component<StudentApplicationProps, StudentApplicationState> {
    constructor(props: StudentApplicationProps) {
        super(props);
        this.state = {
            currentPage: {
                title: 'Лобби студента'
            }
        }
    }

    render() {
        return (
            <ApplicationHeader
                title={this.state.currentPage.title}
                sidebarItems={sidebarItems}
            >
                <StudentsListPage />
            </ApplicationHeader>
        )
    }
}

export default withStyles(styles)(StudentApplication);