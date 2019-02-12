import React, { Component,PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/_Aux'
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);
class App extends PureComponent {
  state = {
    persons: [
      { id: 'a', name: 'Max', age: 28 },
      { id: 'b', name: 'Manu', age: 29 },
      { id: 'c', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    authenticated: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    // const persons =this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return id === p.id
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  toggleNameHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  static getDerivedStateFromProps(nextProps,prevState){

  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )
    }

    //   let classes=['red','bold'].join(' ');
    return (

      <Aux>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.toggleNameHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>

      </Aux>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


export default WithClass(App, classes.App);
