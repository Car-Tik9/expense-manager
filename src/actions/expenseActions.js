import { expenseService } from "../service/expenseService"

export const saveExpense = (expense) =>{
    return dispatch =>{
        expenseService.saveExpense(expense)
    }
}