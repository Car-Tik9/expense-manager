import React, { Component } from 'react';
import {Router,Route} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';


import '../assets/styles/Common.css';
import {history} from '../helpers'
import Dashboard from '../components/DashBoard'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { theme } from '../theme';
import RouteWithLayout from './RouteWithLayout';
import Main  from '../layouts/Main'


class App extends Component {
	render() {
		return(
			<ThemeProvider theme={theme}>
				<Router history ={history}>
					<RouteWithLayout exact path = "/"  layout={Main} component={Dashboard}/>
					<Route exact path = "/signin"  render={() => <SignIn></SignIn>}></Route>
					<Route exact path = "/signup"  render={() => <SignUp></SignUp>}></Route>
				</Router>
			</ThemeProvider>
		);
	}

}

export default App;
