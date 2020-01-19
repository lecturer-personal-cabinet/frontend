import React from 'react';
import styles from "./styles";
import {withStyles, WithStyles} from "@material-ui/core";
import {Person} from "../../../types/person";
import PersonsList from "../../../components/PersonsList";
import ListActionBar from "../../../components/ListActionBar";

interface StudentsListProps extends WithStyles<typeof styles> {

}

interface StudentsListState {
    persons: Person[]
}

class StudentsListPage extends React.Component<StudentsListProps, StudentsListState> {
    private persons: Person[] = [
        new Person('1', 'Студент', 'Один'),
        new Person('2', 'Студент', 'Два'),
        new Person('3', 'Студент', 'Три'),
        new Person('4', 'Студент', 'Четыре'),
        new Person('5', 'Студент', 'Пять'),
    ];

    constructor(props: StudentsListProps) {
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
                <PersonsList persons={this.persons} />
            </div>
        )
    }
}

export default withStyles(styles)(StudentsListPage)