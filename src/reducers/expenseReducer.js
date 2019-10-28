import { userConstants } from '../constants'
const initialstate = { dialogOpen: false , expenseError : '',expenses: []}
export function expense(state = initialstate, action) {
    switch (action.type) {
        case userConstants.OPEN_EXPENSE_DIALOG:
            return { ...state, dialogOpen: true }
        case userConstants.CLOSE_EXPENSE_DIALOG:
            return { ...state, dialogOpen: false }
        case userConstants.EXPENSE_ERROR:
            return { ...state, expenseError: action.error }
        case userConstants.EXPENSE_DATA_FROM:
            return {...state , expenses: action.data}
        default:
            return state
    }
}