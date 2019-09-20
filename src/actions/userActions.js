import { userService } from '../service'
import { history } from '../helpers'
import { userConstants } from '../constants'

export const login = (username,password) =>{
    return dispatch => {
        userService.login(username,password).then( 
            user =>{
            dispatch({type:userConstants.LOGIN_SUCCESS,user});
            history.push('/');
        },
        error => {
            dispatch({type:userConstants.LOGIN_FAILURE,error:error.toString()});
        }
        );
    }
}

export const register = (user) => {
    return dispatch => {
        userService.register(user).then( user =>{
            history.push('/signin');
        },
        error => {
            dispatch({type:userConstants.REGISTER_FAILURE,error})
        });
    }
} 