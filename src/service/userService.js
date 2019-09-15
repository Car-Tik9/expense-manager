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
    }).catch(handleError)
}

function handleResponse(response){
    const userData = {username:"karthik",passoword:'password'};
    const responseToken = response.data
    return  {...responseToken,...userData};
}

function handleError(error){
   const errorData = error.response && error.response.data;
   if(errorData && errorData.error){
       const errorMessage = (errorData && errorData.message);
       return Promise.reject(errorMessage);
   }else{
       return Promise.reject(error);
   }
}