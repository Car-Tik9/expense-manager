import { userConstants } from '../constants'
const initialstate = { dialogOpen: false , expenseError : '',expenses: { content:[] ,page:0,totalElements:0},userProfile:{}}
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
        case userConstants.SAVE_USER_PROFILE:
            return {...state , userProfile:action.data}
        case userConstants.UPDATE_IMAGE_URL:
            return {...state, userProfile:{...state.userProfile,imageUrl:action.url}}
        default:
            return state
    }
}