import React, { Component } from 'react';

import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
	state = {
		name: '',
		age: ''
	};

	nameHandler = (e) => {
		this.setState({
			name: e.target.value
		});
	};

	ageHandler = (e) => {
		this.setState({
			age: e.target.value
		});
	};

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<span>Persons added: {this.props.ctr}</span>
				<br />
				<br />
				<div style={{ textAlign: 'center' }}> Additions by date</div>
				<button onClick={() => this.props.onAddition(this.props.ctr)}>Additions</button>
				<br />
				<ul>
					{this.props.adds.map((addition) => (
						<li key={addition.date}>
							{addition.date} : Persons added: {addition.persons}
						</li>
					))}
				</ul>

				<input type="text" placeholder="name" value={this.state.name} onChange={this.nameHandler} />
				<input type="number" placeholder="age" value={this.state.age} onChange={this.ageHandler} />

				<AddPerson personAdded={() => this.props.onAddPerson(this.state.name, this.state.age)} />
				{this.props.pers.map((person) => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => this.props.onDeletePerson(person.id)}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.addPer.counter,
		pers: state.addPer.persons,
		adds: state.byD.additions
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPerson: (name, age) =>
			dispatch({
				type: actionTypes.ADD_PERSON,
				newPerson: {
					id: Math.random(), // not really unique but good enough here!
					name: name,
					age: age
				}
			}),
		onDeletePerson: (id) =>
			dispatch({
				type: actionTypes.DELETE_PERSON,
				personId: id
			}),
		onAddition: (persons) =>
			dispatch({
				type: actionTypes.ADDITION,
				personsAdded: persons
			})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
