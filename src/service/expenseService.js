import expenseMangerAPI from '../api/expenseManagerAPI'
import expenseManagerAPI from '../api/expenseManagerAPI';
export const expenseService = {
    saveExpense,
    getExpenses
}


function getLocalStorage() {
    if (localStorage.getItem('user'))
        return JSON.parse(localStorage.getItem('user'))
    else
        return "";
}
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Authorization": getLocalStorage().tokenType + " " + getLocalStorage().accessToken
    }
};

function saveExpense(expense) {
    expense.transactionDate = expense.dateOfTransaction.toLocaleDateString();
    return expenseMangerAPI.post('/saveexpense', expense, axiosConfig).then(response => {
        return response;
    }).catch(handleErrorCodes);
}


function getExpenses(){ 
    return expenseManagerAPI.post('/getExpenses',{},axiosConfig).then(response => {
        return response.data;
    }).catch(); 
}
function handleErrorCodes(errrorResponse) {
    const errorData = errrorResponse.response && errrorResponse.response.data;
    if (errrorResponse.response.status === 400) {
        const errorMap = {};
        if (errorData.errors) {
            errorData.errors.forEach(element => {
                errorMap[element.field] = element.defaultMessage;
            });
            return Promise.reject(errorMap)
        } else {
            const errorMessage = errorData.message;
            if (errorMessage.includes("Email")) {
                return Promise.reject({ "email": errorData.message })
            } else {
                return Promise.reject({ "userName": errorData.message })
            }
        }

    }
}