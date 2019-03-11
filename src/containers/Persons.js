import React, { Component } from 'react';

import { connect } from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'


class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );

    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <div style={{textAlign:'center'}} >Persons added: {this.props.ctr}</div>
                <br></br>
                <div style={{textAlign:'center'}}> Additions by date 
                <br></br>
                <button style={{width:'10%'}} onClick={() => this.props.onAddition(this.props.ctr)}>
                Add by date </button>
                <br></br>
                <ul>
                {this.props.adds.map(addition => (
                    <li key={addition.date}>{addition.date} : Persons added: {addition.persons}</li>
                ))} 
                </ul>
            </div>
                
                
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.pers.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.addPer.counter,
        pers: state.addPer.persons,
        adds: state.byD.additions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({
            type: actionTypes.ADD_PERSON,
            newPerson: {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
        }),
        onDeletePerson: (id) => dispatch({
            type: actionTypes.DELETE_PERSON, personId: id
        }),
        onAddition: (persons) => dispatch({
            type: actionTypes.ADDITION, personsAdded: persons
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);