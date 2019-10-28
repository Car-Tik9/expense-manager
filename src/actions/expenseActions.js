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

export const getExpenses = () =>{
    return dispatch => {
        expenseService.getExpenses().then( response => {
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