import { userConstants } from '../constants'
const initialstate = { dialogOpen: false , expenseError : ''}
export function expense(state = initialstate, action) {
    switch (action.type) {
        case userConstants.OPEN_EXPENSE_DIALOG:
            return { ...state, dialogOpen: true }
        case userConstants.CLOSE_EXPENSE_DIALOG:
            return { ...state, dialogOpen: false }
        case userConstants.EXPENSE_ERROR:
            return { ...state, expenseError: action.error }
        default:
            return state
    }
}