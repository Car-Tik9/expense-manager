import expenseMangerAPI from '../api/expenseManagerAPI'
export const userService ={
    login
}

function login(username ,password){
    const data ={ 
        userNameOrEmail:username,
        password}
    
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
    return expenseMangerAPI.post('/auth/signin',data,axiosConfig)
    .then(handleResponse)
    .then(user =>{
        localStorage.setItem('user',JSON.stringify(user));
        return user;
    })
}

function handleResponse(response){
    const userData = {username:"karthik",passoword:'password'};
    const responseToken = response.data
    return  {...responseToken,...userData};
}