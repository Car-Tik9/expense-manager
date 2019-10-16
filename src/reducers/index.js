import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer'
import { registration } from './registrationReducer'
import { expense } from './expenseReducer'
import { snackbar } from './snackBarReducer'
 
const rootReducer = combineReducers({
    authentication,
    registration,
    expense,
    snackbar
});

export default rootReducer;