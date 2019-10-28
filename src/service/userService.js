import expenseMangerAPI from '../api/expenseManagerAPI'
export const userService ={
    login,
    register,
    logout
}
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};
function login(username ,password){ 
    const data ={ 
        userNameOrEmail:username,
        password}
    return expenseMangerAPI.post('/auth/signin',data,axiosConfig)
    .then(response => {
        const userData = {username:username};
        const responseToken = response.data
        const user = {...responseToken,...userData};
        localStorage.setItem('user',JSON.stringify(user));
    }).catch(handleError)
}

function logout(){
    localStorage.removeItem('user');
}

function register(user){
    return expenseMangerAPI.post('/auth/signup',user,axiosConfig)
    .then(response => {
        return response;
    }).catch(handleErrorCodes);
}


function handleErrorCodes(errrorResponse){
const errorData = errrorResponse.response && errrorResponse.response.data;
   if(errrorResponse.response.status === 400){
        const errorMap = {};
        if(errorData.errors){
            errorData.errors.forEach( element => {
                errorMap[element.field] = element.defaultMessage;
            });
            return Promise.reject(errorMap)
        }else{
            const errorMessage = errorData.message;
            if(errorMessage.includes("Email")){
                return Promise.reject({"email":errorData.message})
            }else{
                return Promise.reject({"userName":errorData.message})
            }
        }
        
   }
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