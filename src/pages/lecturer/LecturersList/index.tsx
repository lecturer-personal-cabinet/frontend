import React from 'react';
import styles from "./styles";
import {withStyles, WithStyles} from "@material-ui/core";
import {Person} from "../../../types/person";
import PersonsList from "../../../components/PersonsList";
import ListActionBar from "../../../components/ListActionBar";

interface LecturersListProps extends WithStyles<typeof styles> {

}

interface LecturersListState {
    persons: Person[]
}

class LecturersListPage extends React.Component<LecturersListProps, LecturersListState> {
    private persons: Person[] = [
        new Person('1', 'Преподаватель', 'Один'),
        new Person('2', 'Преподаватель', 'Два'),
        new Person('3', 'Преподаватель', 'Три'),
        new Person('4', 'Преподаватель', 'Четыре'),
        new Person('5', 'Преподаватель', 'Пять'),
    ];

    constructor(props: LecturersListProps) {
        super(props);
        this.state = {
            persons: this.persons,
        }
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.actionBar}>
                    <ListActionBar />
                </div>
                <PersonsList persons={this.state.persons} />
            </div>
        )
    }
}

export default withStyles(styles)(LecturersListPage)