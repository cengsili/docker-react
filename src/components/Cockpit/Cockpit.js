import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/_Aux'

const cockpit = (props) => {
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    let buttonClass='';
    if (props.showPersons) {  
        buttonClass=classes.Red;
    }
    return (
        <Aux>
            <div className={classes.Cockpit}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={buttonClass}
                    onClick={props.clicked}>Toogle Name</button>
                <button onClick={props.login}>Login</button>
            </div>
        </Aux>
    );
}
export default React.memo( cockpit);