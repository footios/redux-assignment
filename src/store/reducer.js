// import * as actionTypes from './actions'

// const initialState = {
//     counter: 0,
//     persons: [],
//     additions: []
// }

// const reducer = (state = initialState, action) => {
//     console.log(state.additions);
    
//     switch (action.type) {
//         case actionTypes.ADD_PERSON:
//             return {
//                 ...state,
//                 counter: state.counter + 1,
//                 persons: state.persons.concat(action.newPerson)
//             }
//             case actionTypes.DELETE_PERSON:
//             return {
//                 ...state,
//                 counter: state.counter - 1,
//                 persons: state.persons.filter(person => person.id !== action.personId)
//             }
//             case actionTypes.ADDITION:
//             return {
//                 ...state,
//                 additions: state.additions.concat( {date: new Date().toString(), persons: action.personsAdded})
//             }
//         default:
//             return state
//     }
// }

// export default reducer