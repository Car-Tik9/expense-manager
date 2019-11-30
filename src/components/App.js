import React, { Component } from 'react';
import {Router,Route,Redirect,Switch} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux'
import { getUserProfile } from '../actions/expenseActions'


import '../assets/styles/Common.css';
import {history} from '../helpers'
import Dashboard from '../components/DashBoard'
import Settings from '../components/Settings'
import Account from './Account'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { theme } from '../theme';
import RouteWithLayout from './RouteWithLayout';
import Main  from '../layouts/Main'
import { CssBaseline } from '@material-ui/core';
import Expenses from './Expenses/Expenses';



class App extends Component {


	componentDidMount() {
		console.log("Invoked")
		if(!(Object.getOwnPropertyNames(this.props.userProfile) > 0)){
			this.props.getUserProfile();
		}
	  }
	render() {
		console.log(this.props)
		return(
			<ThemeProvider theme={theme}>
				<CssBaseline></CssBaseline>
				<Router history ={history}>
					<Switch>
						<Route exact path = "/signin"  render={() => <SignIn></SignIn>}></Route>
						<Route exact path = "/signup"  render={() => <SignUp></SignUp>}></Route>
						<RouteWithLayout exact path = "/dashboard"  layout={Main} component={Dashboard}/>
						<RouteWithLayout exact path = "/settings"  layout={Main} component={Settings}/>
						<RouteWithLayout exact path = "/account"  layout={Main} component={Account}/>
						<RouteWithLayout exact path = "/expenses"  layout={Main} component={Expenses}/>
						<Redirect exact from = "/"  to="/dashboard"/>
					</Switch>
				</Router>
			</ThemeProvider>
		);
	}

}
function mapToStateToProps(state){
	console.log(state)
	const { userProfile } = state.expense;
	return {userProfile}
}
export default connect(mapToStateToProps,{getUserProfile})(App);
