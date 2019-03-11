const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                persons: state.persons.concat(action.newPerson)
            }
            case 'DELETE_PERSON':
            return {
                persons: state.persons.filter(person => person.id !== action.personId)
            }
        default:
            return state
    }
}

export default reducer