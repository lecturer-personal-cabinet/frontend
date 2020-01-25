import React from 'react';
import styles from "./styles";
import {withStyles, WithStyles} from "@material-ui/core";
import {Person} from "../../types/person";
import PersonsList from "../../components/PersonsList";
import ListActionBar from "../../components/ListActionBar";
import SendMessageDialog from "../../components/SendMessageDialog";

interface PersonsProps extends WithStyles<typeof styles> {

}

interface PersonsState {
    persons: Person[],
    openDialogWindow: boolean,
    selectedPersons: Person[],
}

class PersonsPage extends React.Component<PersonsProps, PersonsState> {
    private persons: Person[] = [
        new Person('1', 'Студент', 'Один'),
        new Person('2', 'Студент', 'Два'),
        new Person('3', 'Студент', 'Три'),
        new Person('4', 'Студент', 'Четыре'),
        new Person('5', 'Студент', 'Пять'),
        new Person('6', 'Пользователь', 'Один'),
        new Person('7', 'Пользователь', 'Два'),
        new Person('8', 'Пользователь', 'Три'),
        new Person('9', 'Пользователь', 'Четыре'),
        new Person('10', 'Пользователь', 'Пять'),
    ];

    constructor(props: PersonsProps) {
        super(props);
        this.state = {
            persons: this.persons,
            openDialogWindow: false,
            selectedPersons: [],
        };

        this.onDialogIconClick = this.onDialogIconClick.bind(this);
        this.onInfoIconClick = this.onInfoIconClick.bind(this);
    }

    private onDialogIconClick (persons: Person[]) {
        this.setState({
            ...this.state,
            openDialogWindow: !this.state.openDialogWindow,
            selectedPersons: persons,
        })
    }

    private onInfoIconClick (persons: Person[]) {

    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <SendMessageDialog openDialog={this.state.openDialogWindow}
                                   onDialogClose={this.onDialogIconClick}
                                   contacts={this.state.persons}
                                   selectedPersons={this.state.selectedPersons}/>

                <div className={this.props.classes.actionBar}>
                    <ListActionBar />
                </div>
                <PersonsList persons={this.persons}
                             onDialogIconClick={this.onDialogIconClick}
                             onInfoIconClick={this.onInfoIconClick} />
            </div>
        )
    }
}

export default withStyles(styles)(PersonsPage)