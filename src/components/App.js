import React, { Component } from 'react';
import {Router,Route} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';


import '../assets/styles/Common.css';
import {history} from '../helpers'
import Dashboard from '../components/DashBoard'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { theme } from '../theme';


class App extends Component {
	render() {
		return(
			<ThemeProvider theme={theme}>
				<Router history ={history}>
					<Route exact path = "/"  render={() => <Dashboard></Dashboard>}></Route>
					<Route exact path = "/signin"  render={() => <SignIn></SignIn>}></Route>
					<Route exact path = "/signup"  render={() => <SignUp></SignUp>}></Route>
				</Router>
			</ThemeProvider>
		);
	}

}

export default App;
