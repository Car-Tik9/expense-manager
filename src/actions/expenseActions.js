import { expenseService } from "../service/expenseService"
import { userConstants } from '../constants'
import { history } from '../helpers'
import { displaySnackBar } from './snackBarActions'

export const saveExpense = (expense) =>{
    return dispatch => {
       if(getLocalStorage().tokenType && getLocalStorage().accessToken ){
            expenseService.saveExpense(expense).then( response => {
                //dispatch({type: userConstants.CLOSE_EXPENSE_DIALOG})
                dispatch(closeExpenseDialog());
                dispatch( displaySnackBar("success", response.data.message))
            }, 
            error =>{
                console.log(error)
                dispatch(failure(error.toString()))
            })
       }else{
            history.push("/")
            return {type:userConstants.LOGIN_FAILURE,error:"Please Login Session expired"};
       }
    }
    function failure(error) { return { type: userConstants.EXPENSE_ERROR, error } }
}

export const getExpenses = (page,rowsPerPage) =>{
    return dispatch => {
        expenseService.getExpenses(page,rowsPerPage).then( response => {
        dispatch({type:userConstants.EXPENSE_DATA_FROM,data:response})
        }, error => {
            console.log(error)
        })
    }
}

export function openExpenseDialog (){
    return {
        type: userConstants.OPEN_EXPENSE_DIALOG
    }
}

export function closeExpenseDialog (){
    return {
        type: userConstants.CLOSE_EXPENSE_DIALOG
    }
}

export function dipslayExpenseError(error){
    return {
        type : userConstants.EXPENSE_ERROR,
        error
    }
}

function getLocalStorage() {
    if (localStorage.getItem('user'))
        return JSON.parse(localStorage.getItem('user'))
    else
        return "";
}


export const uploadProfilePicture = (file) =>{
    return dispatch => {
        expenseService.uploadProfilePicture(file).then( response =>{
            console.log(response);
            dispatch( displaySnackBar("success", response.data.message))
        } , 
        error => {
    
        })
    }
}

export const getUserProfile = () =>{
    return dispatch =>{
        expenseService.getUserProfile().then( response => {
            dispatch({type:userConstants.SAVE_USER_PROFILE, data :response.data})
        },error =>{
            //TODO handle error
        })
    }
}