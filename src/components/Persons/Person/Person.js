import React, { Component } from 'react';

import classes from './Person.css';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App'

class Person extends Component {

    render() {
        return (
           
            <div className={classes.Person}>
                <AuthContext.Consumer>
                    {auth =>auth === true ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>                
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(inp)=>{this.inputElement=inp}}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </div>
        )
    };


}
Person.PropTypes={
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed: PropTypes.func
};
export default Person;