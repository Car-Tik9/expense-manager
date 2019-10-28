import { userConstants } from '../constants'
const initialstate = { snackOpen: false , variant : 'success',message:''}
export function snackbar(state = initialstate, action) {
    switch (action.type) {
        case userConstants.SHOW_SNACKBAR:
            return { ...state, snackOpen:true, variant:action.variant, message:action.message}
        case userConstants.CLOSE_SNACKBAR:
                return { ...state, snackOpen:false}
        default:
            return state
    }
}