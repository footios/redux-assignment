import * as actionTypes from '../actions'

const initialState = {
    counter: 0,
    persons: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                counter: state.counter + 1,
                persons: state.persons.concat(action.newPerson)
            }
            case actionTypes.DELETE_PERSON:
            return {
                ...state,
                counter: state.counter - 1,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
        default:
            return state
    }
}

export default reducer