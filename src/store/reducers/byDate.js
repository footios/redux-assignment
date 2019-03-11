import * as actionTypes from '../actions'

const initialState = {
    additions: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
            case actionTypes.ADDITION:
            return {
                ...state,
                additions: state.additions.concat( {date: new Date().toString(), persons: action.personsAdded})
            }
        default:
            return state
    }
}

export default reducer