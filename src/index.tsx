import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import StudentApplication from './pages/student/StudentApplication';
import LecturerApplication from './pages/lecturer/LecturerApplication';

ReactDOM.render((
    <Router>
        <Route path='/s' component={StudentApplication}/>
        <Route path='/l' component={LecturerApplication}/>
    </Router>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
