import expenseMangerAPI from '../api/expenseManagerAPI'
export const expenseService = {
    saveExpense
}


function getLocalStorage(){
    if(localStorage.getItem('user'))
        return JSON.parse(localStorage.getItem('user'))
    else
        return "";
}
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Authorization":getLocalStorage().tokenType +" " + getLocalStorage().accessToken
    }
};

function  saveExpense(expense){
    if(localStorage.getItem('user')){
        return expenseMangerAPI.post('/saveexpense',expense,axiosConfig)
    }else{
        //Error need to be thrown
    }
}