import React from 'react';
import './App.css';
import ApplicationHeader from "../../components/ApplicationHeader";
import {Person} from "../../types/person";
import PersonsList from "../../components/PersonsList";

const App: React.FC = () => {
    const persons = [
        new Person('1', 'Владимир', 'Игоревич'),
        new Person('2', 'Анастасия', 'Анатольевна'),
        new Person('3', 'Игорь', 'Анатольевич'),
        new Person('4', 'Елена', 'Владимировна'),
        new Person('5', 'Самуэль', 'Джексон'),
    ];

    return (
        <div>
            <ApplicationHeader title={"Lobby"}>
                <PersonsList persons={persons} />
            </ApplicationHeader>
        </div>
    );
};

export default App;
