import { userConstants } from '../constants'
export function displaySnackBar(variant,message){
    return {
        type: userConstants.SHOW_SNACKBAR,
        variant,
        message
    }
}